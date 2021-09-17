import React from 'react'
import styled from 'styled-components'

const VideoSingle = () => {
  return (
    <Container>
      <Iframe width="560" height="315" src="https://www.youtube.com/embed/7Ur9zN2vMcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      <Title>Título do Vídeo</Title>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
`

const Iframe = styled.iframe`
  background: #000;
  border: 0;
  border-bottom: 1px solid #999;
  margin-bottom: 10px;
  width: 100%;
`

const Title = styled.h2`
  padding: 10px;
`

export default VideoSingle
