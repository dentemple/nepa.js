import React from "react";
import styled from "styled-components";
import TextBackground from "./TextBackground";

const StyledP = styled.p`
  font-size: 3em;
`;

const InvitationText = () => (
  <StyledP>
    <TextBackground>
      Join our community for programmers and entrepreneurs
    </TextBackground>
  </StyledP>
);

export default InvitationText;
