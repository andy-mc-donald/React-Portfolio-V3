import React from "react";
import styled from "styled-components";

const DivL = styled.div`
  flex: 2;
  border-style: solid;
  border-color: black;
  border-width: 0 1px 0 0;
  background-image: url(${(props) => props.image});
  background-position: ${(props) => props.position};
  background-repeat: no-repeat;
  background-size: cover;
  transition: flex 0.3s ease-in-out;
`;

const DivR = styled.div`
  flex: 1;
  text-align: center;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
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

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const CardCredentialsL = ({ img, bgPos, color, text, textColor, link }) => {
  return (
    <A href={link} target="_blank" rel="noopener noreferrer">
      <Container>
        <DivL image={img} position={bgPos}></DivL>
        <DivR bgcolor={color}>
          <h3 style={{ padding: "1em", color: textColor }}>{text}</h3>
        </DivR>
      </Container>
    </A>
  );
};

export default CardCredentialsL;
