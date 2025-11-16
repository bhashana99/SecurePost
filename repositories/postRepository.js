import Post from "../model/PostModel.js";
import connection from "../config/db.js";

export const createPost = async (userId, { title, content }) => {
  const [result] = await connection.execute(
    "INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)",
    [userId, title, content]
  );

  const [rows] = await connection.execute("SELECT * FROM posts WHERE id = ?", [
    result.insertId,
  ]);

  return new Post(rows[0]);
};

export const getPostsByUser = async (userId) => {
  const [rows] = await connection.execute(
    "SELECT * FROM posts WHERE user_id = ? ORDER BY created_at DESC",
    [userId]
  );
  return rows.map((row) => new Post(row));
};

export const getPostById = async (userId, postId) => {
  const [rows] = await connection.execute(
    "SELECT * FROM posts WHERE id = ? AND user_id = ?",
    [postId, userId]
  );
  return rows.length ? new Post(rows[0]) : null;
};

export const updatePost = async (postId, userId, { title, content }) => {
  const fields = [];
  const values = [];

  if (title) {
    fields.push("title = ?");
    values.push(title);
  }
  if (content) {
    fields.push("content = ?");
    values.push(content);
  }

  if (fields.length === 0) throw new Error("No fields to update");

  values.push(postId, userId);

  const sql = `UPDATE posts SET ${fields.join(
    ", "
  )} WHERE id = ? AND user_id = ?`;
  const [result] = await connection.execute(sql, values);

  if (result.affectedRows === 0) return null;

  const [rows] = await connection.execute("SELECT * FROM posts WHERE id = ?", [
    postId,
  ]);
  return new Post(rows[0]);
};

export const deletePost = async (postId, userId) => {
  const [result] = await connection.execute(
    "DELETE FROM posts WHERE id = ? AND user_id = ?",
    [postId, userId]
  );

  return result.affectedRows > 0;
};
