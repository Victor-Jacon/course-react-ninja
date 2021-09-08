const isAnagram = require('./anagram');

// Testa o tipo + existência
test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
})

test('cinema is an anagram of iceman', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

// Adicionamos ## pra sujar nosso anagram, pra ver se ele tá limpando estes caracteres não aceitos
test('Dormitory is an anagram of dirty room##', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy()
})

// Testar para ver se não é um anagram
test('Hello is not an anagram of aloha', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy()
})