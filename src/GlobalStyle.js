import { createGlobalStyle } from "styled-components";
// import "./index.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }

  body {
    /* width: 100vh; */
    font-family: 'Noto Sans KR', sans-serif;
    /* font-size: 15px; */
    line-height: 1.5em;
    font-weight: 300;
    background-color: #f4f4f4;
    color: #888;
    position: relative;

    /* .App {
      position: absolute;
      width: 1200px;
      min-width: 1200px;
      left: 50%;
      transform: translateX(-50%);
    } */

    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-weight: 500;
    }
  }
  
`;

export default GlobalStyle;
