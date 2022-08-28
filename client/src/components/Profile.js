import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../elements";
import ProfileUpdate from "./ProfileUpdate";

export default function Profile()  {
  const [profile, setProfile] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    fetch("/profiles")
      .then((r) => r.json())
      .then(setProfile);
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  return (
    <Wrapper>
      {profile !== null ? ( 
          <WrapperChild>
            <img src={profile.avatar} alt="User Avatar"/>
            <h2>{profile.name}</h2>
            <h3>Location: {profile.location}</h3>
            <p>{profile.bio}</p>
            <br />
            <Button variant="outline" as={Link} to="/libraries">Library</Button>
            <Button variant="outline" onClick={handleClick}>Update Bio</Button>
            {showForm ? <ProfileUpdate profile={profile} setProfile={setProfile} handleClick={handleClick} /> : null}
          </WrapperChild>
        ) : (
        <>
          <h2>No Profile Found</h2>
          <Button as={Link} to="/new-profile">
            Create Your Profile
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;