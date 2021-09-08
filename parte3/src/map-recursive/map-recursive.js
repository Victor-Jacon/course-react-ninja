/*
Como usar um counter em uma função recursiva, se não temos um index?
A gente precisa que ela seja uma função closure. A gente não pode definir um counter fora da função, se não, se acontecer da gente chamar essa função em 2 lugares diferentes ao mesmo tempo, ela vai bugar toda.
Outra vantagem é que as closures podem ser async , enquanto o for normal é síncrono.
*/

const map = (arr = [], func = (item) => item) => {
  
  // map parte 2 - coloquei parentesis na function para transformar ela em uma expressão.
    return (function mapInternal (arrayInternal, counter) {
      const [head, ...tail] = arrayInternal
      
      return arrayInternal.length === 0 ? [] : [
        func(head, counter, arr),
        ...mapInternal(tail, counter + 1)
      ]
      // map parte 2 -esse (arr) é como se fosse function(arr); Ele está chamando a função, com o parâmetro arr. as IIFEs são funções do js que são declaradas e executadas na mesma hora, e esta é  a parte da sintaxe responsável por isso.
    })(arr, 0)
}

export default map