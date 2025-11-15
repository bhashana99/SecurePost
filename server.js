import express from 'express';
import db from './config/db.js';


const app = express();
const PORT = 3000;


app.use(express.json());


db.query('SELECT 1', (err, results) => {
  if (err) console.error('DB test query failed:', err);
  else console.log('DB connected and test query ran');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
