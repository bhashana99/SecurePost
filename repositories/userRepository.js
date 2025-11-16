import connection from "../config/db.js";
import UserResponseDTO from "../dtos/UserResponseDTO.js";
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


export const updateUser = async (id, { name, email, password }) => {
  
  if (email) {
    const [existingRows] = await connection.execute(
      "SELECT id FROM users WHERE email = ? AND id != ?",
      [email, id]
    );
    if (existingRows.length > 0) {
      throw new Error("Email already exists");
    }
  }

  const fields = [];
  const values = [];
  


  if (name) {
    fields.push("name = ?");
    values.push(name);
  }

  if (email) {
    fields.push("email = ?");
    values.push(email);
  }

  if (password) {
    fields.push("password = ?");
    values.push(password);
  }

  if (fields.length === 0) {
    throw new Error("No fields to update");

  }

  values.push(id);


  const sql = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;
  const [result] = await connection.execute(sql, values);

  if (result.affectedRows === 0) return null;

  const [rows] = await connection.execute(
    "SELECT * FROM users WHERE id = ?",
    [id]
  );

  return new User(rows[0]);
}