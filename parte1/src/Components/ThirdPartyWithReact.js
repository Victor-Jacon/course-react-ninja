import React, { Component } from 'react'

/* [DOM 1] Neste exemplo vamos mostrar como manipular o dom usando biblioteca de terceiros com react.
Não é recomendado manipular o dom diretamente. 
Somente quando essa biblioteca de terceiros não permitir que você manipule ele pela api do react. 
Ou seja, se não der pra resolver com props e state, ai manipulamos diretamente conforme o exemplo completo que temos aqui. 
A ideia aqui é habilitar o focus no campo INPUT quando clicamos no BUTTON.
*/ 
export class ThirdPartyWithReact extends Component {

  constructor () {
    super()
    // [DOM 2] Guardando referência do this
    this.handleClick = this.handleClick.bind(this)
  }

  // [DOM 3] 
  handleClick() {
    // [DOM 6] Mostra no console qual o escopo do this
    console.log('Clicou no botão focus', this.myInput)
    this.myInput.focus()
  }

  render() {
    return (
      <div>
        {/* [DOM 5] Este aqui é a alternativa do hook useRef. O node é o nó do dom. 
        Dica: Quando der unmount deste componente, o react já vai anular o ref. Não precisa limpar, o react já vai anular este objeto do dom, e não vai ficar dando memory leak. */}
        <input type="text" ref={(node) => (this.myInput = node)}/>

        {/* [DOM 4] */}
        <button onClick={this.handleClick}>Focus</button> 
      </div>
    )
  }
}

export default ThirdPartyWithReact
