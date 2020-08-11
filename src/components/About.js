import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 4em;
  max-width: 500px;
  margin: auto;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;

`;

const H1 = styled.h1`
  margin: 0;
`;

const H2 = styled.h2`
  margin: 1em 0 0 0;
`;

const Button = styled.button`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 2rem;
    color: #212121;
    background-color: white;
    border: 3px solid #212121;
    box-shadow: -3px 5px #212121;
    padding: 2rem 10rem;
    text-align: center;
    margin: 2em 0 0 0;

    &:hover {
        background-color: pink;
    }
`;

const About = () => {
  return (
    <Div>
      <H1>Hello, I'm Andy, a London-based software developer</H1>
      <H2>
        I’m a graduate of the Founders and Coders full-stack programme with a
        keen interest in React, JavaScript and modern web development.
      </H2>
      <Button>Download CV</Button>
    </Div>
  );
};

export default About;
