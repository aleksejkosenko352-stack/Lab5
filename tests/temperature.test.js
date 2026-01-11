const isNormalTemperature = require('../src/temperature');

test('temperature range check', () => {
  expect(isNormalTemperature(36.6)).toBe(true);
  expect(isNormalTemperature(37.5)).toBe(true);
  expect(isNormalTemperature(35.9)).toBe(false);
  expect(isNormalTemperature(38)).toBe(false);
});