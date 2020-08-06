import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";

const Ul = styled.ul`
    list-style-type: none;
    margin: 1em 0 0.5em 1em;
    padding: 0;
`;

const Li = styled.li`
    display: inline;
    margin-left: 1em;
`

const Git = styled(Github)`
    margin-bottom: 0.2em;
`;

const NavBar = () => {
  return (
    <Ul>
      <Li>About</Li>
      <Li>Projects</Li>
      <Li>Contact</Li>
      <Li>< Git size="30" title="GitHub Link" /></Li>
    </Ul> 
  );
};

export default NavBar;
