const multiply = require('../src/math_product');

test('multiplication works correctly', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-4, 5)).toBe(-22); // <- помилка навмисно
  expect(multiply(0, 10)).toBe(0);
});