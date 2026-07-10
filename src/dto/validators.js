exports.email=v=>/^\S+@\S+\.\S+$/.test(String(v||''));
exports.register=b=>{const e=[];if(!b.name)e.push('Name is required');if(!exports.email(b.email))e.push('Valid email is required');if(!b.password||String(b.password).length<6)e.push('Password must be at least 6 characters');return e};
exports.login=b=>{const e=[];if(!exports.email(b.email))e.push('Valid email is required');if(!b.password)e.push('Password is required');return e};
exports.product=b=>{const e=[];if(!b.name)e.push('Name required');if(Number(b.price)<0)e.push('Price invalid');if(Number(b.stock)<0)e.push('Stock invalid');if(!b.category_id)e.push('Category required');return e};
exports.order=b=>{const e=[];if(!Array.isArray(b.items)||!b.items.length)e.push('Items required');for(const i of b.items||[]){if(!i.product_id)e.push('Product required');if(Number(i.quantity)<=0)e.push('Quantity invalid')}return e};
