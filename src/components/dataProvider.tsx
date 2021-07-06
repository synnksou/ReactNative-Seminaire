import React, { ReactElement } from "react";
import { View, Text } from "react-native";
import AppLayout from "../../AppLayout";
import Offline from "../../Offline";
import { QueryClient, QueryClientProvider } from "react-query";
import { NetworkProvider, NetworkConsumer } from "react-native-offline";

interface Props {
  children: ReactElement;
}

const DataProvider = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <NetworkProvider>
      <NetworkConsumer>
        {({ isConnected }) =>
          !isConnected ? (
            <Offline />
          ) : (
            <QueryClientProvider client={queryClient}>
              <AppLayout title="Starships">{children}</AppLayout>
            </QueryClientProvider>
          )
        }
      </NetworkConsumer>
    </NetworkProvider>
  );
};

export default DataProvider;
