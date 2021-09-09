/* Redux 10 + Immer 1 - Importamos o immer para adicionar imutabilidade no nosso projeto, que é uma boa prática para gerenciar o estado com redux. */
import produce from 'immer';
import types from './types'

// REDUCER 1 - Definimos um valor inicial para o counter
const INITIAL_STATE = {
  counter: 0,
};

// REDUCER 2 - Na nossa shop definimos que o state será o objeto initial state que criamos acima. Para acessarmos os objetos faremos assim state.counter, ou state.nomeDoObjeto que queremos manipular com o reducer.
function shop (state = INITIAL_STATE, action) {

  switch (action.type) {
    case types.SET_COUNTER_INCREMENT: {
      /* REDUCER 3
      O 1º parâmetro é o objeto que você não quer mutar. Que você quer garantir imutabilidade.
      O 2º parâmetro é uma cópia do objeto alvo da mutação. Aqui você pode mexer a vontade. No JS/REACT normal você teria que usar spread operator antes de mutar um objeto. No immer você não precisa fazer isso.
      No final o produce retorna um novo objeto com as alterações que fizemos. Sem ferir o príncipio da imutabilidade.
      */
      return produce(state, (draft) => {
        // O draft neste caso é a mesma coisa que o state. Então se eu quero acessar o objeto counter dentro do initial state, eu faria: state.counter. COmo o draft é uma copia, eu faço draft.counter. 
        console.log('increment')
        draft.counter = draft.counter + 1
      })
    }

    case types.SET_COUNTER_DECREMENT: {
      return produce(state, (draft) => {
        console.log('decrement')
        draft.counter = draft.counter - 1
      })
    }

    default:
      return state;


  }
}

export default shop;