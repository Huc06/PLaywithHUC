// src/models/User.ts
import mongoose, { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    addr: string;
    name?: string;
    imageUrl: string;
    badges?: string;
    interactions: number;
    bio: string;
    status: "online" | "offline";
    lastSeen: Date;
    rating: number;
    hourlyRate: string;
}

const UserSchema = new Schema<IUser>(
    {
        addr: { type: String, required: true },
        name: { type: String, required: false },
        imageUrl: { type: String, required: false },
        badges: { type: String, required: false },
        interactions: { type: Number, required: false },
        bio: { type: String, required: false },
        status: { type: String, required: false },
        lastSeen: { type: Date, required: false },
        rating: { type: Number, required: false },
        hourlyRate: { type: String, required: false },
    }
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
