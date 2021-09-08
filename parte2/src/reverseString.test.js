const reverseString = require('./reverseString');

// Testar se a função existe.
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
})

// Testar se o resultado da função sai como o esperado.
test('string reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

// Testar se o resultado da função sai como o esperado QUANDO USAMOS LETRA MAIUSCULA
test('string reverses', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});