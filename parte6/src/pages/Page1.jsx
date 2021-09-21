import { React, useEffect, useState } from 'react'

// [Firebase Config 5] Importamos o firebase usando desestruturação
import { db, firebaseApp } from '../firebase'

// [Firebase Config 6] Importamos os métodos para realizarmos consultas
import { collection, doc, getDocs } from "firebase/firestore";

// Components
import styled, { createGlobalStyle } from 'styled-components'
import VideoSingle from '../components/VideoSingle'
import VideosList from '../components/VideosList'

const Page1 = () => {

  const [videosFirebase, setVideosFirebase] = useState([])

  async function getVideos () {
      const videosCol = collection(db, 'videos');
      // console.log('videosCol'); console.log(videosCol)
      const videosSnapshot = await getDocs(videosCol);
      // console.log('videosSnapshot'); console.log(videosSnapshot)
      const videosList = videosSnapshot.docs.map((doc) => doc.data());
      console.log('videosList'); console.log(videosList)
      return videosList
    }

  // [Firebase Testes A] Pegando referência de uma coleção do firebase
  async function testeCollectionRef () {
    const refVideoCollection = collection(db, 'videos')
    console.log(refVideoCollection)
  }

  // [Firebase Testes b] Pegando referência de um documento do firebase
  async function testeDocRef () {
    const refVideoCollection = doc(db, 'videos', 'pxdGkvtbf3kTGmud2kqO')
    console.log(refVideoCollection)
  }

  // [Firebase Testes c] Pegando referência de um documento do firebase
  async function testeDocRef2 () {
    const refVideoCollection = doc(db, 'videos/pxdGkvtbf3kTGmud2kqO')
    console.log(refVideoCollection)
  }


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

      <button onClick={() => testeDocRef2()}>
        Ver valor videos
      </button>
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
