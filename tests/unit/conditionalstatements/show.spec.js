import { checkConditionalLogic } from '../../../src/Helpers/form';
import fields from './__mocks__/fields.json';

// checkConditionalLogic() returns true if it needs to hide the field

describe('test if confitional statements work', () => {
  describe('show this field if all fields match', () => {
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

      // check all the checkboxed needed to show the field with conditional logic
      fields[5].value = [
        'ongezoute boter(0 euro)',
        'gezoute boter( 0 euro)',
        'half vollemelk( 0 euro)',
      ];

      const check = checkConditionalLogic(conditions, fields);

      expect(check).toBe(false);
    });

    // here we dont match all the requirements to show the field
    test('dont show field if not all requirements are matched ', () => {
      const conditions = {
        actionType: 'show',
        logicType: 'all',
        rules: [
          { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };

      fields[5].value = [
        'ongezoute boter(0 euro)',
        'gezoute boter( 0 euro)'
      ];

      const check = checkConditionalLogic(conditions, fields);

      expect(check).toBe(true);
    });
  });

   describe('test if "any" fields are matched', () => {
    test('show if one any of the fields is matched', () => {
      const conditions = {
          actionType: 'show',
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

      expect(check).toBe(false);
    });

    test('show if all the fields logic should return false if not all fields are matched ', () => {
      const conditions = {
        actionType: 'show',
        logicType: 'any',
        rules: [
          { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };

      fields[5].value = [
        // 'ongezoute boter(0 euro)',
        'gezoute boter( 0 euro)',
        'half vollemelk( 0 euro)',
      ];

      const check = checkConditionalLogic(conditions,fields)

      expect(check).toBe(false);
    });
   })
});
