import React from "react";
import styled from "styled-components";

import image from "./IMG_3018.jpg";
import OrganizationName from "./OrganizationName";
import InvitationText from "./InvitationText";
import MeetupButton from "./MeetupButton";

const StyledContainer = styled.div`
  background-image: url(${image});
  background-color: teal;
  background-blend-mode: multiply;
  background-attachment: fixed;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  max-width: 100%;
  height: 600px;
  background-size: cover;
  background-position: 50% 50%;
  color: #fffff1;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.72), 0 0 15px rgba(0, 0, 0, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  resize: vertical;
  overflow: auto;
  transition: all 0.5s;

  @media only screen and (max-width: 600px) {
    font-size: 0.9em;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.7em;
    height: 500px;
  }
`;

const HeroHeader = () => (
  <StyledContainer>
    <OrganizationName />
    <InvitationText />
    <MeetupButton />
  </StyledContainer>
);

export default HeroHeader;
