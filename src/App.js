import React, { Component } from 'react'

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

  render() {
    return (
      <AppContent 
        userinfo={this.state.userinfo} 
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App;
