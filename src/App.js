import React from "react";
import styled from "styled-components";
import AccordianNav from "./components/AccordianNav";
import GlobalStyle from "./GlobalStyle";

const MainBlock = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <MainBlock>
      <GlobalStyle />
      <AccordianNav />
    </MainBlock>
  );
};

export default App;
