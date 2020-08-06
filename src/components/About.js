import React from "react";
import styled from "styled-components";

const Div = styled.div`
    background-color: pink;
`

const About = () => {
    return(
        <Div>
            <h1>Hello, I'm Andy, a London-based software developer</h1>
            <h2>I’m a graduate of the Founders and Coders full-stack programme with a keen interest in React, JavaScript and modern web development.</h2>
        </Div>
    )
}

export default About;