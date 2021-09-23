import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const VideoSingle = () => {

  const { currentVideo } = useSelector(state => state.shop)
  const ytbBaseUrl = 'https://www.youtube.com/embed/'

  const ytbIdExtractor = (video) => {
    // console.log(video.url)
    let ytbVideoIdStart = video.url.search('v=') // Vai encontrar na URL a partir de onde é o parâmetro ID
    ytbVideoIdStart = ytbVideoIdStart + 2 // Vai adicionar + 2 ao index do ytbVideoId, para que ele extraia apenas o id, sem pegar a marcação do parâmetro
    // console.log(ytbVideoIdStart)
    let ytbVideoIdEnd = video.url.search('&')
    ytbVideoIdEnd = ytbVideoIdEnd - ytbVideoIdStart
    // console.log(ytbVideoIdEnd)
    const ytbIdOnly = video.url.substr(ytbVideoIdStart, ytbVideoIdEnd)
    return ytbIdOnly
  }

  return (
    <Container id='single'>
      <Iframe width="560" height="315" src={ytbBaseUrl + ytbIdExtractor(currentVideo)} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
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
