import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCounter, removeCounter } from '../store/modules/shop/actions';
import CounterMultiplo from '../components/CounterMultiplo';
import '../../src/index.css'


const PageCounterMultiplo = () => {

  // ADD-C
  const dispatch = useDispatch()
  const [input, setInput] = useState('');
  const newCounter = {
    id: '',
    name: input,
    value: 0
  }

  // Multiplo 5
  const { counterMultiplo } = useSelector((state) => state.shop);

  return (
    <div>
      <h1>Cada Counter com um Estado do Redux (SEPARADO) </h1>
      {/* Multiplo 6 */}
      {counterMultiplo.map((counterM, index) => ( 
        <CounterMultiplo key={index} counterM={counterM}/>
      ))}
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      </div>
      <div>
        <button onClick={() => dispatch(addCounter(newCounter))}>Adicionar Counter</button>
      </div>
    </div>
  )
}

export default PageCounterMultiplo
