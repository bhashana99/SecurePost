import { LoginRequestDTO } from "../dtos/loginRequestDTO.js";
import { UserRequestDTO } from "../dtos/userRequestDTO.js"
import { registerUser as registerUserService,loginUser as loginUserService} from "../services/userService.js"

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
        const loginRequestDTO = new LoginRequestDTO(req.body);
        const responseWithJwt = await loginUserService(loginRequestDTO);

        return res.status(200).json({
            message: 'User Login successfully',
            responseWithJwt
        })
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

