import React from "react";
import styled from "styled-components";

import Image from "./Image";
import Title from "./Title";
import MainText from "./MainText";
import SmallText from "./SmallText";

/*
  Determines the UI for each individual profile card
*/

const StyledListItem = styled.li`
  list-style: none;
  text-align: left;
  display: inline-block;
  margin: 20px;
  background-color: #fafafa;
  border-radius: 5px;
  border: 1px solid #999999;
  width: 200px;
`;

const StyledTextArea = styled.div`
  padding: 0px 10px;
  margin: 10px 0px;
  font-size: 0.9em;
`;

const ProfileCard = ({ imageUrl, name, email, website, city }) => (
  <StyledListItem>
    <Image imageUrl={imageUrl} name={name} />
    <StyledTextArea>
      <Title text={name} />
      <SmallText text={`${city}, PA`} />
      <MainText />
      <SmallText text={email} />
    </StyledTextArea>
  </StyledListItem>
);

export default ProfileCard;
