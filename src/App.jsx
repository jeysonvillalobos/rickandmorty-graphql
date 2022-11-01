import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Client from './graphql';
import Routes from './Routes';

const App = () => {
    return (
        <ApolloProvider client={Client}>
            <RouterProvider router={Routes}/>
        </ApolloProvider>
    );
};

export default App;
