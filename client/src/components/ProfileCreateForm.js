import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../elements";

export default function ProfileCreateForm({ user }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();


  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      name: name,
      location: location,
      bio: bio,
      avatar: avatar,
      user_id: user.id
    }
    fetch("/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/user");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create New Profile</h2>
        <form onSubmit={handleSubmit}>
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
          </FormField>
          <FormField>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              rows="3"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="avatar">Avatar Link</Label>
            <Input
              type="text"
              id="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 600px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
`;

const WrapperChild = styled.div`
  flex: 1;
`;
