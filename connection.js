const mysql2 = require('mysql2')
require('dotenv').config()

module.exports = () => {
  return mysql2.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD ||'',
    database: process.env.DB_NAME || 'dashboard',
    port: process.env.DB_PORT || 3306,
    connectTimeout: 30000
  })
}