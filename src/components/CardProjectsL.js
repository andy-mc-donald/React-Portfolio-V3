import React from "react";
import styled from "styled-components";
import {Github} from "@styled-icons/boxicons-logos/Github";
import {WebAsset} from "@styled-icons/material/WebAsset";

const DivL = styled.div`
  flex: 2;
  border-style: solid;
  border-color: black;
  border-width: 0 1px 0 0;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: flex 0.3s ease-in-out;
`;

const DivR = styled.div`
  flex: 1;
  text-align: center;
  background-color: ${props => props.bgcolor};
  display: flex;
  flex-direction: column;
//   align-items: center;
// justify-content: center;
  justify-content: space-between;
  padding: 3em 2em 3em 2em;
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

const CardProjectsL = ({img, color, textColor, title, techStack}) => {
  return (
    <Container>
      <DivL image={img}>
      </DivL>
      <DivR bgcolor={color}>
        {/* <h3 style={{padding: "0.5em"}}>{text}</h3> */}
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
      </DivR>
    </Container>
  );
};

export default CardProjectsL;
