const db=require('../config/db');exports.list=async(req,res,next)=>{try{const r=await db.query('select * from categories order by id');res.json(r.rows)}catch(e){next(e)}};
