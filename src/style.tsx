import styled, { createGlobalStyle } from 'styled-components'

export const StyledApp = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const StyledContent = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #aaaba3;
`

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0 auto;
    padding: 0;
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    line-height: 1.15;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  h1,h2,h3,h4,h5,p,a,ul,li {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  button {
    border: none;
    background: none;
  }
`