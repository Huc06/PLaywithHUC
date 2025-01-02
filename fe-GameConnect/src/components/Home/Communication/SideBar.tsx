import { Plus } from "lucide-react";
import { User } from "../../types/post";
const trends = [
  "#agirl",
  "#cute",
  "#gamer",
  "#Selfie",
  "#selfies",
  "#ZoneNine",
  "#Cute",
  "#OnchainClash",
  "#tgirl",
  "#selfie",
  "#epal",
  "#MaterDuel",
  "#funny",
  "#Hot",
  "#Overwatch",
  "#Sweet Treat",
  "#StellarForger",
  "#i bbe cutely",
];

interface SidebarProps {
  onCreatePost: () => void;
  currentUser: User;
}
export function Sidebar({ onCreatePost }: SidebarProps) {
  return (
    <aside className="w-80 space-y-6 font-bangers text-2xl">
      <div className="bg-[#16161f] rounded-lg p-4">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="font-medium">Game Connect</h2>
        </div>

        <div className="flex items-center justify-between text-sm mb-4">
          <span>All Games</span>
          <span className="text-gray-400">5.9K players</span>
        </div>

        <div className="flex gap-2 mb-4">
          <img
            src="static/Card/Rikuuen.png"
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <img
            src="static/Card/image4.png"
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <img
            src="static/Card/Squiddu.png"
            alt="User avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-3xl">...</div>
        </div>

        <button
          onClick={onCreatePost}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 flex items-center justify-center gap-2"
        >
          <Plus size={20} />
          <span>Create Post</span>
        </button>
      </div>

      <div className="bg-[#16161f] rounded-lg p-4">
        <h2 className="font-medium mb-4">Trending Topics</h2>
        <div className="flex flex-wrap gap-2">
          {trends.map((trend) => (
            <span
              key={trend}
              className="px-3 py-1 rounded-full bg-[#1c1c25] text-sm hover:bg-[#24242d] cursor-pointer"
            >
              {trend}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
