//Exemplos de teste [apenas para entender o conceito]

const Sum = require('./Sum')

console.log(Sum(1,2) === 3) // true
console.log(Sum(1,1) === 5) // false


//Exemplos com TDD

const SumTDD = require('./SumTDD')

// 1º parâmetro: teste que vc vai fazer 2º parâmetro: que mensagem vai dar se o teste quebrar.
console.assert(false, 'Mensagem')

// Teste 2 - ps: imagino que com typescript eu não escreveria testes para tipos
console.assert(typeof sum === 'function', 'sum deve ser uma função')

// A ideia é fazer a implementação mais simples possível para o teste passar. Assim vc economiza tempo escrevendo testes e atinge o mesmo objetivo.