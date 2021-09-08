const map = require('./map')

// Tipo + existência
// Parâmetros
// Resultado esperado para uma iteração de 3

test('map should be a function', () => {
    expect(typeof map).toEqual('function');
})

// tipo e a existência
test('map should be defined', () => {
    expect(map).toBeDefined();
})

// Array com 2 registros estáticos
test('map([1,2], (item) => item) should return [1,2]', () => {
    expect(
        map([1,2], (item) => item))
        .toEqual([1,2])
})

// Array com 2 registros dinâmicos
test('map([3,4], (item) => item) should return [3,4]', () => {
    expect(
        map([3,4], (item) => item))
        .toEqual([3,4])
})

// 
test('map([1,2], (item) => item + 1) should return [2,3]', () => {
    expect(
        map([1,2], (item) => item + 1))
    .toEqual([2,3])
})

// 
test('map([4,6], (item) => item + 1) should return [5,7]', () => {
    expect(
        map([4,6], (item) => item + 1))
    .toEqual([5,7])
})

// 
test('map([1,2], (item, index) => index) should return [0,1]', () => {
    expect(
        map([1,2], (item, index) => index))
    .toEqual([0,1])
})

// 
test('map([1,2], (item, index, array) => array) should return [[1,2], [1,2]]', () => {
    expect(
        map([1,2], (item, index, array) => array))
    .toEqual([[1,2],[1,2]])
})

// Parâmetro
test('map should throw an error with message "Function must be passed"', () => {
    expect(map).toThrow(TypeError, /Function should be passed/)
})

// Parâmetro
test('map should throw an error with message "arr is not an array"', () => {
    expect(map).toThrow(TypeError, /arr is not an array/)
})