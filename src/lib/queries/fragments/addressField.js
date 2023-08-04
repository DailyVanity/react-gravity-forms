import gql from 'graphql-tag';

// Featured Image fragment
const AddressFieldFragment = gql`
  fragment AddressFieldFragment on AddressField {
    id
    label
    value
    type
    isRequired
    inputs {
      id
      label
    }
    addressValues {
      city
      country
      lineTwo
      state
      street
      zip
    }
    addressType
  }
`;

export default AddressFieldFragment;
