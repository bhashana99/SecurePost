import fs from 'fs';
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  multipleStatements: true
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL Connection Failed:", err);
    return;
  }

  console.log("Connected to MySQL");

  
  const sql = fs.readFileSync("./config/db.sql", "utf8");

  connection.query(sql, (err) => {
    if (err) {
      console.error("Error initializing database:", err);
    } else {
      console.log("Database initialized successfully");
    }
  });
});


export default connection;
