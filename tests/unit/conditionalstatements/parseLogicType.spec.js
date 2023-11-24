import { parseLogicType } from '../../../src/Helpers/form/checkConditionalLogic';

describe('parseLogicType', () => {
  it('any logictype should work', () => {
    // if there are 2 fields not matched
    expect(parseLogicType('any', [false, false])).toBe(false);

    // if there is 1 of the 2 fields matched
    expect(parseLogicType('any', [true, false])).toBe(true);
  });

  it('all logictype should work', () => {
    // 1 field is matched of the 2 required
    expect(parseLogicType('all', [true, false])).toBe(false);

    // all the required fields are matched
    expect(parseLogicType('all', [true, true])).toBe(true);
  });
});
