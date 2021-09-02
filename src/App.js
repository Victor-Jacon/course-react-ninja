import React, { Component } from 'react'
import Actions from './Components/Actions';
import Search from './Components/Search';
import Userinfo from './Components/Userinfo';
import Repos from './Components/Repos'
import ClassComponent from './Examples/ClassComponent';
import Formularios from './Examples/Formularios';
import Lifecycle, { Timer } from './Examples/Lifecycle';
import TesteSetState from './Examples/TesteSetState';
import { TestingProps } from './Examples/TestingProps';
import './index.css';

export class App extends Component {

  constructor () {
    super()
  }

  render() {
    return (
      <div className="App container">
        
        <Search />
        <Userinfo />
        <Actions />
        <Repos className='repos' title='Repositórios'repos={[{ name: 'Nome do repositório', link: '#'}]}/>
        <Repos className='starred' title='Favoritos'repos={[{ name: 'Nome do repositório', link: '#'}]}/>

      </div>
    )
  }
}

export default App;
