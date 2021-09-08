/* função recursiva: Ela é parecida com a lógica do "telômero"
1-ela precisa chamar a ela mesma novamente, pra criar o loop.
2-Precisa ter uma estratégia para parar esta função. No nosso caso, a gente vai reduzir o tamanho do array, até que zere, e isso vai interromper a execução.
Lógica: Soma o primeiro com o último, e remove um. É similar a um for.
Isso é padrão pra criar recursão.
*/

// 1º EXEMPLO DE RECURSÃO
const sum = (arr) => {
  if (arr.length === 0) return 0

  return arr[0] + sum(arr.slice(1))
}

console.log(sum([1,2,3,6]))

// 2º EXEMPLO DE RECURSÃO (USANDO ECMA 6)
const sum = (arr) => {
  if (arr.length === 0) return 0

  const [head, ...tail] = arr
  return head + sum(tail)
}