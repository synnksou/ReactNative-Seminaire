import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph, Text , Caption, Subheading, Button } from "react-native-paper";
const CardItem = (props: any) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{props.name}</Title>
        <Paragraph>
          <Subheading>Manu Facture : {props.manufacturer}</Subheading>
          <Text>Cout : {props.cost_in_credits}</Text>
          <Text>Crew : {props.crew}</Text>
          <Text>Hyper Drive Rateing : {props.hyperdrive_rating}</Text>
        </Paragraph>
        <Card.Actions>
      <Button>Buy</Button>
    </Card.Actions>
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
