import React from "react";
import { TermScreen } from "../screens";
import FeedScreen from "../screens/FeedScreen";
import { AppRoute } from "./AppRoute";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#7950f2" }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="rocket-launch-outline"
              color={color}
              size={26}
            />
          ),
        }}
        name={AppRoute.STARSHIP_FEED_SCREEN}
        component={FeedScreen}
      />
      <Tab.Screen name={AppRoute.TERMS_SCREEN} component={TermScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
