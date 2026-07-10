function validateProduct(body){const errors=[];if(!body.name)errors.push('Name is required');if(Number(body.price)<0)errors.push('Price must be valid');if(Number(body.stock)<0)errors.push('Stock must be valid');if(!body.category_id)errors.push('Category is required');return errors;}
module.exports={validateProduct};
