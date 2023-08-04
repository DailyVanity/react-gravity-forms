import gql from 'graphql-tag';

const WebsiteFieldFragment = gql`
  fragment WebsiteFieldFragment on WebsiteField {
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

export default WebsiteFieldFragment;
