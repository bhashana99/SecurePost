import bcrypt from "bcryptjs";
import UserResponseDTO from "../dtos/UserResponseDTO.js";
import { LoginResponseDTO } from "../dtos/loginResponseDTO.js";
import { findUserByEmail, createUser, updateUser as updateUserRepo } from "../repositories/userRepository.js";
import jwt from 'jsonwebtoken';

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

export const loginUser = async (loginRequestDTO) => {
    const existingUser = await findUserByEmail(loginRequestDTO.email);

    if (!existingUser) {
        throw new Error("Invalid email or password");
    }

    const isPasswordMatch = await bcrypt.compare(loginRequestDTO.password, existingUser.password);

    if (!isPasswordMatch) {
        throw new Error("Invalid email or password");
    }

    const token = jwt.sign(
        {
            id: existingUser.id,
            email: existingUser.email
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    )

    return new LoginResponseDTO(existingUser, token);
}

export const updateUser = async (id, updateUserRequestDTO) => {

    if (updateUserRequestDTO.password) {
        updateUserRequestDTO.password = await bcrypt.hash(updateUserRequestDTO.password, 10);
    }

    const updatedUser = await updateUserRepo(id, updateUserRequestDTO);

    if (!updatedUser) {
        throw new Error("User not found");
    }

    return new UserResponseDTO(updatedUser);

}