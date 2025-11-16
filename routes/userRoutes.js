import express from 'express';
import { registerUser,loginUser, updateUser } from '../controllers/userController.js';
import { authenticateJWT } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update',authenticateJWT, updateUser);

export default router;
