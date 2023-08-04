"use client";

import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { node } from "prop-types";

import config from "@/theme.config";

function makeClient() {
  const httpLink = new HttpLink({
    uri: `${config.wordpress.backend}/graphql`,
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

// function makeSuspenseCache() {
//   return new SuspenseCache();
// }

export function ApolloWrapper({ children }) {
  return (
    // @TODO add makeSuspenseCache={makeSuspenseCache} https://www.apollographql.com/blog/announcement/frontend/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router/
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

ApolloWrapper.propTypes = {
  children: node.isRequired,
};
