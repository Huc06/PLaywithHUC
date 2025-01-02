export interface User {
    addr: string;
    name?: string;
    imageUrl?: string;
    badges?: string;
    interactions?: number;
    bio?: string;
    status: "online" | "offline";
    lastSeen?: Date;
    rating?: number;
    hourlyRate?: string;
}