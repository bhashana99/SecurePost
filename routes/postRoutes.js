import express from 'express';
import {createPost,getPostsByUser } from '../controllers/postController.js';
import { authenticateJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', authenticateJWT ,createPost);
router.get('/', authenticateJWT ,getPostsByUser);

export default router;