const router=require('express').Router();const c=require('../controllers/category.controller');router.get('/',c.list);module.exports=router;
