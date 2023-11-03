import { checkConditionalLogic } from "../../../src/Helpers/form";
import fields from "./__mocks__/fields.json"

describe('test if confitional statements work', () => {

  describe('"show this field if all fields match" should work', () => { 
    
    // here we have matched the requirements to show the field
    test('show if all the fields logic should work if all required fields are enabled', () => {
      const conditions = {
        actionType: 'show',
        logicType: 'all',
        rules: [
          { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };
    
      const check = checkConditionalLogic(conditions,fields)
  
      expect(check).toBe(false);
    });

    // here we dont match all the requirements to show the field
    test('show if all the fields logic should return false if not all fields are matched ', () => {
      const conditions = {
        actionType: 'show',
        logicType: 'all',
        rules: [
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };
    
      const check = checkConditionalLogic(conditions,fields)
  
      expect(check).toBe(true);
    });
   })

   describe('"show this field if any" match should work', () => { 
    test('show if all the fields logic should work if', () => {
      const conditions = {
        actionType: 'show',
        logicType: 'any',
        rules: [
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };
    
      const check = checkConditionalLogic(conditions,fields)
  
      expect(check).toBe(false);
    });

    test('show if all the fields logic should return false if not all fields are matched ', () => {
      const conditions = {
        actionType: 'show',
        logicType: 'any',
        rules: [
        ],
      };
    
      const check = checkConditionalLogic(conditions,fields)
  
      expect(check).toBe(false);
    });
   })
});
