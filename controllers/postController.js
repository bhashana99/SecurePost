import { CreatePostRequestDTO } from "../dtos/createPostRequestDTO.js";
import { createPost as createPostService } from "../services/postService.js";

export const createPost = async (req,res)=>{
    try {
        const userId = req.user.id;
        const createPostRequestDTO = new CreatePostRequestDTO(req.body);
        const newPost = await createPostService(userId,createPostRequestDTO);

        return res.status(201).json({ 
            message: "Post created", 
            newPost
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}