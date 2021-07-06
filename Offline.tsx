import React from 'react';
import { StyleSheet, View , Text} from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
const Offline = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
          YOUR ARE OFFLINE BITCH, TRY TO CONNECT
      </Text>
      <ActivityIndicator></ActivityIndicator>
    </View>
  );
};

export default Offline;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: 'absolute',
    top: 55,
    width: '90%',
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    color: Colors.red800,
  },
});