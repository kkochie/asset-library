import React from "react";
import { useState } from "react";
import { Button, FormField, Textarea } from "../elements";

export default function ProfileUpdate({ profile, setProfile, handleClick })  {
  
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  
  // Update profile
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/profiles/${profile.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bio: bio,
      }),
    }) 
        .then((resp) => resp.json())
        .then((data) => setProfile(data));
        handleClick();
  }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
        {/* <FormField>
            <Label htmlFor="avatar">Avatar Link</Label>
            <Input
              type="text"
              id="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormField> */}
          <FormField>
            {/* <Label htmlFor="bio">Bio</Label> */}
            <Textarea
              id="bio"
              rows="3"
              placeholder="Update bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Change"}
            </Button>
          </FormField>
        </form>
    </div>
  );
}

