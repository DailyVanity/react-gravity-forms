function checkConditionalLogic(condition, fields = false) {
  const { rules, actionType, logicType } = condition;
  if (!rules) return true;
  const formValues = fields || formValues;

  const hideBasedOnRules = [];

  rules.forEach((rule, i) => {
    const { fieldId, value, operator } = rule;
    hideBasedOnRules[i] = parseOperator(operator, value, formValues[fieldId].value);
  });

  // check of any of the fields match
  let hideField;  
  if (logicType === 'any') {
    hideField = hideBasedOnRules.includes(false);
  }
  if (logicType === 'all') {
    hideField = hideBasedOnRules.every((i) => i === true);
  }

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
      if (fieldValue instanceof Array) {
        return fieldValue.includes(ruleValue);
      } else {
        return ruleValue === fieldValue;
      }

    // isnot: Evaluates this rule to true when the value of the field specified by fieldId is not equal to value.
    case 'isnot':
      if (fieldValue instanceof Array) {
        return !fieldValue.includes(ruleValue);
      } else {
        return ruleValue != fieldValue;
      }

    // <: Evaluates this rule to true when the value of the field specified by fieldId is less than value.
    case '<':
      throw new Error('not Implemented');

    // >: Evaluates this rule to true when the value of the field specified by fieldId is greather than value.
    case '>':
      throw new Error('not Implemented');
    // contains: Evaluates this rule to true when the value of the field specified by fieldId contains value.
    case 'contains':
      throw new Error('not Implemented');

    // starts_with: Evaluates this rule to true when the value of the field specified by fieldId starts with value.
    case 'starts_with':
      throw new Error('not Implemented');

    // ends_with: Evaluates this rule to true when the value of the field specified by fieldId ends with value.
    case 'ends_with':
      throw new Error('not Implemented');

    default:
      /* eslint-disable no-console */
      console.error(`ERROR: ${operator} is not known. showing field anyway`);
      return false;
  }
}

export { checkConditionalLogic, parseOperator };
