// [Firebase Config 5] Importamos o firebase usando desestruturação
import { db, firebaseApp } from '../firebase'

// [Firebase Config 6] Importamos os métodos para realizarmos consultas
import { query, orderBy, limit, collection, doc, getDocs, setDoc, updateDoc, serverTimestamp, deleteDoc, deleteField, where } from "firebase/firestore";

// [Firebase Testes 0] Pegando todos os documents dentro da collection videos
  export async function getVideos1 () {
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
    const newDocReference = doc(db, 'users', 'willian frossard') // Pega a referência

    const newDocData = { // Valores que serão salvos
      id: Date.now(),
      username: 'willian frossard',
      role: 'wordpress developer'
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

  // [Firebase Testes i] Deletar 1 documento.
  // Obs: O firebase não deleta as subcoleções de um documento deletado. Vc precisa deletar isso manualmente usando a exclusão de coleções.
  const deleteDoc1 = async () => {
    const docReference = doc(db, 'users', 'willian frossard') // Pega a referência

    await deleteDoc(docReference)
    console.log('delete document')
  }

  // [Firebase Testes j] Deletar 1 campo
  const deleteField1 = async () => {
    const docReference = doc(db, 'users', 'willian frossard') // Pega a referência
    const fieldReference = {
      role: deleteField()
    }

    await updateDoc(docReference, fieldReference)
    console.log('delete field')
  }

  // [Firebase Testes k] GET de dados + Where (buscando um objeto que o título seja igual a Heaven is Hell)
  export const getVideoByTitle = async (title) => {
    console.log('get top rated 3: ok')
    const videosRef = collection(db, 'videos');
    const q = query(videosRef, where("title", "==", title))
    
    const querySnapshot = await getDocs(q)
    const videosList = querySnapshot.docs.map((doc) => doc.data());
    
    console.log(videosList)
    return videosList
  }

  export const getVideoAndSortByRating = async () => {
    const videosRef = collection(db, 'videos')
    const q = query(videosRef, orderBy('rating', 'desc'), limit(3))

    const querySnapshop = await getDocs(q)
    const videosList = querySnapshop.docs.map((doc) => doc.data())
    console.log(videosList)
    return videosList
  }