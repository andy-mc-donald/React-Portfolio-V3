import React from "react";
import styled from "styled-components";


const DivL = styled.div`
  flex: 2;
  border-style: solid;
  border-color: black;
  border-width: 0 1px 0 0;
  background-image: url(${props => props.image});
  background-position: ${props => props.position};
  background-repeat: no-repeat;
  background-size: cover;
`;

const DivR = styled.div`
  flex: 1;
  text-align: center;
  background-color: ${props => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
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



const CardCredentialsL = ({img, bgPos, color, text, textColor}) => {
  return (
    <Container>
      <DivL image={img} position={bgPos}>
      </DivL>
      <DivR bgcolor={color}>
        <h3 style={{padding: "1em", color: textColor}}>{text}</h3>
      </DivR>
    </Container>
  );
};

export default CardCredentialsL;
