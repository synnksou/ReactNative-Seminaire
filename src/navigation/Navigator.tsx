import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";
import LoginNavigator from "./LoginNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

const Navigator = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <NavigationContainer>
      {isSignedIn ? <RootNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
