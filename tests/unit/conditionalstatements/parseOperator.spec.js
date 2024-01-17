import { parseOperator } from '../../../src/Helpers/form/checkConditionalLogic';

describe('test parseOperator', () => {
  describe('"is" operator works', () => {
    test('bool', () => {
      // it should not modify the value for single value fields
      expect(parseOperator('is', true, true)).toBe(true);
      expect(parseOperator('is', true, false)).toBe(false);
    });
    test('string', () => {
      // it should not modify the value
      expect(parseOperator('is', 'foo', 'foo')).toBe(true);
      expect(parseOperator('is', 'bar', 'foo')).toBe(false);
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
      // it should not modify the value for single value fields
      expect(parseOperator('isnot', true, true)).toBe(false);
      expect(parseOperator('isnot', true, false)).toBe(true);
    });
    test('string', () => {
      // it should not modify the value
      expect(parseOperator('isnot', 'foo', 'foo')).toBe(false);
      expect(parseOperator('isnot', 'bar', 'foo')).toBe(true);
    });

    test('float', () => {
      // it should not modify the value
      expect(parseOperator('isnot', 69.42, 69.42)).toBe(false);
      expect(parseOperator('isnot', 69.42, 1.1)).toBe(true);
    });

    test('interger', () => {
      // it should not modify the value
      expect(parseOperator('isnot', 1, 1)).toBe(false);
      expect(parseOperator('isnot', 1, 2)).toBe(true);
    });
  });

  describe('"<" operator works', () => {
    test('float', () => {
      // 69.42 smaller than 1 so it should be false
      expect(parseOperator('<', 69.42, 1.0)).toBe(false);

      // 1.0 is smaller than 69.2 so it should be true
      expect(parseOperator('<', 1.0, 69.2)).toBe(true);
    });

    test('interger', () => {
      // 10 is smaller than 2 so it should be true
      expect(parseOperator('<', 10, 2)).toBe(false);

      // 1 is smaller than 4 so it should be true
      expect(parseOperator('<', 1, 4)).toBe(true);
    });
  });


  describe('"<" operator works', () => {
    test('float', () => {
      // 69.42 is bigger than 1.0 so it should be true
      expect(parseOperator('>', 69.42, 1.0)).toBe(true);
      expect(parseOperator('>', 1.0, 69.2)).toBe(false);
    });

    test('interger', () => {
      // 10 is bigger than 2 so it should be true
      expect(parseOperator('>', 10, 2)).toBe(true);
      expect(parseOperator('>', 1, 4)).toBe(false);
    });
  });

  describe('"contains" operator works', () => {
    test('string', () => {
      // it should not modify the value
      expect(parseOperator('contains', 'XXXXXXXfooXXXX', 'foo')).toBe(true);
      expect(parseOperator('contains', 'XXXXXX', 'foo')).toBe(false);
    });
  });

  describe('"starts_with" operator works', () => {
    test('string', () => {
      // it should not modify the value
      expect(parseOperator('starts_with', 'fooXXXXXXXXXXX', 'foo')).toBe(true);
      expect(parseOperator('starts_with', 'XXXfooXXX', 'foo')).toBe(false);
      expect(parseOperator('starts_with', 'XXXXXXfoo', 'foo')).toBe(false);
      expect(parseOperator('starts_with', 'XXXXXXXXX', 'foo')).toBe(false);
    });
  });

  describe('"ends_with" operator works', () => {
    test('string', () => {
      // it should not modify the value
      expect(parseOperator('ends_with', 'XXXXXXXfoo', 'foo')).toBe(true);
      expect(parseOperator('ends_with', 'XXXfooXXX', 'foo')).toBe(false);
      expect(parseOperator('ends_with', 'fooXXXXXX', 'foo')).toBe(false);
      expect(parseOperator('ends_with', 'XXXXXXXXX', 'foo')).toBe(false);
    });
  });
});
