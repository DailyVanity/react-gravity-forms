function checkConditionalLogic(condition, fields = false) {
  const { rules, actionType, logicType } = condition;
  if (!rules) return true;

  const hideBasedOnRules = [];

  rules.forEach(({ fieldId, value, operator }, i) => {
    // the field the user sees on the frontend
    const fieldValue = fields[fieldId].value;

    if (fieldValue instanceof Array) {
      let matchCount = 0;
      fieldValue.length > 0 &&
        fieldValue.forEach((subField) => {
          if (parseOperator(operator, value, subField)) {
            matchCount++;
          }
        });

      // check if all the values match the rule value.
      hideBasedOnRules[i] =
        operator == 'isnot' ? matchCount == value.length : matchCount > 0;
    } else {
      // check if the matchValue and Field value match
      hideBasedOnRules[i] = parseOperator(operator, value, fieldValue);
    }
  });

  let hideField = parseLogicType(logicType, hideBasedOnRules);

  // because we were assuming hide if .... we want to inverse that
  if (actionType === 'show') {
    hideField = !hideField;
  }

  return hideField;
}

/**
 * these rules parse the conditional logic object from gravityforms
 * implements: https://docs.gravityforms.com/conditional-logic-object/
 * based on: https://bitbucket.org/gohike/gravityforms-mirror/src/47ddc8c2343d090f25d2c03892120d095be06245/js/conditional_logic.js?at=master#conditional_logic.js-301
 * @param {string} operator
 * @param {bool} hideBasedOnRules does the field match
 * @param {string} ruleValue the value of the field of the conditional logic
 * @param {string,int,float} fieldValue the value of what the user entered in the field
 * @returns {bool}
 */
function parseOperator(operator, ruleValue, fieldValue) {

  // we dont do anything with hide or show. we do that later
  switch (operator) {
    // is: Evaluates this rule to true when the value of the field specified by fieldId is equal to value.
    case 'is':
      return ruleValue === fieldValue;

    // isnot: Evaluates this rule to true when the value of the field specified by fieldId is not equal to value.
    case 'isnot':
      return ruleValue != fieldValue;

    // <: Evaluates this rule to true when the value of the field specified by fieldId is less than value.
    case '<':
      return ruleValue < fieldValue;

    // >: Evaluates this rule to true when the value of the field specified by fieldId is greather than value.
    case '>':
      return ruleValue > fieldValue;

    // contains: Evaluates this rule to true when the value of the field specified by fieldId contains value.
    case 'contains':
      return ruleValue.indexOf(fieldValue) >= 0; 

    // starts_with: Evaluates this rule to true when the value of the field specified by fieldId starts with value.
    case 'starts_with':
      return ruleValue.indexOf(fieldValue) == 0;

    // ends_with: Evaluates this rule to true when the value of the field specified by fieldId ends with value.
    case 'ends_with':
      const start = ruleValue.length - fieldValue.length;
      if(start < 0){
        return false;
      }
      const tail = ruleValue.substring(start);
      return fieldValue == tail;

    default:
      /* eslint-disable no-console */
      console.error(`ERROR: ${operator} is not known. showing field anyway`);
      return false;
  }
}

/**
 * parse the logic type for matched fields
 * @param {string} logicType GF logic type this could be any or all
 * @param {array}} hideBasedOnRules
 * @returns
 */
function parseLogicType(logicType, hideBasedOnRules) {
  if (logicType === 'any') {
    return hideBasedOnRules.includes(true);
  }
  if (logicType === 'all') {
    return hideBasedOnRules.every((i) => i === true);
  }
}

export { parseLogicType, checkConditionalLogic, parseOperator };
