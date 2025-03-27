// db.js
const { Pool } = require('pg');

const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'ecommerce-kecil1',
password: '2376',
port: 5432,
});
module.exports = pool;
