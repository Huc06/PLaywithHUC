export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Post {
  id: number;
  author: User;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
}
