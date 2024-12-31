import ProfileCard from "./Profile-Card";

const profiles = [
  {
    username: "Lissa",
    imageUrl: "src/assets/Card/image4.png",
    badges: ["GAMING SCORES", "NEWS", "E-CHAT"],
    interactions: 9,
    bio: "Passionate gamer and creative content maker.",
    status: "online" as const,
    lastSeen: new Date(),
    rating: 5.0,
  },
  {
    username: "Squiddu",
    imageUrl: "src/assets/Card/Squiddu.png",
    badges: ["E-CHAT", "NEWS", "Zone Nine"],
    interactions: 6,
    bio: "Exploring the world of League of Legends one match at a time.",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Thor",
    imageUrl: "src/assets/Card/image2.png",
    badges: ["E-CHAT", "NEWS", "Stellar Forger"],
    interactions: 9,
    bio: "Lightning-fast reflexes and a love for epic battles.",
    status: "online" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Rikuuen",
    imageUrl: "src/assets/Card/Rikuuen.png",
    badges: ["E-CHAT", "NEWS", "Onchain Clash"],
    interactions: 4,
    bio: "Gaming enthusiast with a knack for strategy.",
    status: "online" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Johnny",
    imageUrl: "src/assets/Card/johnny.png",
    badges: ["E-CHAT", "NEWS", "Omnizone"],
    interactions: 5,
    bio: "Dedicated to climbing the ranks in the gaming world.",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "CatLord",
    imageUrl: "src/assets/Card/image6.png",
    badges: ["E-CHAT", "MasterDuel", "Omnizone"],
    interactions: 3,
    bio: "Master strategist with a love for cats and cards.",
    status: "online" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Sparrow",
    imageUrl: "src/assets/Card/image7.png",
    badges: ["E-CHAT", "NEWS", "Omnizone"],
    interactions: 4,
    bio: "Soaring through gaming adventures with style.",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Prodev",
    imageUrl: "src/assets/Card/image1.png",
    badges: ["E-CHAT", "Stellar Forger", "Zone Nine"],
    interactions: 4,
    bio: "Tech enthusiast by day, gaming legend by night.",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
];

export default function ProfileGrid() {
  return (
    <section className="pt-[3rem] pb-[2rem]">
      <div className="relative lg:mx-auto max-w-5xl mx-[1rem] ">
        <div className="text-[2rem] font-bold flex  left-[10%] mb-[1rem] text-center font-bangers">
          ProFile
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <ProfileCard key={profile.username} {...profile} />
          ))}
        </div>
      </div>
    </section>
  );
}
