import UserResponseDTO from "./UserResponseDTO";

export class LoginResponseDTO{
    constructor(user,token){
        this.user = new UserResponseDTO(user);
        this.token = token;
    }
}