const chunkArray = require('./chunk');

// função existe?
test('chunk array exists?', () => {
  expect(chunkArray).toBeDefined();
})

// funcão que transforma uma array de 10, em 5 arrays de 2, dentro de outra array.
test('chunk an array of 10 values with a length of 2', () => {
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  const len = 2;
  const chunkedArr = chunkArray(numbers, len);
  
  expect(chunkedArr).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);
})

// funcão que transforma uma array de 10, em 5 arrays de 2, dentro de outra array.
test('chunk an array of 10 values with a length of 2', () => {
  const numbers = [1,2,3];
  const len = 1;
  const chunkedArr = chunkArray(numbers, len);
  
  expect(chunkedArr).toEqual([[1],[2],[3]]);
})