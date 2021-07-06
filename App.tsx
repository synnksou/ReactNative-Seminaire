import React from "react";
import DataProvider from "./src/components/dataProvider";
import ProviderOffline from "./src/components/providerOflline";

import AppLayout from "./AppLayout";
import FeedScreen from "./src/screens/FeedScreen";

export default function App() {
  return (
    <ProviderOffline>
      <DataProvider>
        <AppLayout title={"StarShip"}>
          <FeedScreen />
        </AppLayout>
      </DataProvider>
    </ProviderOffline>
  );
}

/*
<QueryClientProvider client={queryClient}>
<FeedScreen />
</QueryClientProvider>
*/
