import connection from "../config/db.js";
import { User } from "../model/userModel.js";


export const findUserByEmail = async (email) => {

  const [rows] = await connection.execute(
    'SELECT * FROM users WHERE email = ? LIMIT 1',
    [email]
  );

  if (rows.length === 0) return null;

  return new User(rows[0]);
};

export const createUser = async ({ name, email, password }) => {
  const [result] = await connection.execute(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  );
  return new User({ id: result.insertId, name, email, password });
};


