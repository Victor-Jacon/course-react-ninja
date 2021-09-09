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

export default Counter
