import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import config from "@/theme.config";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${config.wordpress.backend}/graphql`,
      credentials: "include", // Additional fetch() options like `credentials` or `headers`
    }),
  });
});
export const apolloQuery = async (params) => {
  const client = getClient();
  try {
    const res = await client.query(params);
    return res;
  } catch (error) {
    console.error("Error in apolloQuery:", error);
    return { error };
  }
};
