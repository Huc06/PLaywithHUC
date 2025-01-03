import mongoose from 'mongoose';

const chatRoomSchema = new mongoose.Schema({
    participants: [{
        type: String,  // wallet addresses
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);