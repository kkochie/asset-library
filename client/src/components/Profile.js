import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../elements";
import ProfileUpdate from "./ProfileUpdate";

export default function Profile()  {
  const [profile, setProfile] = useState("");
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
        <>
          <img src={profile.avatar} alt="User Avatar"/>
          <div>
            
            <h2>{profile.name}</h2>
            <h3>Location: {profile.location}</h3>
            <p>{profile.bio}</p>
            <br />
              <div className="update-button">
                <Button variant="outline" onClick={handleClick}>Update Bio</Button>
              </div>
              {showForm ? <ProfileUpdate profile={profile} setProfile={setProfile} handleClick={handleClick} /> : null}
          </div>
        </>
          
        ) : (
        <div className="no-profile">
          <h2>No Profile Found</h2>
          <Button as={Link} to="/new-profile">
            Create Your Profile
          </Button>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`  
  max-width: 800px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  button,
  textarea {
    width: 70%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    img {
      max-width: 200px;
    }
  }
  
  div.update-button {
    display:flex;
    align-items: flex-start;
    margin-bottom: 20px;
    gap: 10px;
  }

  div.no-profile {
    display:flex;
    align-items: center;
    width: 50%;
  
  }
`;