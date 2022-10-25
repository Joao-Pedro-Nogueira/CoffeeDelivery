import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../@types/styles";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: ${(props) => props.theme};
  }
`