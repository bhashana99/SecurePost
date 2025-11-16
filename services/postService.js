import {
  createPost as createPostRepo,
  getPostsByUser as getPostsByUserRepo,
  getPostById as getPostByIdRepo,
  updatePost as updatePostRepo,
  deletePost as deletePostRepo,
} from "../repositories/postRepository.js";

import { PostResponseDTO } from "../dtos/postResponseDTO.js";

export const createPost = async (id, postDto) => {
  const post = await createPostRepo(id, postDto);

  return new PostResponseDTO(post);
};

export const getPostsByUser = async (userId) => {
  const posts = await getPostsByUserRepo(userId);
  
  return posts.map((post) => new PostResponseDTO(post));
};

export const getPostById = async (userId, postId) => {
  const post = await getPostByIdRepo(userId, postId);

  if (!post) {
    throw new Error("Post not found");
  }

  return new PostResponseDTO(post);
};

export const updatePost = async (postId, userId, postDTO) => {
  const post = await updatePostRepo(postId, userId, postDTO);

  if (!post) {
    throw new Error("Post not found or nothing to update");
  }

  return new PostResponseDTO(post);
};

export const deletePost = async (postId, userId) => {
  const deleted = await deletePostRepo(postId, userId);

  if (!deleted) {
    throw new Error("Post not found or cannot delete");
  }

  return true;
};
