import ProfileCard from "./Profile-Card";

const profiles = [
  {
    username: "Lissa",
    imageUrl: "src/assets/Card/image4.png",
    badges: ["GAMING SCORES", "NEWS", "E-CHAT"],
    interactions: 9,
    bio: "Professional gamer and content creator",
    status: "online" as const,
    lastSeen: new Date(),
    rating: 5.0,
  },
  {
    username: "Anna",
    imageUrl: "src/assets/Card/image3.png",
    badges: ["E-CHAT", "NEWS", "LEAGUE LEGENDS"],
    interactions: 4,
    bio: "League of Legends enthusiast",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Thor",
    imageUrl: "src/assets/Card/image2.png",
    badges: ["E-CHAT", "NEWS", "LEAGUE LEGENDS"],
    interactions: 4,
    bio: "League of Legends enthusiast",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Man",
    imageUrl: "src/assets/Card/image5.png",
    badges: ["E-CHAT", "NEWS", "LEAGUE LEGENDS"],
    interactions: 4,
    bio: "League of Legends enthusiast",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Pengu",
    imageUrl: "src/assets/Card/image1.png",
    badges: ["E-CHAT", "NEWS", "LEAGUE LEGENDS"],
    interactions: 4,
    bio: "League of Legends enthusiast",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Jack",
    imageUrl: "src/assets/Card/image6.png",
    badges: ["E-CHAT", "NEWS", "LEAGUE LEGENDS"],
    interactions: 4,
    bio: "League of Legends enthusiast",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Sparrow",
    imageUrl: "src/assets/Card/image7.png",
    badges: ["E-CHAT", "NEWS", "LEAGUE LEGENDS"],
    interactions: 4,
    bio: "League of Legends enthusiast",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  {
    username: "Prodev",
    imageUrl: "src/assets/Card/image1.png",
    badges: ["E-CHAT", "NEWS", "LEAGUE LEGENDS"],
    interactions: 4,
    bio: "League of Legends enthusiast",
    status: "offline" as const,
    lastSeen: new Date(Date.now() - 3600000), // 1 hour ago
    rating: 5.0,
  },
  // Add more profiles as needed
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
