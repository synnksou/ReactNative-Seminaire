import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens";
import { AppRoute } from "./AppRoute";
const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator mode={"card"} initialRouteName={AppRoute.LOGIN_SCREEN}>
      <Stack.Screen name={AppRoute.LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
