import { describe, expect, test } from 'vitest'
import { multiply } from './math.helper';

test('should multiply two positives numbers', () => {

  const a = 1;
  const b = 2;

  const result = multiply(a, b);

  expect(result).toBe(a * b);
});

describe('multiply', () => {

  test('should multiply two positives numbers', () => {

    const a = 1;
    const b = 2;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

  test('should multiply two positives numbers', () => {

    const a = 1;
    const b = 29;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });

});