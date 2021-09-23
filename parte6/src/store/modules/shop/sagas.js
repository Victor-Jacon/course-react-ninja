import { takeLatest, all, call, put, select } from 'redux-saga/effects'
import types from './types';
import {action} from './actions'
import Swal from 'sweetalert2'

// [Firebase] 
import { db, firebaseApp } from '../../../firebase' // Importamos o firebase usando desestruturação
import { collection, doc, getDocs, setDoc, updateDoc, serverTimestamp, deleteDoc, deleteField } from "firebase/firestore"; // Importamos os métodos para realizarmos consultas

export function* createVideo(payload) {
  // const { video } = yield select((state) => state.shop) - Um objeto pra ser enviado pelo saga ao nosso endpoint, pode vir da nossa store (reducer), ou pode vir direto do front, sem passar pelo reducer. Se o objeto percorrer várias telas para ser tratado, ele preferencialmente será buscado da nossa store, igual esta linha faz. Mas quando o objeto não percorre várias telas e não são feitos tratamentos e validações, ele vem direto como parÂmetro da função.
  // console.log('Saga')
  // console.log(payload.video)

  const createDoc = async () => {
    const newDocReference = doc(db, 'videos', payload.video.id) // Pega a referência
    // console.log(newDocReference)

    const newDocData = { // Valores que serão salvos
      id: Date.now(),
      title: payload.video.title,
      url: payload.video.url
    }
    await setDoc(newDocReference, newDocData)
  }
  yield call(createDoc)

  yield Swal.fire({
    title: 'Com alegria no coração!',
    text: 'Seu vídeo foi cadastrado com sucesso'
  })
}

export default all([
  takeLatest(types.CREATE_VIDEO, createVideo),
]);
