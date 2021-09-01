import React, { Component } from 'react'

export class Lifecycle extends Component {

  constructor() {
    super()
  }

  componentWillMount() {
    
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
