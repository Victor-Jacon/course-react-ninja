import React, { Component } from 'react'
import ClassComponent from './Examples/ClassComponent';
import Lifecycle, { Timer } from './Examples/Lifecycle';
import './index.css';

export class App extends Component {

  constructor () {
    super()
    this.state = {
      showTimer: true
    }
  }

  render() {
    return (
      <div className="App container">
      <Lifecycle />

      {this.state.showTimer && <Timer />}
      <button onClick={() => {
        this.setState({ showTimer: !this.state.showTimer })
      }} > 
        Show / Hide Timer 
      </button> {/* [Timer 2] Neste botão eu determino se o timer vai aparecer ou não. */}
    </div>
    )
  }
}

export default App;
