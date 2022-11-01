import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; padding: 0; box-sizing: border-box;
  }
  ul,ol,li {
    list-style: none;
  }
  a {
    outline: 0; text-decoration: none;
  }
  body {
    width: 100%; height: 100vh; overflow:  hidden; position: relative; display: flex; justify-content: center; align-items: center;
  }
`;

export default GlobalStyle;