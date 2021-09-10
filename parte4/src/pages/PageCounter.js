import React from 'react'
import Counter from '../components/Counter'

const PageCounter = () => {
  return (
    <div>
      <h1>Todos com counters com o mesmo estado do redux (COMPARTILHADO) </h1>
      {/* [ESTADO COMPARTILHADO 1]
      O redux passo o estado a nível de componente (neste caso)
      Neste exemplo abaixo em qualquer botão que a gente apertar, o estado será alterado.
      Isso é porque todos os componentes counter abaixo COMPARTILHAM O MESMO ESTADO.
      O objeto counter vem lá da store da redux. Este mesmo objeto é utilizado por todas as instâncias do componente counter.
      Ao clicar em + e - , o dispatch é enviado para nossa store, atualizando o valor do objeto counter.
      Este objeto counter então VOLTA para o nosso contador através do useSelector, e o VALOR DE TODOS OS COUNTERS SÃO ATUALIZADOS AO MESMO TEMPO. (porque todos buscam o valor do mesmo lugar)
      */}
      {[0,1,2,3].map((counter) => ( <Counter /> ))}
    </div>
  )
}

export default PageCounter
