import gql from 'graphql-tag';

const DateFieldFragment = gql`
  fragment DateFieldFragment on DateField {
    id
    visibility
    value
    type
    subLabelPlacement
    shouldAllowDuplicates
    placeholder
    personalData {
      shouldErase
      shouldExport
      isIdentificationField
    }
    pageNumber
    layoutSpacerGridColumnSpan
    layoutGridColumnSpan
    labelPlacement
    label
    adminLabel
    calendarIconUrl
    calendarIconType
    canPrepopulate
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
    cssClass
    databaseId
    dateFormat
    dateType
    defaultValue
    inputName
    inputType
    isRequired
    inputs {
      ... on DateInputProperty {
        id
        placeholder
        label
        defaultValue
        customLabel
        autocompleteAttribute
      }
      ... on TimeInputProperty {
        id
        autocompleteAttribute
        customLabel
        defaultValue
        label
        placeholder
      }
      label
      id
    }
    errorMessage
    displayOnly
    descriptionPlacement
    description
  }
`;

export default DateFieldFragment;
