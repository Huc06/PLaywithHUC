import React, { useEffect, useState } from 'react';
import {
    initializeSocket,
    sendMessage,
    fetchRoomMessages,
    subscribeToMessages
} from '@/services/chatMessageService';
import {
    createOrGetPrivateRoom,
    getUserChats
} from '@/services/chatRoomService';

interface Message {
    _id: string;
    senderAddr: string;
    text: string;
    username?: string;
    timestamp: Date;
}

interface ChatRoom {
    _id: string;
    participants: string[];
}

const ChatComponent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [rooms, setRooms] = useState<ChatRoom[]>([]);
    const [currentRoom, setCurrentRoom] = useState<string>('');
    const [messageText, setMessageText] = useState('');

    const userAddress = "YOUR_WALLET_ADDRESS"; // Lấy từ wallet connection
    const username = "YOUR_USERNAME"; // Lấy từ user profile

    useEffect(() => {
        // Khởi tạo socket connection
        const socket = initializeSocket(userAddress);

        // Lấy danh sách phòng chat
        loadUserChats();

        // Đăng ký nhận tin nhắn mới
        subscribeToMessages((newMessage) => {
            setMessages(prev => [...prev, newMessage]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const loadUserChats = async () => {
        try {
            const userRooms = await getUserChats(userAddress);
            setRooms(userRooms);
        } catch (error) {
            console.error('Error loading chats:', error);
        }
    };

    const loadRoomMessages = async (roomId: string) => {
        try {
            const roomMessages = await fetchRoomMessages(roomId);
            setMessages(roomMessages);
            setCurrentRoom(roomId);
        } catch (error) {
            console.error('Error loading messages:', error);
        }
    };

    const startPrivateChat = async (otherUserAddr: string) => {
        try {
            const room = await createOrGetPrivateRoom(userAddress, otherUserAddr);
            setCurrentRoom(room._id);
            await loadRoomMessages(room._id);
        } catch (error) {
            console.error('Error starting private chat:', error);
        }
    };

    const handleSendMessage = () => {
        if (!messageText.trim() || !currentRoom) return;

        sendMessage({
            roomId: currentRoom,
            senderAddr: userAddress,
            text: messageText,
            username: username
        });

        setMessageText('');
    };

    return (
        <div>
            {/* Render your chat UI here */}
            <div className="chat-rooms">
                {rooms.map(room => (
                    <div
                        key={room._id}
                        onClick={() => loadRoomMessages(room._id)}
                    >
                        {/* Room info */}
                    </div>
                ))}
            </div>

            <div className="chat-messages">
                {messages.map(message => (
                    <div key={message._id}>
                        <strong>{message.username}:</strong> {message.text}
                    </div>
                ))}
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatComponent;