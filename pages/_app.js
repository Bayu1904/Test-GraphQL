import { ApolloProvider } from "@apollo/client";
import client, { useApollo, setAuthToken } from "../lib/apolloClient";
import "../style/style.css";
import { UserContextProvider } from "../Utils/AuthContext";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <UserContextProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </UserContextProvider>
  );
}
