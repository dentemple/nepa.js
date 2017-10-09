import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h3`
  margin: 0px;
`;

const Title = ({ text }) => <StyledHeader>{text}</StyledHeader>;

export default Title;
