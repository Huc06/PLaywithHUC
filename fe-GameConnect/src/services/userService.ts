// src/userService.ts
import axios from 'axios';
import { User } from '@/types/userType';

const API_URL = 'http://localhost:8080/users'; // Adjust the URL based on your server setup

// Create a new user
export const createUser = async (addr: string) => {
    const response = await axios.post(API_URL, { addr });
    return response.data;
};

// Get a user by address
export const getUserByAddr = async (addr: string) => {
    const response = await axios.get(`${API_URL}/${addr}`);
    return response.data;
};

// Update a user by address
export const updateUserByAddr = async (userData: User) => {
    const response = await axios.put(`${API_URL}/${userData.addr}`, userData);
    return response.data;
};

// Delete a user by address
export const deleteUserByAddr = async (addr: string) => {
    const response = await axios.delete(`${API_URL}/${addr}`);
    return response.data;
};

// List all users
export const listUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};