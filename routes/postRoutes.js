import express from 'express';
import {createPost } from '../controllers/postController.js';
import { authenticateJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', authenticateJWT ,createPost);

export default router;