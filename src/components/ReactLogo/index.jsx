import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

const SpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledImg = styled.img`
  animation: ${SpinAnimation} infinite 20s linear;
  height: 80px;
`;

const ReactLogo = () => <StyledImg src={logo} alt="Logo for React.js" />;

export default ReactLogo;
