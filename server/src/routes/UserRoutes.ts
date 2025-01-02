import express from 'express';
import {
    createUser,
    updateUserByAddr,
    deleteUserById,
    listUsers,
    getUserByAddr
} from '../controllers/UserController';

const router = express.Router();

// Route to create a new user
router.post('/', createUser);

// Route to get a user by ID
router.get('/:id', getUserByAddr);

// Route to update a user by ID
router.put('/:id', updateUserByAddr);

// Route to delete a user by ID
router.delete('/:id', deleteUserById);

// Route to list all users
router.get('/', listUsers);

export default router;