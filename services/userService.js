import bcrypt from "bcryptjs";
import UserResponseDTO from "../dtos/UserResponseDTO.js";
import {findUserByEmail,createUser} from "../repositories/userRepository.js";

export const registerUser = async (userRequestDTO) => {

    const existingUser = await findUserByEmail(userRequestDTO.email);

    if (existingUser) {
        throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(userRequestDTO.password, 10);

    const user = await createUser({
        name: userRequestDTO.name,
        email: userRequestDTO.email,
        password: hashedPassword,
    });

    return new UserResponseDTO(user);
}

