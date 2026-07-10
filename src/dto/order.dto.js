function validateOrder(body){const errors=[];if(!Array.isArray(body.items)||body.items.length===0)errors.push('Order items are required');for(const item of body.items||[]){if(!item.product_id)errors.push('Product id is required');if(!item.quantity||Number(item.quantity)<=0)errors.push('Quantity must be positive');}return errors;}
module.exports={validateOrder};
