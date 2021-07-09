import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Text,
} from "react-native";
import CardItem from "../components/cardItem";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useStarships } from "../lib/useStartShip";
import BottomTabNavigator from "../navigation/BottomTabNavigator";

const FeedScreen = ({ navigation }: any) => {
  const { data, error, isLoading } = useStarships();
  if (isLoading)
    return (
      <View>
        <Text>Loading</Text>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </View>
    );

  if (error) return <Text> An error has occurred: </Text>;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <FlatList
          data={data.results}
          renderItem={({ item, index }) => {
            return (
              <CardItem
                name={item.name}
                manufacturer={item.manufacturer}
                cost_in_credits={item.cost_in_credits}
                hyperdrive_rating={item.hyperdrive_rating}
                crew={item.crew}
                position={index + 2}
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

export default FeedScreen;
