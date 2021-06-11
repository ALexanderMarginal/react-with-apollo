import {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/client';
import {apolloClient} from './apolloClient';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <StrictMode>
        <ApolloProvider client={apolloClient}>
            <App />
        </ApolloProvider>
    </StrictMode>,
    rootElement,
);
