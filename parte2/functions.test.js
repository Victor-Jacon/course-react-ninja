const functions = require('./functions')

// Expect = qual teste será feito
// .toBe = qual resultado o final que precisa dar, pro resultado ser true
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4)
});

// [JEST] Teste que espera um valor false.

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).not.toBe(5)
});

/* [JEST] Outros testes úteis
Útil: Quando a gente quer evitar que retorne undefined, null e outros.

toBeNull - matches only null
toBeUndefined - only undefined
toBeDefined - opposite of toBeUndefined
toBeTruthy - matches anything that an if statement treats as true
toBeFalsy - "" if statement treats as false
*/

test('should be null', () => {
  expect(functions.isNull()).toBeNull();
})

// null is a falsy value so it's gonna pass
test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
})

// Tb permite inverter o valor. Que é igual ao toBeTruthy.
test('should be truthy', () => {
  expect(functions.checkValue(null)).not.toBeTruthy();
})

/* [JEST] Para testar arrays e objetos você não pode usar o toBe. VocÊ deve usar toEqual
Isso acontece por conta da arquitetura das coisas. As arrays e objetos por mais que tenham o mesmo valor estarão armazenadas em lugares diferentes da memória, e isso faz com que eles tenham o mesmo valor, porém, a referência é diferente, então eles não são a mesma coisa.*/
test('User should be Brad traversy object', () => {
  expect(functions.createUser()).toEqual({ 
    firstName: 'Brad', 
    lastName: 'Traversy' 
  });
})

/* [JEST] Less than and greater than */
test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
})