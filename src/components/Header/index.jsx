import React from "react";
import styled from "styled-components";
import SpinningLogo from "./SpinningLogo";

const StyledHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const StyledH1 = styled.h1`
  font-size: 1.5em;
`;

const Header = () => (
  <StyledHeader>
    <SpinningLogo />
    <StyledH1>Hello, NEPA.js!</StyledH1>
  </StyledHeader>
);

export default Header;
