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
test('should be less than 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
})

/* [JEST] Less than and greater than */
test('should be greater than 1400', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeGreaterThan(1400);
})

/* [JEST] Less than and greater than */
test('should be less than or equal 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
})

/* [JEST] REGEX - VAI PASSAR */
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

// ARRAYS
test('admin should be in username', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
})

// WORKING WITH ASYNC DATA - Usando promises
// .assertions é usado para testar dados async, precisa também dar um return
// Se não usarmos .assertions + return, vai sempre passar o teste.
test('user fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  });
})

// ASYNC DATA - USANDO ASYNC AWAIT
test('user fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham');
})