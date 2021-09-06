/*
// [JEST 1] Os parâmetros são: (nome do teste, função)
// test e it é a mesma coisa. Vamos usar it porque é a mesma keyword de outras libs de teste.
it('Testando jest', () => {

})

// [JEST 2] cria um escopo para nossos testes. podemos testar o módulo de forma separada.
// [JEST 2] Parâmetros (escopo, o que vc quer testar)
describe('# ESCOPO', () => {
  it('testando jest', () => {})
  it('testando jest 2', () => {})
})

describe('# ESCOPO2', () => {
  it('testando jest', () => {})
  it('testando jest 2', () => {})
})

// [JEST 3] parâmetros do console.assert(teste, 'resultado')
// Quando rodamos este mesmo teste no node, se passar, ele não dá nenhuma mensagem. Só mostra msg se der erro. 
console.assert(1 === 2, '1 não é igual a 2')

//[JEST 4]
// Quando rodamos o teste no yarn test. ele mostra msg de sucesso ou falha.
it ('1 = 1', () => {
  console.assert(1 === 2, '1 não é igual a 2')
})

// [JEST 5] expect(1) espero que 1 , toBe(1) seja igual a 1.
// O expect vem do jasmine. Ele é BDD então fica mais humanamente legível.
it('um é igual a 1', () => {
  expect(1).toBe(1)
})

*/