import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, TermScreen } from "../screens";
import FeedScreen from "../screens/FeedScreen";
import { AppRoute } from "./AppRoute";
import StarshipDetailScreen from "../screens/StarshipDetailScreen";
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator mode={"modal"} initialRouteName={AppRoute.LOGIN_SCREEN}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#7950f2",
            shadowColor: "transparent",
          },
          headerShown: false,
        }}
        name={AppRoute.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermScreen} />
      <Stack.Screen
        options={{
          title: "Feed",
          headerStyle: {
            backgroundColor: "#7950f2",
            shadowColor: "transparent",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
        name={AppRoute.STARSHIP_FEED_SCREEN}
        component={FeedScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#7950f2",
            shadowColor: "transparent",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
        name={AppRoute.STARSHIP_DETAIL_SCREEN}
        component={StarshipDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
