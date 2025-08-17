import express from 'express';
import {protect, AllowedRoles} from '../middlewares/authMiddleware.js';
import { registerUser, loginUser, getProfile, updateProfile, getUsers, updateUser, deleteUser } from '../controllers/userControllers.js';
import forgotPassword from '../controllers/forgotPasswordController.js';

const router = express.Router();
// Register route

router.post('/register', registerUser);

router.post('/admin-register',protect, AllowedRoles('admin','supervisor'), registerUser);

router.post('/login',loginUser);

router.get('/profile', protect, getProfile);

router.put('/profile', protect,updateProfile);

router.post('/forgot-password', forgotPassword);

//Basic user features   

router.get('/',protect,AllowedRoles('admin'),getUsers);

router.put('/:id',protect, AllowedRoles('admin','supervisor'),updateUser);

router.delete('/:id',protect,AllowedRoles('admin','supervisor'),deleteUser);


export default router;