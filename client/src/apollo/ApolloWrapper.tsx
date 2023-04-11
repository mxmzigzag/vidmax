import React, { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

interface ApolloWrapperProps {
  children: React.ReactNode | React.ReactNode[] | null;
}

export const ApolloWrapper = ({ children }: ApolloWrapperProps) => {
  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
  });

  const authLink = setContext(async (req, { headers }) => {
    const curToken = localStorage.getItem("token");
    return {
      ...headers,
      headers: {
        Authorization: curToken ? `Bearer ${curToken}` : null,
      },
    };
  });

  const client = useMemo(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(httpLink),
    });
  }, [authLink]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
