import { createGlobalStyle } from "styled-components";

export const GlobaStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${({ theme }) => theme.mainBackgroundColor};
    color: ${({ theme }) => theme.mainTextColor};
    font-family: 'Fira Code', monospace;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    width: auto;
    overflow: visible;

    color: inherit;
    font: inherit;
    text-align: inherit;

    line-height: normal;
    font-smooth: inherit;
    appearance: none;
  }
`
