import { React, useEffect, useState } from 'react'

// [Firebase Config 5] Importamos o firebase usando desestruturação
import { db, firebaseApp } from '../firebase'

// [Firebase Config 6] Importamos os métodos para realizarmos consultas
import { collection, doc, getDocs, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

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

  // [Firebase Testes d] Criando um documento
  const createDoc = async () => {
    const newDocReference = doc(db, 'videos', '147') // Pega a referência

    const newDocData = { // Valores que serão salvos
      id: Date.now(),
      title: 'Video title 147'
    }

    await setDoc(newDocReference, newDocData)
    console.log('create doc')
  }

  // [Firebase Testes e] Atualizando um documento
  const updateDoc1 = async () => {
    const newDocReference = doc(db, 'videos', '147') // Pega a referência

    const newDocData = { // Valores que serão salvos
      id: Date.now(),
      title: 'Video title 147',
      updated: true
    }

    await setDoc(newDocReference, newDocData)
    console.log('update doc 1')
  }

  // [Firebase Testes f] Criando uma coleção no root
  const createCollection = async () => {
    const newDocReference = doc(db, 'users', 'victor jacon') // Pega a referência

    const newDocData = { // Valores que serão salvos
      id: Date.now(),
      username: 'victor jacon',
      role: 'front end developer'
    }

    await setDoc(newDocReference, newDocData)
    console.log('create collection')
  }

  // [Firebase Testes g] Atualizar um documento dentro da coleção que acabamos de criar.
  // No firebase a gente não cria explicitamente uma collection.
  // Criamos um documento. Se a collection que a gente especificar não existir, aí criamos a collection + document.
  //A collection users não existia no root, e foi criada.
  const updateDoc2 = async () => {
    const newDocReference = doc(db, 'users', 'victor jacon') // Pega a referência

    const newDocData = { // Valores que serão salvos
      id: serverTimestamp(),
      username: 'victor jacon',
      role: 'fullstack developer',
      updated: true
    }

    await setDoc(newDocReference, newDocData)
    console.log('update collection 2')
  }

  // [Firebase Testes g] Atualizar apenas um campo do documento
  const updateDoc3 = async () => {
    const newDocReference = doc(db, 'users', 'victor jacon') // Pega a referência

    const newDocData = { // Valores que serão salvos
      role: 'mobile developer'
    }

    await updateDoc(newDocReference, newDocData)
    console.log('update collection 3')
  }

  // [Firebase Testes h] Atualizar 1 campo solto + 1 campo dentro de um objeto
  // Obs: Para testar, comente e execute um método por vez.
  const updateDocMultiple = async () => {
    const docReference = doc(db, 'users', 'victor jacon') // Pega a referência

      // Cria valores iniciais
      const docData = { // Valores que serão salvos
        role: 'mobile developer',
        age: 35,
        favorites: { food: 'Sushi', color: 'turquoise', techStack: 'mern'}
      }
      await setDoc(docReference, docData)
    

      // Atualiza idade (solto) + atualiza o campo food (de sushi para barbecue)
      const updateDocData = {
        "age": 30,
        "favorites.food": 'Barbecue'
      }
      await updateDoc(docReference, updateDocData)

    console.log('update multiple A')
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

      <button onClick={() => updateDocMultiple()}>
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
