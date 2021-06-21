import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;

    --gray-900: #181B23;
    --gray-800: #1F2029;
    --gray-700: #353646;
    --gray-600: #4B4D63;
    --gray-500: #616480;
    --gray-400: #797D9A;
    --gray-300: #9699B0;
    --gray-200: #B3B5C6;
    --gray-100: #D1D2DC;
    --gray-50: #EEEEF2;

    --pink-500: #D53F8C;
    --pink-400: #ED64A6;

    --red-500: #E53E3E;
    --red-400: #F56565;

    --purple-400: #9F7AEA;

    --green-500: #38A169;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    color: var(--gray-50);
  }

  body,
  input,
  select,
  button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
