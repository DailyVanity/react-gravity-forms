import { checkConditionalLogic } from '../../../src/Helpers/form';
import fields from './__mocks__/fields.json';

// checkConditionalLogic() returns true if it needs to hide the field

describe('test if confitional statements work', () => {
  describe('hide this field if all fields match', () => {
    // here we have matched the requirements to hide the field
    test('hide if all the fields logic should work if all required fields are enabled', () => {
      const conditions = {
        debugger: true,
        actionType: 'hide',
        logicType: 'all',
        rules: [
          { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };

      // check all the checkboxed needed to hide the field with conditional logic
      fields[5].value = [
        'ongezoute boter(0 euro)',
        'gezoute boter( 0 euro)',
        'half vollemelk( 0 euro)'
      ];

      const check = checkConditionalLogic(conditions, fields);

      expect(check).toBe(true);
    });

    // here we dont match all the requirements to hide the field
    test('hide field if all all requirements are matched ', () => {
      const conditions = {
        actionType: 'hide',
        logicType: 'all',
        rules: [
          { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };

      fields[5].value = [
        'ongezoute boter(0 euro)',
        'gezoute boter( 0 euro)',
      ];

      const check = checkConditionalLogic(conditions, fields);

      expect(check).toBe(false);
    });
  });

   describe('test if "any" fields are matched', () => {
    test('hide if one any of the fields is matched', () => {
      const conditions = {
          actionType: 'hide',
          logicType: 'any',
          rules: [
            { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
            { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
            { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
          ],
        };

        fields[5].value = [
          'ongezoute boter(0 euro)',
        ];
      const check = checkConditionalLogic(conditions,fields)

      expect(check).toBe(true);
    });

    test('hide field if not all fields are matched ', () => {
      const conditions = {
        actionType: 'hide',
        logicType: 'all',
        rules: [
          { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };

      fields[5].value = [
        'ongezoute boter(0 euro)',
        'gezoute boter( 0 euro)',
        // 'half vollemelk( 0 euro)',
      ];

      const check = checkConditionalLogic(conditions,fields)

      expect(check).toBe(false);
    });
   });
});
