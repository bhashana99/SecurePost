export class UpdateUserRequestDTO {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;


        if (this.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.email)) throw new Error("Invalid email format");
        }

        if (this.password && this.password.length < 6) {
            throw new Error("Password must be at least 6 characters long");
        }
    }
    
}