import axios from "axios";

const API_URL = "http://localhost:8080"; // Điều chỉnh theo URL server của bạn

// Tạo hoặc lấy phòng chat 1-1
export const createOrGetPrivateRoom = async (
  userAddr1: string,
  userAddr2: string
) => {
  try {
    const response = await axios.post(`${API_URL}/api/chatroom/private`, {
      userAddr1,
      userAddr2,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating/getting chat room:", error);
    throw error;
  }
};

// Lấy danh sách phòng chat của user
export const getUserChats = async (userAddr: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/api/chatroom/user/${userAddr}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user chats:", error);
    throw error;
  }
};
