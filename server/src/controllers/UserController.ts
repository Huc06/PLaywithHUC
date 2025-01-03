import { Request, Response } from 'express';
import User from '../models/User';

// Create a new user
export const createUser = async (_addr: string) => {
    try {
        const user = new User({
            addr: _addr,
            name: "",
            imageUrl: "",
            badges: "",
            interactions: null,
            bio: "",
            status: "",
            lastSeen: null,
            rating: null,
            hourlyRate: "",
        });
        await user.save();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error("Error: " + error);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
};

// Get a user by ID
export const getUserByAddr = async (req: Request, res: Response) => {
    try {
        //console.log(req.params.id);
        const userAddr = req.params.id;
        const user = await User.findOne({ addr: userAddr });
        console.log("user: ", user);
        if (!user) {
            createUser(userAddr);
        }
        res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Update a user by ID
export const updateUserByAddr = async (req: Request, res: Response) => {
    try {
        console.log("req body: ", req.body);
        const userAddr = req.params.id;
        const user = await User.findOneAndUpdate({ addr: userAddr }, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Delete a user by ID
export const deleteUserByAddr = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndDelete({ addr: req.params.id });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// List all users
export const listUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};