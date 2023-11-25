import { checkConditionalLogic } from '../../../src/Helpers/form';
import fields from './__mocks__/fields.json';

// checkConditionalLogic() returns true if it needs to hide the field

describe('test if confitional statements work', () => {
  describe('show field is all match', () => {
    // here we have matched the requirements to show the field
    test('all is matched', () => {
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
    test('not all is matched ', () => {
      const conditions = {
        actionType: 'show',
        logicType: 'all',
        rules: [
          { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };

      fields[5].value = ['ongezoute boter(0 euro)', 'gezoute boter( 0 euro)'];

      const check = checkConditionalLogic(conditions, fields);

      expect(check).toBe(true);
    });
  });

  describe('show if any field is matched', () => {
    test('if 1 field is matched', () => {
      const conditions = {
        actionType: 'show',
        logicType: 'any',
        rules: [
          { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };

      fields[5].value = ['ongezoute boter(0 euro)'];
      const check = checkConditionalLogic(conditions, fields);

      expect(check).toBe(false);
    });

    test('show if all of the any fields are matched ', () => {
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

      const check = checkConditionalLogic(conditions, fields);

      expect(check).toBe(false);
    });

    test('hide if none of the any fields are matched ', () => {
      const conditions = {
        actionType: 'show',
        logicType: 'any',
        rules: [
          { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
          { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
          { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
        ],
      };

      fields[5].value = [];

      const check = checkConditionalLogic(conditions, fields);

      expect(check).toBe(true);
    });
  });
});
