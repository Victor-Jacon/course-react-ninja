import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Play from '../components/Play'

const Page1 = () => {
  return (
    <Container>
      <Header>
        <h1>Reactflix</h1>
      </Header>

      <Main>
        <VideosList>
          {Array.from({ length: 10 }).map((item, index) => (
            <Video key={index}>
              <VideoThumb>
                <PlayStyled />
              </VideoThumb>
              <VideoTitle>video.titulo</VideoTitle>
            </Video>
          ))}
        </VideosList>
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

const VideosList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Video = styled.section`
  flex: 1 1 300px;
  margin: 0 5px 5px;
`

const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const PlayStyled = styled(Play)`
  fill: #999;
  width: 50px;
  height: 50px;
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
  color: white;
`

export default Page1
