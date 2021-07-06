import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, TermScreen } from "../screens";
import { AppRoute } from "./AppRoute";
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      headerMode={"none"}
      mode={"modal"}
      initialRouteName={AppRoute.LOGIN_SCREEN}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#7950f2",
            shadowColor: "transparent",
          },
        }}
        name={AppRoute.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
