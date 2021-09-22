/* Redux 10 + Immer 1 - Importamos o immer para adicionar imutabilidade no nosso projeto, que é uma boa prática para gerenciar o estado com redux. */
import produce from 'immer';
import types from './types'

// REDUCER 1 - Definimos um valor inicial para o counter
const INITIAL_STATE = {
  videos: []
};

// REDUCER 2 - Na nossa shop definimos que o state será o objeto initial state que criamos acima. Para acessarmos os objetos faremos assim state.counter, ou state.nomeDoObjeto que queremos manipular com o reducer.
function shop (state = INITIAL_STATE, action) {

  switch (action.type) {

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

    default:
      return state;

  }
}

export default shop;