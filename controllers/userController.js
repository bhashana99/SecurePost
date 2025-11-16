import { UserRequestDTO } from "../dtos/userRequestDTO.js"
import { registerUser as registerUserService} from "../services/userService.js"

export const registerUser = async (req, res) => {
    try {
        const userRequestDTO = new UserRequestDTO(req.body);
        const newUser = await registerUserService(userRequestDTO);

        res.status(201).json({
            message: 'User registered successfully',
            newUser
        });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

}

export const loginUser = async (req,res) =>{
    try {
        
    } catch (error) {
        
    }
}

