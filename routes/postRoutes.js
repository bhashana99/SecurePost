import express from 'express';
import {createPost,getPostsByUser,getPostById,updatePost,deletePost } from '../controllers/postController.js';
import { authenticateJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', authenticateJWT ,createPost);
router.get('/', authenticateJWT ,getPostsByUser);
router.get('/:id', authenticateJWT ,getPostById);
router.put('/:id', authenticateJWT ,updatePost);
router.delete('/:id', authenticateJWT ,deletePost);

export default router;