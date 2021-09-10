import React from 'react'
import { useDispatch } from 'react-redux';


const CounterMultiplo = ({ counter, actionDecrement, actionIncrement }) => {
  
    const dispatch = useDispatch()
  
    return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(actionDecrement(counter))}>-</button>
      <button onClick={() => dispatch(actionIncrement(counter))}>+</button>
    </div>
  )
}

export default CounterMultiplo