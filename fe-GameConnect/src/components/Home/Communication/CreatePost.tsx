import { useState, useRef } from "react";
import { Post, User } from "../../types/post";
import { ImageIcon, Send, X } from "lucide-react";

interface CreatePostProps {
  onPostCreated: (
    post: Omit<Post, "id" | "timestamp" | "likes" | "comments">
  ) => void;
  onClose: () => void;
  currentUser: User;
}

export function CreatePost({
  onPostCreated,
  onClose,
  currentUser,
}: CreatePostProps) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [author, setAuthor] = useState<User>({
    id: currentUser.id + 1,
    name: currentUser.name,
    avatar: currentUser.avatar,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onPostCreated({
        author,
        content,
        image: image || undefined,
      });
      setContent("");
      setImage(null);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAuthor((prev) => ({
          ...prev,
          avatar: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const triggerAvatarInput = () => {
    avatarInputRef.current?.click();
  };

  const removeImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#16161f] rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create a Post</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={author.avatar}
              alt={`${author.name}'s avatar`}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <input
                type="text"
                value={author.name}
                onChange={(e) =>
                  setAuthor((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Author name"
                className="bg-[#1c1c25] text-white rounded-lg p-2 w-full"
              />
              <button
                type="button"
                onClick={triggerAvatarInput}
                className="text-gray-400 hover:text-white text-sm mt-1"
              >
                Upload Avatar
              </button>
              <input
                type="file"
                ref={avatarInputRef}
                onChange={handleAvatarUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full bg-[#1c1c25] text-white rounded-lg p-3 mb-4 resize-none"
            rows={5}
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={triggerFileInput}
                className="text-gray-400 hover:text-white"
              >
                <ImageIcon size={20} />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              {image && (
                <button
                  type="button"
                  onClick={removeImage}
                  className="text-red-500 hover:text-red-400 text-sm"
                >
                  Remove image
                </button>
              )}
            </div>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-2 flex items-center gap-2"
            >
              <Send size={16} />
              <span>Post</span>
            </button>
          </div>
        </form>
        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Post image"
              className="rounded-lg w-full max-h-64 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
