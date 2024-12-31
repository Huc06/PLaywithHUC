import { useState } from "react";
import { X } from "lucide-react";
import { CardModalProps } from "../../types/profile";
import { Chat } from "../Chat";

export function CardModal({ profile, isOpen, onClose }: CardModalProps) {
  const [showChat, setShowChat] = useState(false);

  if (!isOpen || !profile) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl max-w-4xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Profile Info */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={profile.imageUrl}
                  alt={profile.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  {profile.username}
                  {profile.badges?.map((badge, index) => (
                    <span key={index} className="text-xl">
                      {badge}
                    </span>
                  ))}
                </h2>
                <span className="px-3 py-1 rounded-full text-yellow-500 border border-yellow-500 text-sm">
                  {profile.tag}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-gray-400 mb-2">Playing</h3>
                <div className="flex items-center gap-3">
                  <img
                    src={profile.game.logo}
                    alt={profile.game.name}
                    className="h-8 object-contain"
                  />
                  <span className="text-white">{profile.game.name}</span>
                </div>
              </div>

              <button
                onClick={() => window.open("https://twitch.tv", "_blank")}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Watch Stream
              </button>

              <button
                onClick={() => setShowChat(!showChat)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                {showChat ? "Hide Chat" : "Show Chat"}
              </button>
            </div>
          </div>

          {/* Chat Section */}
          <div className="w-full md:w-1/2 ">
            {showChat ? (
              <div className="h-96 bg-gray-900 rounded-lg overflow-hidden">
                <Chat username={profile.username} />
              </div>
            ) : (
              <div className="h-96 bg-gray-900 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">
                  Click 'Show Chat' to start chatting
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
