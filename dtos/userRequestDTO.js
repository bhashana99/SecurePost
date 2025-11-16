
export class UserRequestDTO {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;

  
    this.validate();
  }

  validate() {
    if (!this.name || !this.email || !this.password) {
      throw new Error("All fields are required");
    }

    if (!this.isValidEmail(this.email)) {
      throw new Error("Invalid email format");
    }

    if (this.password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
  }

  isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}
