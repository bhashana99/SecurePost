export class LoginRequestDTO {
    constructor({ email, password }) {
        if (!email || !password) {
            throw new Error("Email and password are required");
        }

        this.email = email;
        this.password = password;

         if (!this.isValidEmail(this.email)) {
            throw new Error("Invalid email format");
        }
    }

    isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

}