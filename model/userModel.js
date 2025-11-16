export class User {
  constructor({ id, name, email, password, created_at, updated_at }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
