import { ApolloClient, InMemoryCache } from '@apollo/client';

const Client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});

export default Client;
