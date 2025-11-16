import { createPost as createPostRepo } from "../repositories/postRepository.js";
import {PostResponseDTO} from '../dtos/postResponseDTO.js';

export const createPost = async(id,postDto)=>{
    const post = await createPostRepo(id,postDto);

    return new PostResponseDTO(post);
}