import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Camera({ setIsAuthenticated }) {
  return (
    <View style={styles.container}>
      <Text>Camera</Text>
      <Button onPress={() => setIsAuthenticated(false)} title="LOGOUT"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
