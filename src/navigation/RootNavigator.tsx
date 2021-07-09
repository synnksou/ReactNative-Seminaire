import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TermScreen } from "../screens";
import FeedScreen from "../screens/FeedScreen";
import { AppRoute } from "./AppRoute";
import StarshipDetailScreen from "../screens/StarshipDetailScreen";
import CustomNavigationBar from "./../components/topBar";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}
      mode={"card"}
      initialRouteName={AppRoute.STARSHIP_FEED_SCREEN}
    >
      <Stack.Screen name={AppRoute.TERMS_SCREEN} component={TermScreen} />
      <Stack.Screen
        options={{
          title: "Feed",
        }}
        name={AppRoute.STARSHIP_FEED_SCREEN}
        component={BottomTabNavigator}
      />
      <Stack.Screen
        name={AppRoute.STARSHIP_DETAIL_SCREEN}
        component={StarshipDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
