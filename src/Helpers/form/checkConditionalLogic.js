export default (condition, fields = false) => {
  const { rules, actionType,logicType } = condition;
  if (!rules) return true;

  const formValues = fields || formValues;
  // show only if is selected "All fields" (it should be tweaked in future)
  // works only "show/hide when field is equal to"
  let hideField = actionType !== 'hide';
  const hideBasedOnRules = [];
 
  // loop trough all the rules for a field
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

    // If operator is 'isnot' reverse value
    if (operator === 'isnot') {
      hideBasedOnRules[i] = !hideBasedOnRules[i];
    }
  }
 
  console.log("hidebaseonrules",hideBasedOnRules)

  // check if any of the fields are matched 
  // console.log('logictype',logicType)

  // hideField = !hideBasedOnRules.every(i => i != true);

  if(logicType === "any"){
    hideField = hideBasedOnRules.includes(true);
  }

  // check if all the fields match(are true)
  if(logicType === "all"){
    hideField = hideBasedOnRules.every(i => i === true);
  }

  // formValues[id].hideField = hideField;
  // this.setState({ formValues });
  console.log(hideField)
  return hideField;
};
