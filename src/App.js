import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'

// Examples
import ClassComponent from './Examples/ClassComponent';
import Formularios from './Examples/Formularios';
import Lifecycle, { Timer } from './Examples/Lifecycle';
import TesteSetState from './Examples/TesteSetState';
import { TestingProps } from './Examples/TestingProps';

import './index.css';
import AppContent from './Components/AppContent';

export class App extends Component {

  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false // [Fetching]

      /* [QA INPUT 6] Também podemos habilitar e desabilitar com state:
      searchFieldDisabled: false
      
      Depois de feita a busca eu podia dar setState e atualizar diretamente. Isso é recomendado quando são vários campos.
      */
    }
  }

  // [URL] Pra poder reaproveitar a mesma função para 2 rotas diferentes eu tiro o / do return da URL. Deixo tudo junto.
  // [URL] Eu adiciono o / da url dentro da variável internalType. Se eu tiver passado o type (ou seja, eu usar os 2 parâmetros), ele vai normal. Se não, ele adiciona o / no type, garantindo assim que o url fique correto.
  getGitHubApiUrl = (username, type) => {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  // [Teclado 1] Para saber qual o código de cada tecla do teclado: Basta passar o código e.which ou e.keyCode e salva ele numa variável. Depois mostrar ele na tela com console.log
  handleSearch = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    
    // [Dica] Para eu ver as propriedades de uma tag html eu uso o método console.dir
    console.dir(e.target)

    /* [QA INPUT 4] Usando o e.persist() nós prevenimos o react de reciclar o evento. Assim conseguimos reabilitar o botão.
    e.persist()   
    */

    /* [QA INPUT 5] Ou podemos atribuir o target a uma variável (que vai manter uma referência persistente da mesma forma.)
    const target = e.target */

    if (keyCode === ENTER) {
      /* [QA INPUT 1] Desabilito o input para que o usuário não possa digitar depois que ele tiver dado enter.
      target.disabled = true */

      // [Fetching]
      this.setState({ isFetching: true })
      
      // [URL] Aqui eu chamo a função e passo value como parâmetro. Ao invés de passar a url direto eu puxo a url da função.
      ajax().get(this.getGitHubApiUrl(value))

      /* [QA INPUT 2] 
      .then : acontece quando o método retorna com sucesso.
      .error() : acontece quando dá erro na request 
      .always () : sempre executa
      */
      .then((result) => {
        console.log(result)
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
          // [QA] Depois que temos uma busca feita: Quando fazemos uma segunda busca, a gente acaba sendo obrigado a clicar em ver repositórios e favoritos pra que ele apague os repositórios do usuário anterior. 
          // [QA] Passando os arrays vazios aqui, a gente garante que o estado de repos e starred será "zerado" quando fizermos uma nova busca. Na boa prática seria setRepos + setStarred (usando hooks). Mas como aqui usamos classes, que é um jeito antigo de codar, alteramos o estado diretamente mesmo.
          repos: [],
          starred: []
        })
      })
      /* [QA INPUT 3] Vamos reabilitar o botão de input
      O react por padrão REUTILIZA os eventos por questões de performance. Então o evento é disparado normalmente mas quando ele chega aqui, o react coloca null em tudo, apaga tudo, pra ele ser reutilizado.
      Neste caso a gente não consegue acessar o target dele para reabilita-lo normalmente (que é o que fariamos com JS puro)
      Temos 2 formas de resolver, veja no próximo comentário.
      
      [QA INPUT 5] usando a solução 2, substituimos e.target pela variável target que criamos acima.
      .always(() => {
        target.disabled = false
      })
      */

     // [Fetching]
     .always(() => this.setState({ isFetching: false }))
      
    }
    console.log(keyCode)
  }

  // Aqui passamos o login do usuário pra que a busca dos repositórios seja feita de acordo com o usuário que foi buscado
  // repoType: Se vai ser todos os repos ou os favoritos. Assim podemos reutilizar a mesma função.
  // return: Usamos uma linha de return no início desta nossa função porque não passamos 
  // Passamos o login como parâmetro para podermos buscar vários usuários diferentes (pr ficar dinâmico)
  // O método getRepos pode retornar 2 tipos diferentes de repositórios (todos ou favoritos)
  // o repoType é passado ao invés de passarmos o nome do objeto que foi dado no setState  (assim ele pode ser repo ou starred)
  // Como o result é um array a gente usa o map para passarmos por todos os objetos que tiverem salvos no array results.
  // O nome de cada objeto iterado pelo map será "repo". E aí, cada objeto que for iterado vamos pegar o id, name e html_url dele (o repo é um apelido dado ao objeto iterado da vez)
  // No map temos a oportunidade de definir a estrutura de cada objeto de retorno que o map retornará.
  // [Dica] Se for retornar um objeto sem usar return precisa colocar parêntesis. " => ( " Caso contrário o react vai achar que a chave é do método e não do objeto
  getRepos = (repoType) => {
    return (e) => {
      const login = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(login, repoType))
      .then((result) => {
        console.log(result)
        this.setState({
          /* Exemplo: Retornando com return
          [repoType]: result.map((repo) => {
            return {
              id: repo.id,
              name: repo.name,
              link: repo.html_url
            }
          })
          */
          // Sem return
          [repoType]: result.map((repo) => ({
              id: repo.id,
              name: repo.name,
              link: repo.html_url
          }))
        })
      })
    } 
  }

  render() {
    return (
      // [Spread Operator] Eu poderia substituir essas 4 linhas de props={this.state.xpto} por {...this.state}, neste caso ele passaria tudo. Ou seja, ele deixa passar todas as propriedades e todos os estados.
      // [Spread Operator] Para passar array o spread operator tb funciona, fica assim: ...nomeArray. SE eu tivesse uma função de soma, e eu quisesse somar 3 numeros, tb daria, veja: array = [1,2,3]; sum(...array); Seria igual a fazer: sum(arr[0], arr[1], arr[2])
      <AppContent 
        userinfo={this.state.userinfo} 
        repos={this.state.repos}
        starred={this.state.starred}
        isFetching={this.state.isFetching}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getFavorites={this.getRepos('starred')}
      />
      // [Teclado 2] O this é pra referenciar a classe, e dentro da classe temos os métodos, neste caso vamos usar o handleSearch vai ser passado como props para o nosso componente search. E o valor desta props será o valor da própria função handleSearch (ambos com mesmo nome, prop e valor)
      // [Eventos] handleSearch e o getRepos são eventos. Eles precisam ser alimentados com uma arrow function. A arrow function preserva o this. Se usarmos uma function aqui ela faria o this deixar de ser o componente de classe, e passaria a ser o elemento html.
      // [Eventos] Se não quisermos usar uma arrow function como parâmetro da props a gente precisa fazer o bind do this. Ficaria por ex: this.handleSearch.bind(this); Isso é padrão pra tirar o this do html e mandar pra classe. (o problema é que o bind é bem mais lento do que usar a arrow function direto. Tem um outro jeito de fazer, veja o exemplo abaixo)
      // [Eventos] Dessa forma abaixo (2 etapas) é mais performático. Porque ele executa apenas um vez quando o elemento é construido.
      // [Eventos] 1-La dentro do constructor (fora do state) você pega a referência do this: this.handleSearch = this.handleSearch.bind(this)
      // [Eventos] 2-na props, passa assim: this.handleSearch.
      // [Eventos] Nos componentes react.CreateClass ou app extends components e outros, todos eles precisam que você especifique o escopo que você está buscando através de bind(this). Se não tiver conseguindo acessar um método, props, variável e etc, isso é pq a lógica é diferente mesmo.
    )
  }
}

export default App;
