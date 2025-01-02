export interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}

export interface CardTopProps {
  username: string;
  imageUrl: string;
  tag: string;
  game: {
    name: string;
    logo: string;
  };
  badges?: string[];
  onPlay?: () => void;
  onClick?: () => void;
}

export interface CardModalProps {
  profile: CardTopProps | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface ChatProps {
  username: string;
}

export interface Profile {
  username: string;
  imageUrl: string;
  badges: string[];
  interactions: number;
  bio: string;
  status: "online" | "offline";
  lastSeen: Date;
  rating: number;
  hourlyRate: string;
  walletAddress: string;
}
