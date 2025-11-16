import fs from 'fs';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true
});

const sql = fs.readFileSync('./config/db.sql', 'utf8');
await connection.query(sql);

console.log('Connected to MySQL and initialized database');


export default connection;
