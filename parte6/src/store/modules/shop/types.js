/* REDUX BOAS PRÁTICAS 4 
A gente tem muito boilerplate, código repetido, quando usamos o redux do jeito normal, sem seguir as boas práticas.
A gente repete o nome da action em vários lugares diferentes, para realizar 1 fluxo de ação apenas. E isso além de ficar boilerplate, tem grande chance de erro, pq ele é escrito de forma estática (quando não seguimos as boas práticas)
Pra resolver isso, criamos o arquivo types.js, que vai conter
*/

const types = {
  ADD_VIDEO: '@shop/ADD_VIDEO',
  CREATE_VIDEO: '@shop/CREATE_VIDEO',

  OPEN_FORM: '@shop/OPEN_FORM',
  CLOSE_FORM: '@shop/CLOSE_FORM',
  
  PLAY_NEW_VIDEO: '@shop/PLAY_NEW_VIDEO'
}

export default types;