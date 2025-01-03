export interface Message {
    _id: string;
    roomId: string;
    senderAddr: string;
    username: string;
    text: string;
    timestamp: Date;
}