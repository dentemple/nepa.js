import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  color: #777777;
  margin: 0px 0px 5px 0px;
`;

const SmallText = ({ text }) => (
  <StyledP>
    <small>{text}</small>
  </StyledP>
);

export default SmallText;
