// db.config.js

const { log } = require('console');
const mysql = require('mysql2/promise')
require('dotenv').config()



const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port:process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});



async function connectionDB (){
    try{
        const conn = await pool.getConnection();
        conn.release();
        console.log("✅ MySQL pool connected");
    } catch (err) {
        console.error("❌ MySQL connection error:", err.message || err);
        process.exit(1);
  }
} 



module.exports = {
    pool,
    connectionDB 
}