import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  ::selection {
    background: #61dafb;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
  }

  body {
    font-size: 16px;
    transition: 600ms;
  }
`;
