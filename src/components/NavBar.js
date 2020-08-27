import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Link } from "react-scroll";

const Ul = styled.ul`
  list-style-type: none;
  margin: 1em 0 0.5em 1em;
  padding: 0;
`;

const Li = styled.li`
  display: inline-block;
  margin-left: 1em;

  cursor: pointer;
  background-image: linear-gradient(#212121, #212121);
  background-position: 0% 100%;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0.3s;

  &:hover {
    background-position: 0% 100%;
    background-size: 100% 2px;
  }
`;

const Li2 = styled.li`
  display: inline-block;
  margin-left: 1em;
`;

const Git = styled(Github)`
  margin-bottom: 0.2em;
  transition: transform 0.3s ease-in-out;
`;

const A = styled.a`
  color: #212121;
  cursor: pointer;

  &:hover ${Git} {
    transform: scale(1.3);
  }
`

const NavBar = () => {
  return (
    <Ul>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <Li>About</Li>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <Li>Projects</Li>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <Li>Contact</Li>
      </Link>
      <Li2>
        <A
          href="https://github.com/andy-mc-donald/React-Portfolio-V3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Git size="30" title="GitHub Link" />
        </A>
      </Li2>
    </Ul>
  );
};

export default NavBar;
