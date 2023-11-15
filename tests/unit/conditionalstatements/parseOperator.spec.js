import { parseOperator } from '../../../src/Helpers/form/checkConditionalLogic';

describe('test parseOperator', () => {
  describe('"is" operator works', () => {
    test('bool', () => {
      // it should not modify the value
      expect(parseOperator('is', true, true)).toBe(true);
      expect(parseOperator('is', true, false)).toBe(false);
    });
    test('string', () => {
      // it should not modify the value
      expect(parseOperator('is', 'patat', 'patat')).toBe(true);
      expect(parseOperator('is', 'friet', 'patat')).toBe(false);
    });

    test('float', () => {
      // it should not modify the value
      expect(parseOperator('is', 69.42, 69.42)).toBe(true);
      expect(parseOperator('is', 69.42, 1.1)).toBe(false);
    });

    test('interger', () => {
      // it should not modify the value
      expect(parseOperator('is', 1, 1)).toBe(true);
      expect(parseOperator('is', 1, 2)).toBe(false);
    });
  });

  describe('"isnot" operator works', () => {
    test('bool', () => {
      // it should modify the value
      expect(parseOperator('isnot', true, true)).toBe(false);
      expect(parseOperator('isnot', true, false)).toBe(true);
    });
    test('string', () => {
      // it should modify the value
      expect(parseOperator('isnot', 'patat', 'patat')).toBe(false);
      expect(parseOperator('isnot', 'friet', 'patat')).toBe(true);
    });

    test('float', () => {
      // it should modify the value
      expect(parseOperator('isnot', 69.42, 69.42)).toBe(false);
      expect(parseOperator('isnot', 69.42, 1.1)).toBe(true);
    });

    test('interger', () => {
      // it should modify the value
      expect(parseOperator('isnot', 1, 1)).toBe(false);
      expect(parseOperator('isnot', 1, 2)).toBe(true);
    });
  });

});
