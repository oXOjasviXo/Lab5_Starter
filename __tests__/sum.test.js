// sum.test.js
import { sum } from '../code-to-unit-test/sum';
test('adds 1 + 3 to equal 4', () => {
  expect(1 + 3).toBe(4);
});

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1,3)).toBe(4);
});