import { CardTopProps } from "../../types/profile";
import { PlayCircle } from "lucide-react";

export function CardTop({
  username,
  imageUrl,
  tag,
  game,
  badges = ["👑", "☕"],
  onPlay,
  onClick,
}: CardTopProps) {
  return (
    <div
      className="relative w-72 h-96 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 p-6 flex flex-col items-center cursor-pointer transform transition-all duration-200 hover:scale-105"
      onClick={onClick}
    >
      {/* Profile Image Container */}
      <div className="relative">
        {/* Laurel Wreath */}
        <div className="absolute inset-0 w-32 h-32 -m-2">
          <div className="absolute inset-0 bg-[url('/laurel-left.png')] bg-contain bg-no-repeat transform -scale-x-100" />
          <div className="absolute inset-0 bg-[url('/laurel-left.png')] bg-contain bg-no-repeat" />
        </div>

        {/* Profile Image */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-yellow-500">
          <img
            src={imageUrl}
            alt={username}
            className="w-full h-full object-cover"
          />
          {/* Play Button Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
            onClick={(e) => {
              e.stopPropagation();
              onPlay?.();
            }}
          >
            <PlayCircle className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      {/* Username and Badges */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-white flex items-center gap-1">
          {username}
          {badges.map((badge, index) => (
            <span key={index} className="text-xl">
              {badge}
            </span>
          ))}
        </h2>
      </div>

      {/* Tag */}
      <div className="mt-2">
        <span className="px-4 py-1 rounded-full text-yellow-500 border border-yellow-500 text-sm">
          {tag}
        </span>
      </div>

      {/* Game Logo */}
      <div className="mt-auto">
        <img src={game.logo} alt={game.name} className="h-8 object-contain" />
      </div>
    </div>
  );
}
