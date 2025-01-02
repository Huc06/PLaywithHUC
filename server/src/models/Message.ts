import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  roomId: string;
  senderAddr: string;
  username: string;
  text: string;
  timestamp: Date;
}

const MessageSchema: Schema = new Schema({
  roomId: { type: String, required: true },
  senderAddr: { type: String, required: true },
  username: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const Message = mongoose.model<IMessage>('Message', MessageSchema);