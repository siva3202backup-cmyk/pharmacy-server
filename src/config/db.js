require('./env');
const { Pool } = require('pg');
function config(){
  const url=(process.env.DATABASE_URL||'').trim();
  if(url){ const u=new URL(url); return {host:u.hostname,port:Number(u.port||5432),database:u.pathname.replace(/^\//,''),user:decodeURIComponent(u.username),password:String(decodeURIComponent(u.password||'')),ssl:false}; }
  return {host:'localhost', port:5432, database:'pharmacy_db', user:'postgres', password:'postgres'};
}
const pool = new Pool(config());
module.exports = { query:(t,p)=>pool.query(t,p), pool };
