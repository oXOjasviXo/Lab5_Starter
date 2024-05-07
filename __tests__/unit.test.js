// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber - true cases', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true); // Correct format with dashes
  expect(isPhoneNumber('(123) 456-7890')).toBe(true); // Correct format with parentheses
});

test('isPhoneNumber - false cases', () => {
  expect(isPhoneNumber('123-45-6789')).toBe(false); // Wrong number of digits
  expect(isPhoneNumber('1234')).toBe(false); // Missing space after parentheses
});

test('isEmail - true cases', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('user2727name@domain.org')).toBe(true);
});

test('isEmail - false cases', () => {
  expect(isEmail('invalid-email')).toBe(false);
  expect(isEmail('missing@dotcom')).toBe(false);
});

test('isDate - true cases', () => {
  expect(isDate('12/31/2023')).toBe(true); // Valid date format with two-digit day and month
  expect(isDate('1/1/2023')).toBe(true); // Valid date format with single-digit day and month
});

test('isDate - false cases', () => {
  expect(isDate('12/31/23')).toBe(false); // Incorrect year format
  expect(isDate('2023/12/31')).toBe(false); // Incorrect format order
  //expect(isDate('12-31-2023')).toBe(false); // Wrong separator
  //expect(isDate('31/12/2023')).toBe(false); // Incorrect day and month order
});