import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily["baloo-2"]};
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors["base-text"]};
    
  }
`;
