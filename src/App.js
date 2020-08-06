import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";

const Grid = styled.div`
`;

const RowTop = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RowMain = styled.div`
  display: flex;
  border: 1px solid black;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Row = styled.div`
  display: flex;
  border-style: solid;
  border-color: black;
  border-width: 0px 1px 1px 1px
`;

const RowBottom = styled.div`
  display: flex;
  border-style: solid;
  border-color: black;
  border-width: 0px 1px 1px 1px
`;

const ColumnTopL = styled.div`
  flex: ${(props) => props.size};
  border-style: solid;
  border-color: black;
  border-width: 0 1px 0 0;
  @media (max-width: 768px) {
    border-width: 0 0 1px 0;
  }
`;

const ColumnTopR = styled.div`
  flex: ${(props) => props.size};
  border-style: solid;
  border-color: black;
  border-width: 0 0 0 0;
  @media (max-width: 768px) {
    border-width: 0 0 0 0;
  }
`;

const ColumnProjectsL = styled.div`
  flex: ${(props) => props.size};
  border-style: solid;
  border-color: black;
  border-width: 0 1px 0 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ColumnProjectsR = styled.div`
  flex: ${(props) => props.size};
  border-style: solid;
  border-color: black;
  border-width: 0 0 0 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ColumnProjectsAll = styled.div`
  flex: ${(props) => props.size};
  @media (min-width: 769px) {
    display: none;
  }
`;

const App = () => {
  return (
    <div className="App">
      <Grid>
        <RowTop>
          <NavBar />
        </RowTop>
        <RowMain>
          <ColumnTopL size={1}>
            <About />
          </ColumnTopL>
          <ColumnTopR size={1}>
            <h1>Credentials</h1>
          </ColumnTopR>
        </RowMain>
        <Row>
          <h2>Some SVGs</h2>
        </Row>
        <Row>
          <ColumnProjectsL size={1}>
            <h1>Projects</h1>
            <p>Some text to see what it looks like</p>
          </ColumnProjectsL>
          <ColumnProjectsR size={1}>
            <h1>More projects</h1>
          </ColumnProjectsR>
          <ColumnProjectsAll size={1}>
            <h1>All projects (Prev Hidden)</h1>
          </ColumnProjectsAll>
        </Row>
        <RowBottom>
          <h3>Footer</h3>
        </RowBottom>
      </Grid>
      <GlobalStyle />
    </div>
  );
};

export default App;