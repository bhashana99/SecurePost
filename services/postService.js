import { createPost as createPostRepo, getPostsByUser as getPostsByUserRepo } from "../repositories/postRepository.js";
import { PostResponseDTO } from '../dtos/postResponseDTO.js';

export const createPost = async (id, postDto) => {
    const post = await createPostRepo(id, postDto);

    return new PostResponseDTO(post);
}

export const getPostsByUser = async (userId) => {
    const posts = await getPostsByUserRepo(userId);
    return posts.map(post => new PostResponseDTO(post));
}