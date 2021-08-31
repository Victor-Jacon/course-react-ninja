import React, { Component } from 'react';

// [Class 1] Cria com sintaxe padrão de classe. O constructor precisa chamar o super() para não dar erro(padrão). O super chama os métodos e propriedades do Component. 
class ClassComponent extends Component {
  constructor () {
    super()

    // [Class State 1] Pra gerenciar estado, temos um objeto state, igual ao props. Modificamos o estado diretamente. O this sinaliza que é pra ser feito neste escopo, syntax suggar. Da mesma forma que podemos definir props, definimos o estado. (é assim visto que não temos react hooks em componentes de classe)
    this.state = {
      text: 'Fernando',
      happy: false,
      isOpen: true,
      color: 'green' 
    }
  }

  // [Class 2] Para renderizar na tela com classes usamos o render
  render () {
    return (
      <>
        <h1 className="title">Como funcionam class components</h1>

        {/* [Class State 2] Pra atualizar o estado usamos o setState(). Não alteramos o estado diretamente. */}
        <button
        onClick={() => this.setState({
          text: 'Outro texto'
        })}>
          {this.state.text}
        </button>

        {/* [Class State 3] Pra atualizar o estado boolean ele funciona igual */}
        <button
        onClick={() => this.setState({
          happy: true
        })}>
          {this.state.happy}
          Click Me (happy)
        </button>

        {/* [Class State 4] Pra inverter o valor true/false. A sintaxe é bem diferente, não podemos fazer !isOpen como nos react hooks. O setState é assíncrono então usamos o prevState que vem por padrão na api do SetState. Usamos o prevState porque ele é uma callback então não corremos risco de ter erro no estado. */}
        <button
        onClick={() => this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }))}>
          {this.state.isOpen}
          Click Me (isOpen)
        </button>

        {/* [Class State 5] Mudar className de forma dinamica. */}
        <button
        className={ this.state.color }
        onClick={() => this.setState({
          color: 'red'
        })}>
          {this.state.color}
        </button>

      </>
    )
  }
}

export default ClassComponent;