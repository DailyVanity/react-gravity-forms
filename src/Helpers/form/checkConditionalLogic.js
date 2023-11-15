/* eslint-disable import/no-anonymous-default-export */
function checkConditionalLogic(condition, fields = false) {
  const { rules, actionType, logicType } = condition;
  if (!rules) return true;
  const formValues = fields || formValues;

  // show only if is selected "All fields" (it should be tweaked in future)
  let hideField = actionType;
  const hideBasedOnRules = [];

  for (let i = 0; i < rules.length; i++) {
    const { fieldId, value, operator } = rules[i];
    const conditionFieldValue =
      formValues[fieldId].value && formValues[fieldId].value.value
        ? formValues[fieldId].value.value
        : formValues[fieldId].value || false;

    const stringValue = Array.isArray(conditionFieldValue)
      ? conditionFieldValue.join('')
      : conditionFieldValue;

    // Check if comparision value is empty
    // if (!value) {
    //   if (!stringValue && !value) {
    //     hideBasedOnRules[i] = actionType === 'hide';
    //   } else {
    //     hideBasedOnRules[i] = actionType !== 'hide';
    //   }
    // } else if (stringValue && value === stringValue) {
    //   hideBasedOnRules[i] = actionType === 'hide';
    // } else if (stringValue && stringValue.includes(value)) {
    //   hideBasedOnRules[i] = actionType === 'hide';
    // } else {
    //   hideBasedOnRules[i] = actionType !== 'hide';
    // }

    // if the value field of the rules is empty
    if (!value) {
      // if the field value or field rule value is empty hide the hide
      if (!stringValue && !value) {
        hideBasedOnRules[i] = true;
      } else {
        hideBasedOnRules[i] = false;
      }
    }

    // if field rule value equals to the fielf value
    if (stringValue === value) {
      hideBasedOnRules[i] = true;
    }

    // sometimes the field value is an array
    if (stringValue && stringValue.includes(value)) {
      hideBasedOnRules[i] = true;
    } else {
      hideBasedOnRules[i] = false;
    }

    hideBasedOnRules[i] = parseOperator(
      operator,
      hideBasedOnRules[i],
      value,
      stringValue
    );
  }

  // check of any of the fields match
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
 * @param {string} operator
 * @param {bool} hideBasedOnRules does the field match
 * @param {string} ruleValue the value of the field of the conditional logic
 * @param {string,int,float} fieldValue the value of what the user entered in the field
 * @returns {bool}
 */
function parseOperator(operator, hideBasedOnRules, ruleValue, fieldValue) {
  switch (operator) {
    // is: Evaluates this rule to true when the value of the field specified by fieldId is equal to value.
    case 'is':
      return hideBasedOnRules;

    // isnot: Evaluates this rule to true when the value of the field specified by fieldId is not equal to value.
    case 'isnot':
      return !hideBasedOnRules;

    // <: Evaluates this rule to true when the value of the field specified by fieldId is less than value.
    case '<':
      return !hideBasedOnRules;

    // >: Evaluates this rule to true when the value of the field specified by fieldId is greather than value.
    case '>':
      return !hideBasedOnRules;
    // contains: Evaluates this rule to true when the value of the field specified by fieldId contains value.
    case 'contains':
      return !hideBasedOnRules;

    // starts_with: Evaluates this rule to true when the value of the field specified by fieldId starts with value.
    case 'starts_with':
      return !hideBasedOnRules;

    // ends_with: Evaluates this rule to true when the value of the field specified by fieldId ends with value.
    case 'ends_with':
      return !hideBasedOnRules;

    default:
      /* eslint-disable no-console */
      console.error(`ERROR: ${operator} is not known. `);
  }
}

export { checkConditionalLogic, parseOperator };
