import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";
import type { Profile } from "../../types/profile";
import AddCommentComponent from './AddCommentComponent';
import { useState } from 'react';

interface ProfileDetailsProps {
  profile: Profile;
}

export function ProfileDetails({ profile }: ProfileDetailsProps) {
  const [comments, setComments] = useState<{ rating: string; comment: string; }[]>([]);

  const handleCommentAdded = (rating: string, newComment: string) => {
    setComments((prevComments) => [...prevComments, { rating, comment: newComment }]);
  };

  return (
    <div className="space-y-4 ">
      <div className="flex items-start gap-4">
        <img
          src={profile.imageUrl}
          alt={profile.username}
          className="h-24 w-24 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{profile.username}</h2>
            <span role="img" aria-label="verified">
              👑
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{profile.rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {profile.bio || "No bio available"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {profile.badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="bg-gray-300">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-medium">Status</p>
          <p
            className={`${
              profile.status === "online" ? "text-green-500" : "text-gray-500"
            }`}
          >
            {profile.status || "offline"}
          </p>
        </div>
        <div>
          <p className="font-medium">Last seen</p>
          <p className="text-gray-500">
            {profile.lastSeen
              ? new Date(profile.lastSeen).toLocaleString()
              : "N/A"}
          </p>
        </div>
      </div>
      <Separator />
      <AddCommentComponent username={profile.username} onCommentAdded={handleCommentAdded} />
      <div className="mt-4">
        <ul className="list-disc pl-5">
          {comments.map((comment, index) => (
            <li key={index} className="text-sm text-gray-700">
              <strong>Rating:</strong> {comment.rating} <br />
              <strong>Comment:</strong> {comment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
