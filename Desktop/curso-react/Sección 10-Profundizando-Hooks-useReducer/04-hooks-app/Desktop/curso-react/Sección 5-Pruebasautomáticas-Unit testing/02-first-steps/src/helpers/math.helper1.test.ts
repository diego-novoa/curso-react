import { describe, expect, test } from 'vitest'
import { subtract } from './math.helper';

test('should subtract two negative numbers', () => {
  const a = 1;
  const b = 2;

  const result = subtract(a, b);

  expect(result).toBe(a - b);
});

describe('subtract', () => {

  test('should subtract two negative numbers', () => {
    const a = 1;
    const b = 2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test('should subtract two negative numbers', () => {
    const a = -5;
    const b = -2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});