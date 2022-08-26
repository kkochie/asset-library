import React from "react";
import styled from "styled-components";
import Profile from "../components/Profile";

export default function User() {

  return (
    <Wrapper>
      <Profile />
    </Wrapper>
  )

}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;`