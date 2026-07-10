# MediMart Pharmacy Express PostgreSQL Server

## Important fix for SCRAM password error
This project converts the PostgreSQL password to a string and loads `.env` from the server root. Your `.env` is already set to:
`DATABASE_URL=postgres://postgres:postgres@localhost:5432/pharmacy_db`

## Local setup
```bash
npm install
createdb pharmacy_db
psql "postgres://postgres:postgres@localhost:5432/pharmacy_db" -f database/schema.sql
npm run db:seed:node
npm start
```

## Test
```bash
curl http://localhost:5000/api/health
curl "http://localhost:5000/api/products?search=vitamin"
```

Admin login: `admin@pharmacy.test` / `Admin@123`.
