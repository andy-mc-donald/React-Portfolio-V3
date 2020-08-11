import React, { Fragment } from "react";
import styled from "styled-components";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";

const Div = styled.div`
    height: 100px;
//   display: flex;
//   width: 1000px;
//   align-items: center;
//   justify-content: space-around;
`;

// const Ul = styled.ul`
//     list-style-type: none;
// `;

// const Li = styled.li`
//     display: inline;
// `

const HTML = styled(Html5)`
    color: red;
`

const CSS = styled(Css3)`
    color: yellow;
`

const IconScroller = () => {
  return (
    <Div>
        <HTML size="80" />
        <CSS size="80" />

    </Div>
  );
};

export default IconScroller;
