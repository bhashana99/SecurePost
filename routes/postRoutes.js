import express from 'express';
import {createPost,getPostsByUser,getPostById } from '../controllers/postController.js';
import { authenticateJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', authenticateJWT ,createPost);
router.get('/', authenticateJWT ,getPostsByUser);
router.get('/:id', authenticateJWT ,getPostById);

export default router;