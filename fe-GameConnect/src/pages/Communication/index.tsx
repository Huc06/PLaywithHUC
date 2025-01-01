import { CommunityTop } from "@/components/Home/Communication/CommunityTop";
import { Feed } from "@/components/Home/Communication/Feed";
import Game from "@/components/Home/Communication/Game";
import { Navigation } from "@/components/Home/Communication/Navigation";
import { Sidebar } from "@/components/Home/Communication/SideBar";
import { CreatePost } from "@/components/Home/Communication/CreatePost";
import { useState } from "react";
import { Post, User } from "@/components/types/post";

const currentUser: User = {
  id: "1",
  name: "Current User",
  avatar: `https://api.dicebear.com/6.x/avataaars/svg?seed=${Math.random()}`,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("latest");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: {
        id: "2",
        name: "Kenny lemar",
        avatar: `https://api.dicebear.com/9.x/thumbs/svg`,
      },
      content: "available <3\nhappy new year! I do free gifts ^_^",
      image: "src/assets/year.png",
      timestamp: "4 minutes ago",
      likes: 1,
      comments: 0,
    },
  ]);

  const addPost = (
    newPost: Omit<Post, "id" | "timestamp" | "likes" | "comments">
  ) => {
    setPosts((prevPosts) => [
      {
        ...newPost,
        id: prevPosts.length + 1,
        timestamp: "just now",
        likes: 0,
        comments: 0,
      },
      ...prevPosts,
    ]);
    setIsCreatePostOpen(false);
  };

  return (
    <div className="min-h-screen text-white">
      <h1 className="font-bangers flex relative m-12 text-3xl">
        Communication
      </h1>

      <Game />

      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          <Sidebar
            onCreatePost={() => setIsCreatePostOpen(true)}
            currentUser={currentUser}
          />

          <main className="flex-1">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            <Feed posts={posts} />
          </main>

          <aside className="w-80">
            <CommunityTop />
          </aside>
        </div>
      </div>

      {isCreatePostOpen && (
        <CreatePost
          onPostCreated={addPost}
          onClose={() => setIsCreatePostOpen(false)}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}
