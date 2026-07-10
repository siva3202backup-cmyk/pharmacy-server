const r=require('express').Router(),c=require('../controllers/category.controller');r.get('/',c.list);module.exports=r;
