import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  ApolloProvider,
  // useQuery,
  gql
} from "@apollo/client";
import { apolloClient } from "./apolloClient";

import App from "./App";

apolloClient
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then((data) => console.log(data));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  rootElement
);
