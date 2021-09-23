import styled, { createGlobalStyle } from 'styled-components'

/* HEADER */

const headerHeight = '60px'
const footerHeight = '30px'

export const Header = styled.header`
  height: ${headerHeight};
  background: #333;
  color: white;
  padding: 10px 0px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const HeaderTitle = styled.h1`
  margin-bottom: 0;
`

export const RegisterButton = styled.button`
  padding: 12px 0;
  width: 200px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05)
  }
`

/* MAIN AND OTHERS */

export const GlobalStyle = createGlobalStyle`
  body, html, #root, .App {
    height: 100vh;
  }
`

export const Container = styled.div`
  height: 100%;
`

export const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

/* FOOTER */

export const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
  color: white;
`