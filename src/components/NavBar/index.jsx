import React from "react";
import styled from "styled-components";

const StyledContainer = styled.nav`
  background-color: #ffffff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-between;
  -webkit-justify-content: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  top: 0;
  height: 65px;
  width: 100%;
`;

const NavBar = () => <StyledContainer />;

export default NavBar;
