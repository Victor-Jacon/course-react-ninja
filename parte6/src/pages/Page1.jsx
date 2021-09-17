import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import VideoSingle from '../components/VideoSingle'
import VideosList from '../components/VideosList'

const Page1 = () => {
  return (
    <Container>
      <Header>
        <h1>Reactflix</h1>
      </Header>

      <Main>
        <VideoSingle />
        <VideosList />
      </Main>

      <Footer>
        &copy; 2018
      </Footer>
    </Container>
  )
}

export const GlobalStyle = createGlobalStyle`
  body, html, #root, .App {
    height: 100vh;
  }
`

const Container = styled.div`
  height: 100%;
`

const headerHeight = '60px'
const footerHeight = '30px'

const Header = styled.header`
  height: ${headerHeight};
  background: #333;
  color: white;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`


const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
  color: white;
`

export default Page1
