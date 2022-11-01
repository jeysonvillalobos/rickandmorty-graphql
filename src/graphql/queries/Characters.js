import {gql} from '@apollo/client';

const getCharacters = gql`
query {
  characters {
    results {
      id
      name,
      image
    }
  }
}
`;

export {
  getCharacters
};
