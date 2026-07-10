const r=require('express').Router(),c=require('../controllers/user.controller'),auth=require('../middleware/auth');r.get('/profile',auth,c.profile);module.exports=r;
