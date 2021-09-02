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
      starred: []
    }
  }

  // [Teclado 1] Para saber qual o código de cada tecla do teclado: Basta passar o código e.which ou e.keyCode e salva ele numa variável. Depois mostrar ele na tela com console.log
  handleSearch = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
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
          }
        })
      })
    }
    console.log(keyCode)
  }

  render() {
    return (
      <AppContent 
        userinfo={this.state.userinfo} 
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
      />
      // [Teclado 2] O handleSearch vai ser passado como props para o nosso componente search. E o valor desta props será o valor da própria função handleSearch (ambos com mesmo nome, prop e valor)
    )
  }
}

export default App;
