const isPasswordValid = require('../src/auth');

test('password validation', () => {
  expect(isPasswordValid('password1')).toBe(true);
  expect(isPasswordValid('password')).toBe(false);
  expect(isPasswordValid('12345678')).toBe(false);
  expect(isPasswordValid('pass1')).toBe(false);
});