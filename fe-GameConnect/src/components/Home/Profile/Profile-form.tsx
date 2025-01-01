import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ImageUpload from "./ImageUpload";
import type { Profile } from "../../types/profile";

interface ProfileFormProps {
  onSubmit: (profile: Profile) => void;
  onCancel: () => void;
}

export default function ProfileForm({ onSubmit, onCancel }: ProfileFormProps) {
  const [formData, setFormData] = useState<{
    username: string;
    imageType: "url" | "upload";
    imageUrl: string;
    imageFile: string;
    badges: string;
    bio: string;
    status: "online" | "offline";
  }>({
    username: "",
    imageType: "url",
    imageUrl: "",
    imageFile: "",
    badges: "",
    bio: "",
    status: "online", // Đảm bảo giá trị mặc định phù hợp
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageTypeChange = (value: "url" | "upload") => {
    setFormData((prevData) => ({ ...prevData, imageType: value }));
  };

  const handleImageSelected = (imageData: string) => {
    setFormData((prevData) => ({ ...prevData, imageFile: imageData }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profileData = {
      ...formData,
      imageUrl:
        formData.imageType === "url" ? formData.imageUrl : formData.imageFile,
      badges: formData.badges.split(",").map((badge) => badge.trim()),
      interactions: 0,
      status: formData.status as "online" | "offline",
      lastSeen: new Date(),
      rating: 5.0,
    };
    onSubmit(profileData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-3xl font-bold mb-4 font-bangers">
        Create New Profile
      </h2>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Profile Image</Label>
        <RadioGroup
          defaultValue="url"
          onValueChange={handleImageTypeChange}
          className="flex"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="url" id="url" className="bg-white" />
            <Label htmlFor="url">Image URL</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="upload" id="upload" className="bg-white" />
            <Label htmlFor="upload">Upload Image</Label>
          </div>
        </RadioGroup>
      </div>
      {formData.imageType === "url" ? (
        <div className="space-y-2">
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="Enter image URL"
            required={formData.imageType === "url"}
          />
        </div>
      ) : (
        <ImageUpload onImageSelected={handleImageSelected} />
      )}
      <div className="space-y-2">
        <Label htmlFor="badges">Badges</Label>
        <Input
          id="badges"
          name="badges"
          value={formData.badges}
          onChange={handleChange}
          placeholder="Enter badges (comma-separated)"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Enter bio"
          required
        />
      </div>
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Create Profile</Button>
      </div>
    </form>
  );
}
