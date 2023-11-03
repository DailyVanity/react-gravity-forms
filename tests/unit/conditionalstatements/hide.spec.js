// import { checkConditionalLogic } from "../../../src/Helpers/form";
// import fields from "./__mocks__/fields.json"

// describe('test if confitional statements work', () => {

//   describe('hide this field if all fields match', () => { 
    
//     // here we have matched the requirements to hide the field
//     test('hide if all the fields logic should work if all required fields are enabled', () => {
//       const conditions = {
//         actionType: 'hide',
//         logicType: 'all',
//         rules: [
//           { fieldId: '5', operator: 'is', value: 'ongezoute boter(0 euro)' },
//           { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
//           { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
//         ],
//       };
    
//       const check = checkConditionalLogic(conditions,fields)
  
//       expect(check).toBe(false);
//     });

//     // here we dont match all the requirements to hide the field
//     test('dont hide field if all all requirements are matched ', () => {
//       const conditions = {
//         actionType: 'hide',
//         logicType: 'all',
//         rules: [
//           { fieldId: '5', operator: 'is', value: 'gezoute boter( 0 euro)' },
//           { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
//         ],
//       };
    
//       const check = checkConditionalLogic(conditions,fields)
  
//       expect(check).toBe(true);
//     });
//    })

//    describe('test if "any" fields are matched', () => { 
//     test('hide if one any of the fields is matched', () => {
//       const conditions = {
//         actionType: 'hide',
//         logicType: 'any',
//         rules: [
//           { fieldId: '5', operator: 'is', value: 'half vollemelk( 0 euro)' },
//         ],
//       };
    
//       const check = checkConditionalLogic(conditions,fields)
  
//       expect(check).toBe(false);
//     });

//     test('hide if all the fields logic should return false if not all fields are matched ', () => {
//       const conditions = {
//         actionType: 'hide',
//         logicType: 'any',
//         rules: [
//         ],
//       };
    
//       const check = checkConditionalLogic(conditions,fields)
  
//       expect(check).toBe(false);
//     });
//    })
// });
