# Pharmacy Express PostgreSQL Server

## Run
```bash
npm install
psql "postgres://postgres:postgres@localhost:5432/pharmacy_db" -f database/pharmacy_extend_schema.sql
npm start
```

Health: http://localhost:5000/api/health

Admin login: admin@pharmacy.test / Admin@123

APIs included: /api/products, /api/categories, /api/brands, /api/cart, /api/orders, /api/payments, /api/reviews, /api/wishlist, /api/coupons, /api/reports, /api/users, /api/admin.
