import React, { Component } from 'react'

export class Timer extends Component {

  constructor() {
    super()
    this.state = {
      time: 0
    }
  }

  // [Timer 1] O componentDidMount executa apenas uma vez. Por isso ao invés de usar setTimeout, usamos setInterval.
  // [Timer 3] O setinterval vai continuar executando mesmo que o timer saia da tela. É importante sempre criar uma contrapartida de limpeza de métodos como esse, pra evitar erros e memory leaks.
  // [Timer 4] Passo a referência do setInterval para o timer
  componentDidMount() {
    this.timer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        Timer: {this.state.time}
        
        <br />
      </div>
    )
  }
}

export class Lifecycle extends Component {

  constructor() {
    super()
  }

  // Executa do lado do front e do server
  componentWillMount() {
  }

  // Executa apenas no front
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  /* 
  Montando e desmontando:
  [deprecated] componentWillMount - antes do componente montar
  componentDidMount - logo após o componente montar
  componentWillUnmount - logo antes do componente ser desmontado

  Atualização:
  [deprecated] componentWillReceiveProps(nextProps) - antes do componente receber propriedades. Usamos ele pra comparar a propriedade atual, com a propriedade que está sendo passada.
  shouldComponentUpdate(nextProps, nextState) => determina se o componente deve ou não ser atualizado
  [deprecated]componentWillUpdate(nextProps, nextState) - logo antes do componente ser atualizado
  componentDidUpdate(prevProps, prevState) - logo depois do componente ser atualizado
  */

  render() {
    return (
      <>
        <div>
          <h1>Entendendo lifecycle dos componentes de classe</h1>
        </div>
      </>
    )
  }
}

export default Lifecycle
