import gql from 'graphql-tag';

const NumberFieldFragment = gql`
  fragment NumberFieldFragment on NumberField {
    adminLabel
    autocompleteAttribute
    calculationFormula
    calculationRounding
    canPrepopulate
    conditionalLogic {
      actionType
      logicType
      rules {
        operator
        fieldId
        value
      }
    }
    cssClass
    databaseId
    defaultValue
    description
    descriptionPlacement
    displayOnly
    errorMessage
    hasAutocomplete
    inputName
    inputType
    isCalculation
    isRequired
    label
    labelPlacement
    layoutGridColumnSpan
    layoutSpacerGridColumnSpan
    numberFormat
    pageNumber
    personalData {
      isIdentificationField
      shouldErase
      shouldExport
    }
    placeholder
    rangeMax
    rangeMin
    shouldAllowDuplicates
    size
    type
    value
    visibility
  }
`;

export default NumberFieldFragment;
