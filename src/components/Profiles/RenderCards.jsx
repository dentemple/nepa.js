import React from "react";
import styled from "styled-components";
import ProfileCard from "../ProfileCard";

const StyledList = styled.ul`
  text-align: center;
  margin: 10px auto;
  max-width: 750px;
`;

const RenderCards = ({ profiles }) => (
  <StyledList>
    {profiles.map(profile => (
      <ProfileCard
        /* Spreads each attribute into its own prop */
        {...profile}
        /* Specifies a unique key for best performance */
        key={profile.userId}
        /* Overrides and/or adds new props */
        city={profile.address.city}
        imageUrl={`http://fpoimg.com/200x200?text=${profile.name}`}
      />
    ))}
  </StyledList>
);

export default RenderCards;
