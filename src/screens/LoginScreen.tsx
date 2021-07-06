import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { AppRoute } from "./../navigation/AppRoute";
const App = ({props , navigation}: any ) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  function handleTerms() {
    navigation.navigate(AppRoute.TERMS_SCREEN);
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.title}>Welcome To Starport</Text>
      </View>
      <TextInput
        style={{ margin: 10 }}
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={{ margin: 10 }}
        label="Mot de Passe"
        value={pass}
        onChangeText={(text) => setPass(text)}
        keyboardType="default"
      />

      <Button
        style={{ margin: 10 }}
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Login
      </Button>
      <Button
        mode="text"
        onPress={handleTerms}
      >
        Voir les conditions d'utilisations
      </Button>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  welcome: {
    backgroundColor: "#7950f2",
    paddingBottom: 100,
    shadowOpacity: 0,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 100,
  },
});
