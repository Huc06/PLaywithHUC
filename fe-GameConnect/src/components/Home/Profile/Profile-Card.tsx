import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Profile } from "../../types/profile";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Chat } from "../Chat";
import { ProfileDetails } from "./Profile-Details";
import AddCommentComponent from "./AddCommentComponent";

export default function ProfileCard(props: Profile) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="relative w-auto max-w-sm overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900 border-none">
          <div className="relative aspect-square">
            <img
              src={props.imageUrl}
              alt={`${props.username}'s profile`}
              className="h-full w-full object-cover bg-fixed"
            />
            <div className="flex items-center justify-between p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
              <span className="font-bold text-lg">Hourly Rate:</span>
              <span className="text-xl">{props.hourlyRate} A8</span>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-4 bg-purple-500 clip-your-needful-style">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-pink">
                  {props.username}
                </span>
                <span role="img" aria-label="verified">
                  👑
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-white">
                  {props.rating.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {props.badges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="bg-white/10 text-white hover:bg-white/20"
                >
                  {badge}
                </Badge>
              ))}
              <Badge
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20"
              >
                +{props.interactions}
              </Badge>
            </div>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-b from-gray-800 to-gray-900 border-none">
        <DialogHeader>
          <DialogTitle className="text-white font-bangers">
            Profile & Chat
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-200">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <ProfileDetails profile={props} />
          </TabsContent>
          <TabsContent value="chat">
            <Chat username={props.username} />
          </TabsContent>
          <TabsContent value="comments">
            <AddCommentComponent/>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
