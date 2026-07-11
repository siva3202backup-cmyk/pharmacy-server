require('../config/env'); const db=require('../config/db'); db.query('select 1 ok').then(r=>{console.log('smoke ok',r.rows[0]);process.exit(0)}).catch(e=>{console.error(e.message);process.exit(1)});
