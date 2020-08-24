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
  //   align-items: center;
  // justify-content: center;
  justify-content: space-between;
  padding: 3em 2em 3em 2em;
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
`;

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 2em;
  height: 25em;

  &:hover ${DivL} {
    flex: 1;
    transition: 0.5s ease-in-out;
  }
  
  &:hover ${DivR} {
    flex: 1;
    transition: 0.5s ease-in-out;
  }
`;

const IconsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const CardProjectsR = ({color, textColor, title, techStack, img}) => {
  return (
    <Container>
      <DivL bgcolor={color}>
      <h3 style={{ margin: 0, color: textColor}}>{title}</h3>
        <p style={{ margin: 0, color: textColor}}>{techStack}</p>
        <IconsDiv>
          <div>
          <Github size="30" color={textColor} />
          <p style={{margin: 0, color: textColor}}>Code</p>
          </div>
          <div>
          <WebAsset size="30" color={textColor} />
          <p style={{margin: 0, color: textColor}}>Live</p>
          </div>
        </IconsDiv>
      </DivL>
      <DivR image={img}></DivR>
    </Container>
  );
};

export default CardProjectsR;
