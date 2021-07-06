import React from "react";
import DataProvider from "./src/components/dataProvider";
import ProviderOffline from "./src/components/providerOflline";
import StorybookUIRoot from "./storybook";
import { NavigationContainer } from "@react-navigation/native";
import AppLayout from "./AppLayout";
import Navigator from "./src/navigation/Navigator";
import { View } from "react-native";
//const SHOW_STORYBOOK = false;

export default function App() {
  return (
    <ProviderOffline>
      <DataProvider>
      {/* <AppLayout title={"StarShip"}> */}
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
          {/*</AppLayout>*/}
      </DataProvider>
    </ProviderOffline>
  );
}
/*
const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
export default UI;
*/

/*
<QueryClientProvider client={queryClient}>
<FeedScreen />
</QueryClientProvider>
*/
