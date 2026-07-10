module.exports=(req,res,next)=>req.user?.role==='ADMIN'?next():res.status(403).json({message:'Admin access required'});
