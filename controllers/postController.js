import { CreatePostRequestDTO } from "../dtos/createPostRequestDTO.js";
import { createPost as createPostService,getPostsByUser as getPostsByUserService,getPostById as getPostByIdService } from "../services/postService.js";

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

export const getPostsByUser = async(req,res) => {
    try {
         const userId = req.user.id;
         const userPosts = await getPostsByUserService(userId);
          return res.status(200).json(userPosts);

    } catch (error) {
         return res.status(400).json({ message: error.message });
    }
}

export const getPostById = async(req,res) => {
    try {
        const userId = req.user.id;
        const postId = req.params.id;
        const post = await getPostByIdService(userId,postId);
         return res.status(200).json(post);
    } catch (error) {
         return res.status(400).json({ message: error.message });
    }
}