import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { WebAsset } from "@styled-icons/material/WebAsset";

const DivL = styled.div`
  flex: 1;
  text-align: center;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3em 2em 3em 2em;
  transition: flex 0.3s ease-in-out;
`;

const DivR = styled.div`
  flex: 2;
  border-style: solid;
  border-color: black;
  border-width: 0 0 0 1px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: flex 0.3s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 2em;
  height: 25em;

  &:hover ${DivL} {
    flex: 1;
  }

  &:hover ${DivR} {
    flex: 1;
  }
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const GithubStyled = styled(Github)`
  color: ${(props) => props.gitIconColor};
  transition: transform 0.3s ease-in-out;
`;

const WebAssetStyled = styled(WebAsset)`
  color: ${(props) => props.webIconColor};
  transition: transform 0.3s ease-in-out;
`;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  background-image: linear-gradient(
    ${(props) => props.underlineColor},
    ${(props) => props.underlineColor}
  );
  background-position: 0% 100%;
  background-size: 0% 2px;
  background-repeat: no-repeat;
  transition: background-size 0.3s, background-position 0.3s;

  &:hover {
    background-position: 0% 100%;
    background-size: 100% 2px;
  }

  &:hover ${GithubStyled} {
    transform: scale(1.3);
  }

  &:hover ${WebAssetStyled} {
    transform: scale(1.3);
  }
`;

const CardProjectsR = ({
  color,
  textColor,
  title,
  techStack,
  img,
  codeLink,
  liveLink,
}) => {
  return (
    <Container>
      <DivL bgcolor={color}>
        <h3 style={{ margin: 0, color: textColor }}>{title}</h3>
        <p style={{ margin: 0, color: textColor }}>{techStack}</p>
        <IconsDiv>
          <div>
            <A
              href={codeLink}
              underlineColor={textColor}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubStyled gitIconColor={textColor} size="30" />
              <p style={{ margin: 0, color: textColor }}>Code</p>
            </A>
          </div>
          <div>
            <A
              href={liveLink}
              underlineColor={textColor}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WebAssetStyled size="30" webIconColor={textColor} />
              <p style={{ margin: 0, color: textColor }}>Live</p>
            </A>
          </div>
        </IconsDiv>
      </DivL>
      <DivR image={img}></DivR>
    </Container>
  );
};

export default CardProjectsR;
