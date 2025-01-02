import axios from 'axios';
import { io, Socket } from 'socket.io-client';
import { Message } from '@/types/messageType';
const API_URL = 'http://localhost:8080'; // Điều chỉnh theo URL server của bạn
let socket: Socket;

export const initializeSocket = (addr: string) => {
    socket = io(API_URL);

    // Kết nối và join rooms
    socket.emit('join', { addr });

    return socket;
};

export const disconnectSocket = () => {
    if (socket) socket.disconnect();
};

// Gửi tin nhắn qua socket
export const sendMessage = (data: {
    roomId: string;
    senderAddr: string;
    text: string;
    username: string;
}) => {
    if (socket) {
        socket.emit('chat message', data);
    }
};

// Lấy tin nhắn của một phòng
export const fetchRoomMessages = async (roomId: string) => {
    try {
        const response = await axios.get(`${API_URL}/api/messages/${roomId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error;
    }
};

// Xóa tin nhắn
export const deleteMessage = async (messageId: string) => {
    try {
        const response = await axios.delete(`${API_URL}/api/messages/${messageId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting message:', error);
        throw error;
    }
};

// Đăng ký lắng nghe tin nhắn mới
export const subscribeToMessages = (callback: (message: Message) => void) => {
    if (socket) {
        socket.on('chat message', callback);
    }
}; 