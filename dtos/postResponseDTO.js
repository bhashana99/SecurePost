export class PostResponseDTO {
  constructor(post) {
    this.id = post.id;
    this.userId = post.userId;
    this.title = post.title;
    this.content = post.content;
    this.createdAt = post.createdAt;
    this.updatedAt = post.updatedAt;
  }
}
