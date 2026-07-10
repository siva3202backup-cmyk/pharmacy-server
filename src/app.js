const express = require('express');const cors = require('cors');const helmet = require('helmet');const morgan = require('morgan');
const authRoutes = require('./routes/auth.routes');const productRoutes = require('./routes/product.routes');const categoryRoutes = require('./routes/category.routes');const orderRoutes = require('./routes/order.routes');const userRoutes = require('./routes/user.routes');const reportRoutes = require('./routes/report.routes');
const app = express();
app.use(helmet());app.use(cors({origin:process.env.CLIENT_ORIGIN || 'http://localhost:4200',credentials:true}));app.use(express.json({limit:'1mb'}));app.use(morgan('dev'));
app.get('/api/health',(req,res)=>res.json({status:'ok',service:'pharmacy-api'}));
app.use('/api/auth',authRoutes);app.use('/api/products',productRoutes);app.use('/api/categories',categoryRoutes);app.use('/api/orders',orderRoutes);app.use('/api/users',userRoutes);app.use('/api/reports',reportRoutes);
app.use((req,res)=>res.status(404).json({message:'Route not found'}));
app.use((err,req,res,next)=>{console.error(err);res.status(err.status||500).json({message:err.message||'Server error'});});
module.exports=app;
