import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCounterIncrement, setCounterDecrement } from '../store/modules/shop/actions';

const Counter = () => {

  const dispatch = useDispatch()
  const { counter } = useSelector((state) => state.shop);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(setCounterDecrement(counter))}>-</button>
      <button onClick={() => dispatch(setCounterIncrement(counter))}>+</button>
    </div>
  )
}

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

export default Counter