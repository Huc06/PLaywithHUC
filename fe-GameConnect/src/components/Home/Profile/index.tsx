
import ProfileCard from "./Profile-Card";
import { Button } from "@/components/ui/button";
import ProfileForm from "./Profile-form";
import { useState } from "react";
import { Profile } from "../../types/profile";
import Modal from "./Modal";
import AddCommentComponent from './AddCommentComponent';

const initialProfiles = [
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
  const [profiles, setProfiles] = useState(initialProfiles);
  const [showForm, setShowForm] = useState(false);

  const handleCreateProfile = (newProfile: Profile) => {
    setProfiles([
      ...profiles,
      {
        ...newProfile,
        bio: newProfile.bio || "No bio available",
        status: newProfile.status || "offline",
        lastSeen: newProfile.lastSeen || new Date(),
      },
    ]);
  };

  return (
    <section className="pt-[3rem] pb-[2rem]">
      <div className="relative lg:mx-auto max-w-5xl mx-[1rem]">
        <div className="flex justify-between items-center mb-[1rem]">
          <h1 className="text-[2rem] font-bold font-bangers">ProFile</h1>
          <Button onClick={() => setShowForm(true)}>Create Profile</Button>
        </div>
        <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
          <ProfileForm
            onSubmit={handleCreateProfile}
            onCancel={() => setShowForm(false)}
          />
        </Modal>
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <ProfileCard key={profile.username} {...profile} />
          ))}
        </div>
        <AddCommentComponent/>
      </div>
    </section>
  );
}
