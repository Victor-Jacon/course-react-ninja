import React from 'react'
import { useDispatch } from 'react-redux';
import { setCounterMultiploIncrement, setCounterMultiploDecrement } from '../store/modules/shop/actions';


// Multiplo 7 - Recebe como props + popula os dados
const CounterMultiplo = ({ counterM }) => {
  
    const dispatch = useDispatch()
  
    return (
    <div>
      <h1>{counterM.value}</h1>
      <button onClick={() => dispatch(setCounterMultiploDecrement(counterM))}>-</button>
      <button onClick={() => dispatch(setCounterMultiploIncrement(counterM))}>+</button>
    </div>
  )
}

export default CounterMultiplo