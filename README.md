# MediMart Pharmacy Express + PostgreSQL Server

## Setup
```bash
cp .env.example .env
npm install
createdb pharmacy_db
psql -U postgres -d pharmacy_db -f database/schema.sql
psql -U postgres -d pharmacy_db -f database/seed.sql
npm start
```

API runs at `http://localhost:5000/api`.

Default admin:
- Email: `admin@pharmacy.test`
- Password: `Admin@123`

## Endpoints
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/products`
- `POST /api/products` Admin JWT required
- `PUT /api/products/:id` Admin JWT required
- `DELETE /api/products/:id` Admin JWT required
- `GET /api/categories`
- `POST /api/orders` User JWT required
- `GET /api/orders/my` User JWT required
- `GET /api/orders` Admin JWT required
- `GET /api/reports/sales?year=2026` Admin JWT required
