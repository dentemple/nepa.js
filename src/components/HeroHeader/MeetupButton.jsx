import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  box-orient: horizontal;
  -webkit-box-direction: normal;
  -moz-box-direction: normal;
  box-direction: normal;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  flex-direction: row;
  -ms-flex-direction: row;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  box-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  -o-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -moz-box-align: center;
  box-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;
  -ms-flex-align: center;
  -webkit-transition: background 0.15s 0;
  -moz-transition: background 0.15s 0;
  -o-transition: background 0.15s 0;
  transition: background 0.15s 0;
  box-sizing: border-box;
  -webkit-appearance: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  min-height: 36px;
  outline: 0;
  padding: 0 16px;
  vertical-align: middle;
  line-height: 1;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  stroke: transparent;
  background: #ed1c40;
  border-color: #ed1c40;
  font-size: 1.3em;
  font-weight: bold;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 1);
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: #fff;
`;

const MeetupButton = () => (
  <p>
    <StyledButton>
      <StyledAnchor href="https://www.meetup.com/NEPATechMeetup/">
        Request to join Meetup Group
      </StyledAnchor>
    </StyledButton>
  </p>
);

export default MeetupButton;
