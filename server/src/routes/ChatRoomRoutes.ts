import express from 'express';
import {
    createOrGetPrivateRoom,
    getUserChats
} from '../controllers/ChatRoomController';

const router = express.Router();

router.post('/private', createOrGetPrivateRoom);
router.get('/user/:userAddr', getUserChats);

export default router;