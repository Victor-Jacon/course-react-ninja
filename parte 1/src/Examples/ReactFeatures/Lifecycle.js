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
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('componentWillUnmount')
  }

    // Só executa quando passamos novas propriedades para este elemento. Aqui podemos usar setState.
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps)
  }

  // Determina se o componente deve ou não ser renderizado novamente. logo ele espera um return true ou false
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }

  // Executa antes do componente ser atualizado na tela. Não podemos mexer no estado aqui.
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }

  // Executa após a renderização do componente.
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
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

/* ########################################################################################################### */

export class Lifecycle extends Component {

  constructor () {
    super()
    this.state = {
      showTimer: true,
      time: 0
    }
  }

    // Só executa quando passamos novas propriedades para este elemento.
    componentWillReceiveProps (nextProps) {
      console.log('componentWillReceiveProps', this.props, nextProps)
    }

  // Executa do lado do front e do server
  componentWillMount() {}

  // Executa apenas no front
  componentDidMount() {}

  componentWillUnmount() {}

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

          {/* EXEMPLO 1 - AULA 23*/}
          {this.state.showTimer && <Timer />}
          <button onClick={() => { this.setState({ showTimer: !this.state.showTimer })}} > 
            Show / Hide Timer 
          </button> {/* [Timer 2] Neste botão eu determino se o timer vai aparecer ou não. */}


          {/* EXEMPLO 2 - AULA 23*/}
          <Timer time={this.state.time} />
          <button onClick={() => {this.setState({ time: this.state.time + 10 })}} > 
            CHANGE PROPS 
          </button> {/* [Timer 2] Neste botão eu determino se o timer vai aparecer ou não. */}
        </div>
      </>
    )
  }
}

export default Lifecycle
