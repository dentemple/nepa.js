import React from "react";
import styled from "styled-components";
import TextBackground from "./TextBackground";

const StyledH1 = styled.h1`
  font-size: 2em;
  margin: 0 auto;
`;

const OrganizationName = () => (
  <StyledH1>
    <TextBackground>NEPA Tech Meetup</TextBackground>
  </StyledH1>
);

export default OrganizationName;
