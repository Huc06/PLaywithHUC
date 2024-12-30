import { useState } from "react";
import { CardTop } from "./Card-Top";
import { CardModal } from "./Modal";
import { CardTopProps } from "../../types/Profile";

const profiles = [
  {
    username: "Chey",
    imageUrl: "src/assets/Card/image3.png",
    tag: "Pro Player",
    game: {
      name: "Dead by Daylight",
      logo: "src/assets/Card/DBD.png",
    },
  },
  {
    username: "Nami",
    imageUrl: "src/assets/Card/image4.png",
    tag: "#3 Nami",
    game: {
      name: "League of Legends",
      logo: "src/assets/Card/lol.png",
    },
  },
  {
    username: "dopameanie",
    imageUrl: "src/assets/Card/image1.png",
    tag: "Đại kiện tướng",
    game: {
      name: "Dead by Daylight",
      logo: "src/assets/Card/DBD.png",
    },
  },
  {
    username: "Doffy",
    imageUrl: "src/assets/Card/image2.png",
    tag: "Đại kiện tướng",
    game: {
      name: "Teamfight Tactics",
      logo: "src/assets/Card/tft.png",
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
