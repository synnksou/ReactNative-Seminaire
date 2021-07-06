import React from "react";
import DataProvider from "./src/components/dataProvider";
//import ProviderOffline from "./src/components/providerOflline";
import StorybookUIRoot from './storybook';

import AppLayout from "./AppLayout";
import FeedScreen from "./src/screens/FeedScreen";

const SHOW_STORYBOOK = true;


function App() {
  return (
  //  <ProviderOffline>  
      <DataProvider>
        <AppLayout title={"StarShip"}>
          <FeedScreen />
        </AppLayout>
      </DataProvider>
  //  </ProviderOffline>
  );
}

const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
export default UI;

/*
<QueryClientProvider client={queryClient}>
<FeedScreen />
</QueryClientProvider>
*/
