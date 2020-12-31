// globalStyles.js
import { createGlobalStyle } from "styled-components";

/*
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;

*/

const GlobalStyle = createGlobalStyle`
  html, body {
    margin:0;
    padding:0;
    height:100%;
    background: white;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;