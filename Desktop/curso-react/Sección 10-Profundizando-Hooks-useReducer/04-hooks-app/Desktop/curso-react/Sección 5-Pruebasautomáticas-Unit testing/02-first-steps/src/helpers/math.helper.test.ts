import { describe, expect, test } from 'vitest'
import { add } from './math.helper';


test('should add two positives numbers', () => {
  // ! 1. arrange
  const a = 1;
  const b = 2;
  // ! 2. Act
  const result = add(a, b);
  // ! 3. Assert
  expect(result).toBe(a + b);
});

// Agrupar pruebas similares

describe('add', () => {

  test('should add two positives numbers', () => {
    // ! 1. arrange
    const a = 1;
    const b = 2;
    // ! 2. Act
    const result = add(a, b);
    // ! 3. Assert
    expect(result).toBe(a + b);
  });

  test('should add two positives numbers', () => {
    // ! 1. arrange
    const a = 1;
    const b = 2;
    // ! 2. Act
    const result = add(a, b);
    // ! 3. Assert
    expect(result).toBe(a + b);
  });



});