/* REDUX BOAS PRÁTICAS 4 
A gente tem muito boilerplate, código repetido, quando usamos o redux do jeito normal, sem seguir as boas práticas.
A gente repete o nome da action em vários lugares diferentes, para realizar 1 fluxo de ação apenas. E isso além de ficar boilerplate, tem grande chance de erro, pq ele é escrito de forma estática (quando não seguimos as boas práticas)
Pra resolver isso, criamos o arquivo types.js, que vai conter
*/

const types = {
  SET_COUNTER_INCREMENT: '@shop/SET_COUNTER_INCREMENT',
  SET_COUNTER_DECREMENT: '@shop/SET_COUNTER_DECREMENT',

  SET_COUNTERMULTIPLO_INCREMENT: '@shop/SET_COUNTERMULTIPLO_INCREMENT', // Multiplo 1

  ADD_COUNTER: '@shop/ADD_COUNTER',
  REMOVE_COUNTER: '@shop/REMOVE_COUNTER',

  REQUEST_SOME_OBJECT: '@shop/REQUEST_SOME_OBJECT'
}

export default types;