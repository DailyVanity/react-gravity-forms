import gql from 'graphql-tag';

const TextAreaFieldFragment = gql`
  fragment TextAreaFieldFragment on TextAreaField {
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

export default TextAreaFieldFragment;
