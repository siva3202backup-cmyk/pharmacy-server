
require('../config/env');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const slug = require('../utils/slug');

const categories = ['Supplements','Medicines','Herbs','Baby','Beauty','Health Topics','Personal Care','Protein'];
const names = ['Pyridoxine Vitamin B6','Vitamin C Sugarless Tab','Protein Chocolate Flake','Advil Minis Liquid Cap','Promethazine','Otrivin Breathe Clean','Gastro Soothe Tab','Herbal Care Capsules','Baby Gentle Lotion','Beauty Skin Serum','Antiseptic Ointment','Diabetes Nutrition Vanilla','Honey Lemon Lozenges','Liver Detox Support','Omega Fish Oil','Face Mask Pack','Amber Dropper Bottle','Spring Leaf Detox','Montelukast Support','Eye Gel Lubricating'];
(async()=>{
  const client = await db.pool.connect();
  try{
    await client.query('begin');
    const hash = await bcrypt.hash('Admin@123', 10);
    await client.query("insert into users(name,email,password,role) values($1,$2,$3,$4) on conflict(email) do update set password=excluded.password, role=excluded.role", ['Admin','admin@pharmacy.test',hash,'ADMIN']);
    for(const c of categories){ await client.query('insert into categories(name,slug,image_url) values($1,$2,$3) on conflict(slug) do nothing',[c,slug(c),'']); }
    const catRows = await client.query('select id from categories order by id');
    for(let i=1;i<=200;i++){
      const base = names[i % names.length]; const s = slug(`${base}-${i}`);
      await client.query(`insert into products(name,slug,description,price,sale_price,stock,image_url,category_id,is_featured)
        values($1,$2,$3,$4,$5,$6,$7,$8,$9) on conflict(slug) do nothing`,[
          `${base} ${i}`, s, `Quality pharmacy product for wellness, daily health, and family care. Product code ${i}`,
          Number((5 + (i % 95) + 0.95).toFixed(2)), i % 4 === 0 ? Number((3 + (i % 45) + 0.50).toFixed(2)) : null,
          20 + (i % 180), '', catRows.rows[i % catRows.rows.length].id, i <= 24
        ]);
    }
    await client.query('commit');
    console.log('Seed complete: admin user and 200 products are ready.');
  }catch(e){ await client.query('rollback'); console.error(e); process.exitCode=1; }
  finally{ client.release(); await db.pool.end(); }
})();
