import React from "react";
import styled from "styled-components";
import emoji from "../assets/emoji/favicon-32x32.png";
import { Link } from "react-scroll";

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
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  padding: 0.5em;
  display: inline-block;
`;

const Div2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Img = styled.img`
  padding: 2em;
  cursor: pointer;
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  background-image: linear-gradient(#fff, #fff);
  background-position: 0% 100%;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0.3s;

  &:hover {
    background-position: 0% 100%;
    background-size: 100% 2px;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <Div1>
        <Ul>
          <Li>
            <A
              href="https://github.com/andy-mc-donald"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </A>
          </Li>

          <Li>
            <A
              href="https://www.linkedin.com/in/andy-mc-donald/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </A>
          </Li>

          <Li>
            <A
              href="mailto:andy.william.mcdonald@gmail.com"
              rel="noopener noreferrer"
            >
              Email
            </A>
          </Li>
        </Ul>
      </Div1>
      <Div2>
      <Link activeClass="active" to="nav" spy={true} smooth={true} duration={1000}>
        <Img src={emoji} alt="emoji peace sign"></Img>
       </Link> 
      </Div2>
    </Foot>
  );
};

export default Footer;
