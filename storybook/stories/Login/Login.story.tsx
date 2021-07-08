import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Button, TextInput } from "react-native-paper";
storiesOf("Login Components", module)
  .add("Buttons", () => (
    <Button
      style={{ margin: 10 }}
      mode="contained"
      onPress={() => console.log("Pressed")}
    >
      Login
    </Button>
  ))
  .add("Text Input Email", () => (
    <TextInput
      style={{ margin: 10 }}
      label="Email"
      keyboardType="email-address"
    />
  ))
  .add("Text Input Password", () => (
    <TextInput
      style={{ margin: 10 }}
      label="Mot de Passe"

    />
  ));
