import Post from "../model/PostModel.js";
import connection from "../config/db.js";

export const createPost = async (userId, { title, content }) => {
  const [result] = await connection.execute(
    "INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)",
    [userId, title, content]
  );

  const [rows] = await connection.execute(
    "SELECT * FROM posts WHERE id = ?",
    [result.insertId]
  );

  return new Post(rows[0]);
};
