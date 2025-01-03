import express from 'express';
import {
    fetchMessages,
    createMessage,
    deleteMessageById
} from '../controllers/MessageController';

const router = express.Router();

router.post('/', createMessage);
router.get('/messages/:roomId', fetchMessages);
router.delete('/:roomId', deleteMessageById);

export default router;