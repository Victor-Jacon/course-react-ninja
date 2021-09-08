/*
Como usar um counter em uma função recursiva, se não temos um index?
A gente precisa que ela seja uma função closure. A gente não pode definir um counter fora da função, se não, se acontecer da gente chamar essa função em 2 lugares diferentes ao mesmo tempo, ela vai bugar toda.
*/

const map = (arr = [], func = (item) => item) => {
    let counter = 0
    const mapInternal = (arrayInternal) => {
      if (arrayInternal.length === 0) {
        return []
      }

      console.log(counter)
      const [head, ...tail] = arrayInternal
      return [func(head, counter++, arr)].concat(mapInternal(tail, func))
    }
    return mapInternal(arr)
}

export default map