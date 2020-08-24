import React from "react";
import styled from "styled-components";
import emoji from "../assets/emoji/favicon-32x32.png";

const Foot = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Div1 = styled.div`
  flex: 1;
`;

const Ul = styled.ul`
  color: white;
  list-style-type: none;
  padding-left: 1em;
`;

const Li = styled.li`
  padding: 0.5em;
`;

const Div2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Img = styled.img`
  padding: 2em;
`;

const Footer = () => {
  return (
    <Foot>
      <Div1>
        <Ul>
          <Li>GitHub</Li>
          <Li>LinkedIn</Li>
          <Li>Email</Li>
        </Ul>
      </Div1>
      <Div2>
        <Img src={emoji} alt="emoji peace sign"></Img>
      </Div2>
    </Foot>
  );
};

export default Footer;
