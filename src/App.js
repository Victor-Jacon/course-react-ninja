import React, { Component } from 'react'
import ClassComponent from './Examples/ClassComponent';
import Formularios from './Examples/Formularios';
import Lifecycle, { Timer } from './Examples/Lifecycle';
import { TestingProps } from './Examples/TestingProps';
import './index.css';

export class App extends Component {

  constructor () {
    super()
  }

  render() {
    return (
      <div className="App container">
      <Formularios />
    </div>
    )
  }
}

export default App;
