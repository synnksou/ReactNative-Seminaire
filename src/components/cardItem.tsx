import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Text, Subheading, Button } from "react-native-paper";
import { AppRoute } from "./../navigation/AppRoute";
import { useNavigation } from "@react-navigation/native";
interface CardItemInterface {
  name: any;
  crew: any;
  manufacturer: any;
  hyperdrive_rating: any;
  cost_in_credits: any;
  position: any;
}
const CardItem = ({
  name,
  crew,
  manufacturer,
  hyperdrive_rating,
  cost_in_credits,
  position,
}: CardItemInterface) => {
  const navigation = useNavigation();

  function handlerDetailScreen(id: String) {
    navigation.navigate(AppRoute.STARSHIP_DETAIL_SCREEN, {
      id: id,
    });
  }

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.text}>{name}</Title>
        <Subheading style={styles.text}>
          Manu Facture : {manufacturer}
        </Subheading>
        <Text style={styles.text}>Crew : {crew}</Text>
        <Text style={styles.text}>
          Hyper Drive Rateing : {hyperdrive_rating}
        </Text>
        <Text style={[styles.textCost, styles.text]}>
          Cout : {cost_in_credits}
        </Text>
        <Card.Actions>
          <Button>Buy</Button>
          <Button
            mode="contained"
            onPress={() => handlerDetailScreen(position)}
          >
            Detail
          </Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  textCost: {
    fontWeight: "bold",
    justifyContent: "flex-start",
  },
  text: {
    letterSpacing: 2,
  },
});

export default CardItem;
