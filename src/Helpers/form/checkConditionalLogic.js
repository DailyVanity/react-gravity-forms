export default (condition, fields = false) => {
  const { rules, actionType,logicType } = condition;
  if (!rules) return true;

  const formValues = fields || formValues;

  // show only if is selected "All fields" (it should be tweaked in future)
  // works only "show/hide when field is equal to"
  let hideField = actionType;
  // let hideField = actionType !== 'hide';
  const hideBasedOnRules = [];
  for (let i = 0; i < rules.length; i++) {
    const { fieldId, value, operator } = rules[i];
    const conditionFieldValue = formValues[fieldId].value && formValues[fieldId].value.value
      ? formValues[fieldId].value.value
      : formValues[fieldId].value || false;

    const stringValue = Array.isArray(conditionFieldValue)
      ? conditionFieldValue.join('')
      : conditionFieldValue;

    // Check if comparision value is empty
    if (!value) {
      if (!stringValue && !value) {
        hideBasedOnRules[i] = actionType === 'hide';
      } else {
        hideBasedOnRules[i] = actionType !== 'hide';
      }
    } else if (stringValue && value === stringValue) {
      hideBasedOnRules[i] = actionType === 'hide';
    } else if (stringValue && stringValue.includes(value)) {
      hideBasedOnRules[i] = actionType === 'hide';
    } else {
      hideBasedOnRules[i] = actionType !== 'hide';
    }

    // TODO implement more operators
    // If operator is 'isnot' reverse value. or if the fields need to be 
    if (operator === 'isnot') {
      hideBasedOnRules[i] = !hideBasedOnRules[i];
    }
  }

  // here we assume the input is hide if ... we will reverse that later
  // check of any of the fields match
  if(logicType === "any"){
    hideField = hideBasedOnRules.includes(true);
  }

  hideField = hideBasedOnRules.every(i => i === true);

  // because we were assuming hide if .... we want to inverse that
  if(actionType === "show"){
    hideField = !hideField
  }

  return hideField;
};
