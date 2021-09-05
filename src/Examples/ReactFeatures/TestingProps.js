import React, { Component } from 'react'
import PropTypes from 'prop-types';

/* COMPONENTES */

// [PropTypes 1] Vamos reutilizar este botão. Ele terá um título reutilizável. Ele terá uma função onClick personalizável também.
export const Button = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

// [PropTypes 2] Vamos tipar as props que nosso componente Button pode receber. Isso habilita o auto-complete da IDE. E também evita erros de tipagem.
Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string
}

/* COMPOSIÇÃO */

export class TestingProps extends Component {
  render() {
    return (
      <div>
        <h1>Entendendo proptypes</h1>
        <Button handleClick={() => console.log('clicou')}>
          Clique aqui
        </Button>
      </div>
    )
  }
}

export default TestingProps
