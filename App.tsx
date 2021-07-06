import React from "react";
import { Text } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import TermsScreen from "./src/screens/TermScreen";
import FeedScreen from "./src/screens/FeedScreen";
import DataProvider from "./src/components/dataProvider"
import AppLayout from "./AppLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider, NetworkConsumer } from "react-native-offline";
import Offline from "./Offline";

const queryClient = new QueryClient();

export default function App() {
  return (
      <NetworkProvider>
        <NetworkConsumer>
          {({ isConnected }) =>
            !isConnected ? (
              <Offline />
            ) : (
              <AppLayout title="Starships">
              </AppLayout>
            )
          }
        </NetworkConsumer>
      </NetworkProvider>

  );
}

/*
<QueryClientProvider client={queryClient}>
<FeedScreen />
</QueryClientProvider>
*/
