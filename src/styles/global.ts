import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../@types/styles";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    ::-webkit-scrollbar {
      width: 0.45rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 999px;
      background: ${({ theme }) => theme.colors["brand-yellow"]}
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialised;
  }

  body, input-security, text-area, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`