const { addCurrencies } = require('../src/currency');

test('currency integration test', () => {
  expect(addCurrencies('$20', '$30')).toBe('$50.00');
  expect(addCurrencies('$10.50', '$4.50')).toBe('$15.00');
});