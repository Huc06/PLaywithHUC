import { useState } from "react";
import { CardTop } from "./Card-Top";
import { CardModal } from "./Modal";
import { CardTopProps } from "../../types/profile";

const profiles = [
  {
    username: "Rikuuen",
    imageUrl: "static/Card/Rikuuen.png",
    tag: "Shadow Slayer", // Tag mới
    game: {
      name: "Master Duel",
      logo: "static/Services/game4.png",
    },
  },
  {
    username: "Lissa",
    imageUrl: "static/Card/image4.png",
    tag: "Wave Master", // Tag mới
    game: {
      name: "Onchain Clash",
      logo: "static/Services/game2.png",
    },
  },
  {
    username: "Squiddu",
    imageUrl: "static/Card/Squiddu.png",
    tag: "Survival Specialist", // Tag mới
    game: {
      name: "Zone Nine",
      logo: "static/Services/game1.png",
    },
  },
  {
    username: "Prodev",
    imageUrl: "static/Card/image1.png",
    tag: "Pro player", // Tag mới
    game: {
      name: "Stellar Forger",
      logo: "static/Services/game3.png",
    },
  },
];

export function CardTopGrid() {
  const [selectedProfile, setSelectedProfile] = useState<CardTopProps | null>(
    null
  );

  const handlePlay = (profile: CardTopProps) => {
    console.log("Playing", profile.username);
    window.open("https://twitch.tv", "_blank");
  };

  return (
    <div className="relative lg:mx-auto mx-[1rem]">
      <div className="text-[2rem] font-bold flex absolute left-[10%] -top-3 mb-[1rem] text-center font-bangers">
        Top
      </div>
      <div className="mt-6 min-h-screen p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <CardTop
              key={index}
              {...profile}
              onClick={() => setSelectedProfile(profile)}
              onPlay={() => handlePlay(profile)}
            />
          ))}
        </div>

        <CardModal
          profile={selectedProfile}
          isOpen={!!selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      </div>
    </div>
  );
}
