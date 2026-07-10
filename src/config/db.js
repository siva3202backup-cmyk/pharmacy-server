require('./env');
const { Pool } = require('pg');
function connectionConfig(){
  const url=(process.env.DATABASE_URL||'').trim();
  if(url){
    const u=new URL(url);
    return {host:u.hostname,port:Number(u.port||5432),database:u.pathname.replace(/^\//,''),user:decodeURIComponent(u.username),password:String(decodeURIComponent(u.password||'')),ssl:false};
  }
  return {host:process.env.PGHOST||'localhost',port:Number(process.env.PGPORT||5432),database:process.env.PGDATABASE||'pharmacy_db',user:process.env.PGUSER||'postgres',password:String(process.env.PGPASSWORD||'')};
}
const config=connectionConfig();
if(typeof config.password!=='string') config.password=String(config.password||'');
const pool=new Pool(config);
pool.on('error',err=>console.error('PostgreSQL pool error:',err.message));
module.exports={query:(t,p)=>pool.query(t,p), pool, config:{...config,password:'***'}};
