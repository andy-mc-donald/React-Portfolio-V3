import React, { Fragment } from "react";
import styled from "styled-components";
import { Html5, Css3, Javascript, ReactLogo, Nodejs, Sass, Git, Github } from "@styled-icons/boxicons-logos";
import { StyledComponents } from "@styled-icons/simple-icons";

const Div = styled.div`
    height: 100px;
    display: flex;
    width: 2000px;
    align-items: center;
    justify-content: space-around;
`;

const HTML = styled(Html5)`
    color: #212121;
`

const CSS = styled(Css3)`
    color: #212121;
`

const JS = styled(Javascript)`
    color: #212121;
`

const ReactJS = styled(ReactLogo)`
    color: #212121;
`

const Node = styled(Nodejs)`
    color: #212121;
`
const Styled = styled(StyledComponents)`
    color: #212121;
`

const Sassy = styled(Sass)`
    color: #212121;
`

const GitLogo = styled(Git)`
    color: #212121;
`

const GitHub = styled(Github)`
    color: #212121;
`

const IconScroller = () => {
  return (
    <Div>
        <HTML size="80" />
        <CSS size="80" />
        <JS size="80" />
        <ReactJS size="80" />
        <Styled size="80" />
        <Sassy size="80" />
        <Node size="80" />
        <GitLogo size="80" />
        <Github size="80" />
    </Div>
  );
};

export default IconScroller;
