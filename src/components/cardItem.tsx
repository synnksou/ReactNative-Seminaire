import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const CardItem = (props: any) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{props.name}</Title>
        <Paragraph> Modele : {props.model}</Paragraph>
        <Paragraph> Manu Facture : {props.manufacturer}</Paragraph>
        <Paragraph>Cout : {props.cost_in_credits}</Paragraph>
        <Paragraph>Crew : {props.crew}</Paragraph>
        <Paragraph>Hyper Drive Rateing : {props.hyperdrive_rating}</Paragraph>
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
