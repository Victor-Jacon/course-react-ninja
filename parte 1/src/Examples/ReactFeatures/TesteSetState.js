import React, { Component } from 'react'

export class TesteSetState extends Component {

  constructor() {
    super()
    this.state = {
      checked1: false,
      showContent1: false,
      checked: false,
      showContent: false,
    }
  }


  render() {
    return (
      <div>
        <label>
          {/* [setState 1] Ele é assíncrono. Quando o setState executa não é neste mesmo momento que o estado do componente é atualizado.*/}
          {/* [setState 2] Quando acontecer de terem dois setStates dentro do mesmo onChange, o ideal é usar o segundo parâmetro do setState, que é uma função callback. */}
          <h2>Input com 2 setStates (errado) </h2>
          <input type="checkbox" checked={this.state.checked1}
            onChange={() => { 
              this.setState({ checked1: !this.state.checked1 })
              this.setState({ showContent1: this.state.checked1 })
          }}
         />
          Mostrar conteúdo
        </label>
        { this.state.showContent1 && <div> Olha eu aqui </div>}

          <div style={{ margin: 16 }}></div>

        <label>
          <h2>Input com 2 setStates (certo) </h2>
          <input type="checkbox" checked={this.state.checked}
            onChange={() => { 
              this.setState({ checked: !this.state.checked }, () => {
                this.setState({ 
                  showContent: this.state.checked 
                })
              })
            }}
          />
          Mostrar conteúdo
        </label>
          
        { this.state.showContent && <div> Olha eu aqui </div>}
      </div>
    )
  }
}

export default TesteSetState
