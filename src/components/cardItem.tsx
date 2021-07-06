import * as React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Text , Subheading, Button } from "react-native-paper";

interface CardItemInterface {
  name : any,
  crew : any,
  manufacturer : any,
  hyperdrive_rating : any,
  cost_in_credits : any
}
 
const CardItem = (props: CardItemInterface) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={styles.text}>{props.name}</Title>
          <Subheading style={styles.text}>Manu Facture : {props.manufacturer}</Subheading>
          <Text style={styles.text}>Crew : {props.crew}</Text>
          <Text style={styles.text}>Hyper Drive Rateing : {props.hyperdrive_rating}</Text>
          <Text style={[styles.textCost, styles.text]}>Cout : {props.cost_in_credits}</Text>
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
  textCost : {
   fontWeight: 'bold',
   justifyContent: 'flex-start'
  },
  text :{
    letterSpacing : 2
  }
});

export default CardItem;
