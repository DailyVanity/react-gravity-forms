import gql from 'graphql-tag';

const TextFieldFragment = gql`
  fragment TextFieldFragment on TextField {
    id
    label
    visibility
    value
    type
    size
    placeholder
    isRequired
    inputType
    inputName
    errorMessage
    adminLabel
    description
    defaultValue
    pageNumber
    cssClass
    placeholder
  }
`;

export default TextFieldFragment;
