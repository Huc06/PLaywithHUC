import { Request, Response } from 'express';
import { Message } from '../models/Message';
import { Server, Socket } from 'socket.io';
import User from '../models/User';

export const createMessage = async (req: Request, res: Response) => {
    const { senderAddr, text, username, roomId } = req.body;

    // Validate input
    if (!senderAddr || !text || !roomId) {
        return res.status(400).json({ error: 'senderId, text, and roomId are required' });
    }

    try {
        const newMessage = new Message({
            senderAddr,
            text,
            username,
            roomId,
            timestamp: new Date()
        });

        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create message' });
    }
}

export const deleteMessageById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedMessage = await Message.findByIdAndDelete(id);

        if (!deletedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }

        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete message' });
    }
}

export const fetchMessages = async (req: Request, res: Response) => {
    try {
        const messages = await Message.find({ roomId: req.params.roomId }).sort({ timestamp: 1 });
        res.status(200).json(messages);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}

export const handleSocketConnection = (io: Server) => {
    io.on('connection', (socket) => {
        console.log('User  connected:', socket.id);

        socket.on('join', async ({ addr }) => {
            let user = await User.findOne({ addr });
            if (!user) {
                user = new User({ addr });
                await user.save();
            }
            user.status = 'online';
            await user.save();
            socket.join(addr); // Join a room based on addr
        });

        socket.on('chat message', async (data) => {
            const message = new Message(data);
            await message.save();
            io.emit('chat message', data); // Broadcast message to all clients
        });

        socket.on('disconnect', async () => {
            console.log('User  disconnected:', socket.id);
            const user = await User.findOne({ addr: socket.id });
            if (user) {
                user.status = 'offline';
                await user.save();
            }
        });
    });
};
