/* Redux 10 + Immer 1 - Importamos o immer para adicionar imutabilidade no nosso projeto, que é uma boa prática para gerenciar o estado com redux. */
import produce from 'immer';
import CounterMultiplo from '../../../components/CounterMultiplo';
import types from './types'

// REDUCER 1 - Definimos um valor inicial para o counter
const INITIAL_STATE = {
  counter: 0,

  // Multiplo 4
  counterMultiplo: [
    { id: 1, name: 'counter1', value: 0 },
    { id: 2, name: 'counter2', value: 0 }
  ],
  todos: [
    {id: 1, title: 'This is a task', completed: false },
    {id: 2, title: 'this is also a task', completed: true }
  ],
  // ADD-CEP 5
  cepApi: {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 200,
  }
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
        draft.counter = draft.counter + 1
      })
    }

    case types.SET_COUNTER_DECREMENT: {
      return produce(state, (draft) => {
        draft.counter = draft.counter - 1
      })
    }

    // Multiplo 3
    case types.SET_COUNTERMULTIPLO_INCREMENT: {
      return produce(state, (draft) => {
        const index = draft.counterMultiplo.findIndex((counterMultiplo) => counterMultiplo.id === action.counterM.id)   
        draft.counterMultiplo[index].value = action.counterM.value + 1
      })
    }

    // Multiplo-B 3
    case types.SET_COUNTERMULTIPLO_DECREMENT: {
      return produce(state, (draft) => {
        const index = draft.counterMultiplo.findIndex((counterMultiplo) => counterMultiplo.id === action.counterM.id)   
        draft.counterMultiplo[index].value = action.counterM.value - 1
      })
    }
    
    // ADD-C 3
    case types.ADD_COUNTER: {
      return produce(state, (draft) => {
        console.log('ADD COUNTER')

        const newCounter = {
          id: Date.now(),
          name: action.newCounter.name,
          value: 0
        }

        // Adicionamos ao final da array para gerenciarmos o estado dele.
        draft.counterMultiplo.push(newCounter)
      })
    }    

    // RM-C 3
    case types.REMOVE_COUNTER: {
      return produce(state, (draft) => {
        console.log(action.counterM) // RM-C 5

        // Remover da array de estado: findIndex + splice dinamico
        const index = draft.counterMultiplo.findIndex((counterMultiplo) =>  action.counterM.id === counterMultiplo.id)
        draft.counterMultiplo.splice(index,1)
      })
    }   

    // ADDTODO 3
    case types.ADD_TODO: {
      return produce(state, (draft) => {
        console.log(action.todo) // ADDTODO 7
        draft.todos.push(action.todo) // ADDTODO 8

      })
    }

    // RMTODO 3
    case types.REMOVE_TODO: {
      return produce(state, (draft) => {
        console.log(action.todo) // RMTODO 4
        const index = draft.todos.findIndex((todo) => action.todo.id === state.todos.id) // RMTODO 5
        console.log(index) // RMTODO 6
        draft.todos.splice(index,1) // RMTODO 7
      })
    }

    // TOGGLETODO 3
    case types.TOGGLE_TODO: {
      return produce(state, (draft) => {
        // console.log(action.todo) // TOGGLETODO 4
        const index = draft.todos.findIndex((t) => t.id === action.todo.id)
        // console.log(index)
        draft.todos[index].completed = !action.todo.completed
      })
    }
    // ADD-CEP 3
    case types.ADD_CEP: {
      return produce(state, (draft) => {
        // console.log('ADD CEP') // ADD-CEP 4
        // console.log(action.cep) // ADD-CEP 6
        draft.cepApi = action.cep // ADD-CEP 7
      })
    }

    default:
      return state;

  }
}

export default shop;