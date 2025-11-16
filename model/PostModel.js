export class Post {
  constructor({ id, user_id, title, content, created_at, updated_at }) {
    this.id = id;
    this.userId = user_id;
    this.title = title;
    this.content = content;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
