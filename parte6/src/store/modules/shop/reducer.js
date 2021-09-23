/* Redux 10 + Immer 1 - Importamos o immer para adicionar imutabilidade no nosso projeto, que é uma boa prática para gerenciar o estado com redux. */
import produce from 'immer';
import types from './types'
import Swal from 'sweetalert2'

// REDUCER 1 - Definimos um valor inicial para o counter
const INITIAL_STATE = {
  videos: [],
  video: {},
  isFormOpen: false,
  currentVideo: {
    id: 'yellowbrick1',
    title: 'Música de Estudo para Concentração',
    url: 'https://www.youtube.com/watch?v=WPni755-Krg&ab_channel=YellowBrickCinema-RelaxingMusic',
    rating: 5
  },
};

// REDUCER 2 - Na nossa shop definimos que o state será o objeto initial state que criamos acima. Para acessarmos os objetos faremos assim state.counter, ou state.nomeDoObjeto que queremos manipular com o reducer.
function shop (state = INITIAL_STATE, action) {

  switch (action.type) {

    /* Rascunho
    case types.ADD_VIDEO: {
      return produce(state, (draft) => {
        // Para criar o nome do objeto de forma dinâmica usamos a sintaxe abaixo.
        // [action.video.id] = {  }
        const newVideo = {
          id: action.video.id,
          title: action.video.title,
          url: action.video.url
        }
        draft.videos.push(newVideo)
      })
    }
    */

    case types.OPEN_FORM: {
      return produce(state, (draft) => {
        if (draft.isFormOpen === true) {
          Swal.fire({
            title: 'Olhe abaixo',
            text: 'O formulário já está aberto'
          })
        }
        draft.isFormOpen = true;
      })
    }

    case types.CLOSE_FORM: {
      return produce(state, (draft) => {
        draft.isFormOpen = false;
      })
    }

    case types.PLAY_NEW_VIDEO: {
      return produce(state, (draft) => {
        console.log('PLAY_NEW_VIDEO'); console.log(action.video)
        draft.currentVideo = action.newVideo
      })
    }

    default:
      return state

  }
}

export default shop;