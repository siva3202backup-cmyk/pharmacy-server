function validateRegister(body){const errors=[];if(!body.name)errors.push('Name is required');if(!body.email)errors.push('Email is required');if(!body.password||body.password.length<6)errors.push('Password must be at least 6 characters');return errors;}
function validateLogin(body){const errors=[];if(!body.email)errors.push('Email is required');if(!body.password)errors.push('Password is required');return errors;}
module.exports={validateRegister,validateLogin};
