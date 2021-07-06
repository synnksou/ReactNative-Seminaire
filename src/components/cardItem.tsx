import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Text } from "react-native-paper";
const CardItem = (props: any) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{props.name}</Title>
        <Paragraph>
          <Text>Manu Facture : {props.manufacturer}</Text>
          <Text>Cout : {props.cost_in_credits}</Text>
          <Text>Crew : {props.crew}</Text>
          <Text>Hyper Drive Rateing : {props.hyperdrive_rating}</Text>
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
});

export default CardItem;
