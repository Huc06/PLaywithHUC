import { Request, Response } from 'express';
import { ChatRoom } from '../models/ChatRoom';

export const createOrGetPrivateRoom = async (req: Request, res: Response) => {
    const { userAddr1, userAddr2 } = req.body;

    try {
        // Tìm phòng chat hiện có giữa 2 người
        let room = await ChatRoom.findOne({
            participants: { $all: [userAddr1, userAddr2] }
        });

        // Nếu chưa có thì tạo mới
        if (!room) {
            room = new ChatRoom({
                participants: [userAddr1, userAddr2]
            });
            await room.save();
        }

        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create/get chat room' });
    }
};

export const getUserChats = async (req: Request, res: Response) => {
    const { userAddr } = req.params;

    try {
        const rooms = await ChatRoom.find({
            participants: userAddr
        });
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user chats' });
    }
};