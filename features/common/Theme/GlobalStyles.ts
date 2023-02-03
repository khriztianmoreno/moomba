import { css } from '@emotion/react'

const globalStyle = (theme) => css`
  a,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  *,
  a:visited,
  a:active {
    text-decoration: none;
  }

  *,
  *:focus {
    outline: none;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.6;
    margin: 0;
    max-width: 100vw;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    display: inline-block;
    border: none;
  }

  .layout {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem;
  }

`

export default globalStyle
