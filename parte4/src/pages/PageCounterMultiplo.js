import React from 'react'
import { useSelector, useStore } from 'react-redux';
import { setCounterIncrement, setCounterDecrement } from '../store/modules/shop/actions';
import CounterMultiplo from '../components/CounterMultiplo'


const PageCounterMultiplo = () => {

  /* [ESTADO COMPARTILHADO 3] ENVIANDO ESTADO REDUX DA PÁGINA PARA O COMPONENTE
  Podemos pegar o estado do redux a nivel de PAGINA/composição com o useSelector (como está abaixo)
  Passamos o objeto counter que veio do redux por props " counter={counter} "
  */
  const { counter } = useSelector((state) => state.shop);

  return (
    <div>
      {/* [ESTADO COMPARTILHADO 4] ENVIANDO ACTION DO REDUX DA PÁGINA PARA O COMPONENTE 
      Do mesmo jeito que enviamos o objeto counter do redux, podemos enviar as actions.
      actionDecrement foi o nome que escolhi pra props, e já configurei tb no componente COunterMultiplo pra ele estar preparado para receber.
      E o valor dessa props é a action do redux que eu importei " import { setCounterIncrement, setCounterDecrement } from '../store/modules/shop/actions';  "
      */}
      <h1>Cada Counter com um Estado do Redux (SEPARADO) </h1>
      {[0,1,2,3].map((c, index) => ( 
        <CounterMultiplo key={index} 
          counter={counter} 
          actionDecrement={setCounterDecrement} 
          actionIncrement={setCounterIncrement}
        />
      ))}
    </div>
  )
}

export default PageCounterMultiplo
