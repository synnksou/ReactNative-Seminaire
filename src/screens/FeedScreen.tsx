import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import CardItem from "../components/cardItem";
import { useStarships } from "../lib/useStartShip";

const App = () => {
  const data = useStarships();

  
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={data.data.results}
          renderItem={({ item }) => {
            return (
              <CardItem
                name={item.name}
                model={item.model}
                manufacturer={item.manufacturer}
                cost_in_credits={item.cost_in_credits}
                hyperdrive_rating={item.hyperdrive_rating}
                crew={item.crew}
              />
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#fafafa",
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  card: {
    padding: 5,
  },
});

export default App;
