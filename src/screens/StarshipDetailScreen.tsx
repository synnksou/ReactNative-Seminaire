import React from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useStarshipsDetails } from "./../lib/useStartShipDetail";
import { useRoute } from "@react-navigation/native";

const StarshipDetailScreen = () => {
  const route = useRoute();
  const starShipId = route.params.id;
  const { data, error, isLoading } = useStarshipsDetails(starShipId);
  console.log({ route });
  console.log({ data });
  if (isLoading)
    return (
      <View>
        <Text>Loading</Text>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </View>
    );

  if (error) return <Text> An error has occurred: </Text>;

  return (
    <View>
      <Text>{data.name}</Text>
      <Text>{data.MGLT}</Text>
      <Text>{data.cargo_capacity}</Text>
      <Text>{data.consumables}</Text>
      <Text>{data.cost_in_credits}</Text>
      <Text>{data.crew}</Text>
      <Text>{data.hyperdrive_rating}</Text>
      <Text>{data.length}</Text>
      <Text>{data.manufacturer}</Text>
      <Text>{data.max_atmosphering_speed}</Text>
      <Text>{data.passengers}</Text>
      <Text>{data.starship_class}</Text>
    </View>
  );
};

export default StarshipDetailScreen;
