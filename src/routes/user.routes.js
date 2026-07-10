const router=require('express').Router();const c=require('../controllers/user.controller');const auth=require('../middleware/auth');router.get('/profile',auth,c.profile);module.exports=router;
