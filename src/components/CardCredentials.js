import React from "react";
import styled from "styled-components";
import FoundersAndCoders from "../assets/credentials/FoundersAndCoders.png";

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 2em;
  height: 25em;
`;

const DivL = styled.div`
  flex: 2;
  border-style: solid;
  border-color: black;
  border-width: 0 1px 0 0;
  background-image: url(${FoundersAndCoders});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DivR = styled.div`
  flex: 1;
  text-align: center;
  background-color: ${props => props.bgcolor};
`;

const CardCredentials = ({color, text}) => {
  return (
    <Container>
      <DivL>
        {/* <Img src={FoundersAndCoders} /> */}
      </DivL>
      <DivR bgcolor={color}>
        <h3>{text}</h3>
      </DivR>
    </Container>
  );
};

export default CardCredentials;
