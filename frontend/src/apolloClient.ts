import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_URI });

export const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
