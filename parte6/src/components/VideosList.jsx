import React from 'react'
import styled from 'styled-components'
import Play from '../components/Play'


const VideosList = () => {
  return (
    <Container>
      {Array.from({ length: 10 }).map((item, index) => (
        <Video key={index}>
          <VideoThumb>
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>video.titulo</VideoTitle>
        </Video>
      ))}
    </Container>
  )
}

const PlayStyled = styled(Play)`
  fill: #999;
  width: 50px;
  height: 50px;
  transition: all .15s ease-in-out;
`

const Video = styled.section`
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`

const VideoThumb = styled.div`
  border: 1px solid #999;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${PlayStyled} {
    transform: scale(1.5)
  }
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

export default VideosList
