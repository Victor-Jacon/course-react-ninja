import React from 'react'
import { useDispatch } from 'react-redux';
import { setCounterMultiploIncrement } from '../store/modules/shop/actions';


// Multiplo 7 - Recebe como props + popula os dados
const CounterMultiplo = ({ counter }) => {
  
    const dispatch = useDispatch()
  
    return (
    <div>
      <h1>{counter.value}</h1>
      <button onClick={() => alert('hi')}>-</button>
      <button onClick={() => console.log(dispatch(setCounterMultiploIncrement(counter)))}>+</button>
    </div>
  )
}

export default CounterMultiplo