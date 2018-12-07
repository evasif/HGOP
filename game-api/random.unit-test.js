const randomConstructor = require('./random.js');

test('randomInt function returns a number less or equal than max and greater or equal than min', () => {
  const {randomInt} = randomConstructor();
  const min = 1;
  const max = 10;
  expect(randomInt(min, max)).toBeGreaterThanOrEqual(min);
  expect(randomInt(min, max)).toBeLessThan(max);
});

test('randomInt function returns 0 if min and max are 0', () => {
  const {randomInt} = randomConstructor();
  const min = 0;
  const max = 0;
  expect(randomInt(min, max)).toEqual(0);
});

test('randomInt function with min 0 and max 1 should return 0', () => {
  const {randomInt} = randomConstructor();
  const min = 0;
  const max = 1;
  expect(randomInt(min, max)).toEqual(0);
});
