import React from 'react'
import './Button.css'

const Button = (props) => {

  // Aqui eu extrai do fluxo de dados de props somente o que eu preciso.
  // Ele vai receber tudo, mas assim podemos extrair só o necessário, antes de chamarmos de fato no local de uso do dado, bem interessante.
  const { variant = 'primary', children, ...rest } = props

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}

export default Button


/*

Button.propTypes = {
   //Is this the principal call to action on the page?
  primary: PropTypes.bool,

  // What background color to use
  backgroundColor: PropTypes.string,

  //How large should the button be?
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  //Button contents
  label: PropTypes.string.isRequired,
  
  //Optional click handler
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

*/
