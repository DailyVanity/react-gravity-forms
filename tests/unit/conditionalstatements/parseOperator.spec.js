import { parseOperator } from "../../../src/Helpers/form/checkConditionalLogic";

describe('test parseOperator', () => {
    test('is operator works', () => { 
        // it should not modify the value 
        expect(parseOperator('is',true)).toBe(true);
        expect(parseOperator('is',false)).toBe(false);
     });
});
