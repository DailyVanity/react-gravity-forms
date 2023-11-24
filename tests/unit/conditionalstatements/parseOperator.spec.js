import { parseOperator } from '../../../src/Helpers/form/checkConditionalLogic';

describe('test parseOperator', () => {
  describe('"is" operator works', () => {
    test('bool', () => {
      // it should not modify the value for single value fields
      expect(parseOperator('is', true, true)).toBe(true);
      expect(parseOperator('is', true, false)).toBe(false);

      // for multivalue fields
      expect(parseOperator('is', true, [true,true])).toBe(true);
      expect(parseOperator('is', true, [false,false])).toBe(false);
    });
    test('string', () => {
      // it should not modify the value
      expect(parseOperator('is', 'foo', 'foo')).toBe(true);
      expect(parseOperator('is', 'bar', 'foo')).toBe(false);

       // for multivalue fields
       expect(parseOperator('is', 'bar', ['bar','foo'])).toBe(true);
       expect(parseOperator('is', 'bar', ['foo','foo'])).toBe(false);
    });

    test('float', () => {
      // it should not modify the value
      expect(parseOperator('is', 69.42, 69.42)).toBe(true);
      expect(parseOperator('is', 69.42, 1.1)).toBe(false);

       // for multivalue fields
       expect(parseOperator('is', 69.42, [69.42,69.42])).toBe(true);
       expect(parseOperator('is', 69.42, [1.0,1.0])).toBe(false);
    });

    test('interger', () => {
      // it should not modify the value
      expect(parseOperator('is', 1, 1)).toBe(true);
      expect(parseOperator('is', 1, 2)).toBe(false);

       // for multivalue fields
       expect(parseOperator('is', 1, [1,2])).toBe(true);
       expect(parseOperator('is', 1, [3,3])).toBe(false);
    });
  });

  describe('"isnot" operator works', () => {
    test('bool', () => {
      // it should not modify the value for single value fields
      expect(parseOperator('isnot', true, true)).toBe(false);
      expect(parseOperator('isnot', true, false)).toBe(true);

      // for multivalue fields
      expect(parseOperator('isnot', true, [true,true])).toBe(false);
      expect(parseOperator('isnot', true, [false,false])).toBe(true);
    });
    test('string', () => {
      // it should not modify the value
      expect(parseOperator('isnot', 'foo', 'foo')).toBe(false);
      expect(parseOperator('isnot', 'bar', 'foo')).toBe(true);

       // for multivalue fields
       expect(parseOperator('isnot', 'bar', ['bar','foo'])).toBe(false);
       expect(parseOperator('isnot', 'bar', ['foo','foo'])).toBe(true);
    });

    test('float', () => {
      // it should not modify the value
      expect(parseOperator('isnot', 69.42, 69.42)).toBe(false);
      expect(parseOperator('isnot', 69.42, 1.1)).toBe(true);

       // for multivalue fields
       expect(parseOperator('isnot', 69.42, [69.42,69.42])).toBe(false);
       expect(parseOperator('isnot', 69.42, [1.0,1.0])).toBe(true);
    });

    test('interger', () => {
      // it should not modify the value
      expect(parseOperator('isnot', 1, [1,2])).toBe(false);
      expect(parseOperator('isnot', 1, [2,3])).toBe(true);

       // for multivalue fields
       expect(parseOperator('isnot', 1, [1,2])).toBe(false);
       expect(parseOperator('isnot', 1, [3,3])).toBe(true);
    });
  });

});
