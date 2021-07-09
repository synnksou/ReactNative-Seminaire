import React from "react";
import { Appbar } from "react-native-paper";
//import { useNavigation } from "@react-navigation/native";

const topBar = ({ navigation, previous }: any) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="StarShips" />
    </Appbar.Header>
  );
};

export default topBar;
