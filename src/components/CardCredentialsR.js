import React from "react";
import styled from "styled-components";

const DivL = styled.div`
  flex: 1;
  text-align: center;
  background-color: ${props => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  // overflow-wrap: break-word;
  transition: flex 0.5s ease-in-out;
`;

const DivR = styled.div`
  flex: 2;
  border-style: solid;
  border-color: black;
  border-width: 0 0 0 1px;
  background-image: url(${props => props.image});
  background-position: ${props => props.position};
  background-repeat: no-repeat;
  background-size: cover;
  transition: flex 0.5s ease-in-out;
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

const CardCredentialsR = ({color, img, bgPos, text}) => {
  return (
    <Container>
      <DivL bgcolor={color}>
        <h3 style={{padding: "1em"}}>{text}</h3>
      </DivL>
      <DivR image={img} position={bgPos}>
      </DivR>
    </Container>
  );
};

export default CardCredentialsR;
