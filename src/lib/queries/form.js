import gql from 'graphql-tag';
import {
  AddressFieldFragment,
  DateFieldFragment,
  NumberFieldFragment,
  TextFieldFragment,
  WebsiteFieldFragment,
} from './fragments';

const GetForm = gql`
  ${AddressFieldFragment}
  ${DateFieldFragment}
  ${NumberFieldFragment}
  ${TextFieldFragment}
  ${WebsiteFieldFragment}
  query GetForm($formID: ID!) {
    gfForm(id: $formID) {
      button {
        width
        type
        location
        text
        layoutGridColumnSpan
        imageUrl
        conditionalLogic {
          logicType
          actionType
        }
      }
      dateCreated
      description
      descriptionPlacement
      id: formId
      isActive
      isTrash
      labelPlacement
      lastPageButton {
        type
        imageUrl
        text
      }
      markupVersion
      nextFieldId
      pagination {
        backgroundColor
        color
      }
      title
      version
      fields: formFields {
        nodes {
          ... on CheckboxField {
            id
            type
            label
            choices {
              text
              value
            }
            inputs {
              id
              label
            }
          }
          ...AddressFieldFragment
          ...DateFieldFragment
          ...NumberFieldFragment
          ...TextFieldFragment
          ...WebsiteFieldFragment
          ... on RadioField {
            id
            type
            value
            choices {
              text
              value
            }
          }
        }
      }
    }
  }
`;

export const SaveEntry = gql`
  mutation SaveEntry($fieldValues: [FormFieldValuesInput]!, $formID: ID!) {
    submitGfForm(input: { fieldValues: $fieldValues, id: $formID }) {
      confirmation {
        message
        pageId
        queryString
        type
        url
      }
      errors {
        message
        id
      }
    }
  }
`;

export default GetForm;
