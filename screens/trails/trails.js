import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function TrailsIndex() {

  const [trails, setTrails] = useState([
    {title: 'Globzia Park', location: 'Oxford Place Norwich', visitedLocations: 9, totalLocations: 10},
    {title: 'Zoobie Lust', location: 'Oxford Place Norwich', visitedLocations: 7, totalLocations: 8},
    {title: 'Penguin Polava', location: 'Twycross Zoo, Twycross', visitedLocations: 7, totalLocations: 15},
    {title: 'Twycross Tresspass', location: 'Twycross Zoo, Twycross', visitedLocations: 16, totalLocations: 50},
    {title: 'Potters Powers', location: 'Warick Castle, Warick', visitedLocations: 10, totalLocations: 20},
  ]);

  return (
    <View style={styles.container}>
      <Text>This is the trails screen</Text>
      <StatusBar style="auto" />
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
