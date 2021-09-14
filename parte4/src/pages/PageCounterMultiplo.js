import React from 'react'
import { useSelector } from 'react-redux';
import { setCounterMultiploIncrement, setCounterDecrement } from '../store/modules/shop/actions';
import CounterMultiplo from '../components/CounterMultiplo'


const PageCounterMultiplo = () => {

  // Multiplo 5
  const { counterMultiplo } = useSelector((state) => state.shop);

  return (
    <div>
      <h1>Cada Counter com um Estado do Redux (SEPARADO) </h1>
      {/* Multiplo 6 */}
      {counterMultiplo.map((counterM, index) => ( 
        <CounterMultiplo key={index} counterM={counterM}/>
      ))}
    </div>
  )
}

export default PageCounterMultiplo
