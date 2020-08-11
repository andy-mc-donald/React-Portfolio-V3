import React from "react";
import styled, {keyframes} from "styled-components";
import { Html5, Css3, Javascript, ReactLogo, Nodejs, Sass, Git, Github } from "@styled-icons/boxicons-logos";
import { StyledComponents } from "@styled-icons/simple-icons";

const slider = keyframes`
    0% {
    transform: translateX(0);
    }

    100% {
    transform: translateX(-50%);
    }
`;

const Div = styled.div`
    height: 140px;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 4000px;
    align-items: center;
    justify-content: space-around;
    animation-name: ${slider};
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

const HTML = styled(Html5)`
    color: #212121;
    margin: 0 20px 0 20px;
`

const CSS = styled(Css3)`
    color: #212121;
    margin: 0 20px 0 20px;
`

const JS = styled(Javascript)`
    color: #212121;
    margin: 0 20px 0 20px;
`

const ReactJS = styled(ReactLogo)`
    color: #212121;
    margin: 0 20px 0 20px;
`

const Node = styled(Nodejs)`
    color: #212121;
    margin: 0 20px 0 20px;
`
const Styled = styled(StyledComponents)`
    color: #212121;
    margin: 0 20px 0 20px;
`

const Sassy = styled(Sass)`
    color: #212121;
    margin: 0 20px 0 20px;
`

const GitLogo = styled(Git)`
    color: #212121;
    margin: 0 20px 0 20px;
`

const GitHub = styled(Github)`
    color: #212121;
    margin: 0 20px 0 20px;
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
