import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { globalStyles } from '../../stylesheets/global';
import ProgressBar from '../../components/progressBar';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function TrailsIndex( { navigation } ) {

  const [trails, setTrails] = useState([
    {key: 1, title: 'Globzia Park', location: 'Oxford Place Norwich', visitedLocations: 9, totalLocations: 10},
    {key: 2, title: 'Zoobie Lust', location: 'Oxford Place Norwich', visitedLocations: 7, totalLocations: 8},
    {key: 3, title: 'Penguin Polava', location: 'Twycross Zoo, Twycross', visitedLocations: 7, totalLocations: 15},
    {key: 4, title: 'Twycross Tresspass', location: 'Twycross Zoo, Twycross', visitedLocations: 16, totalLocations: 50},
    {key: 5, title: 'Potters Powers', location: 'Warick Castle, Warick', visitedLocations: 10, totalLocations: 20},
  ]);

  const trailsOnPressHandler = (item) => {
    navigation.navigate('Trail Details', item)
  }

  const TrailItem = ({item}) => (
    <TouchableOpacity onPress={() => trailsOnPressHandler(item)}>
      <View style={styles.trailsItem}>
        <View style={{ width: '30%', display: 'inline' }}>
          <Image source={require('../../assets/trails/badges/badge2.png')} style={styles.trailImage} resizeMode='center' />
        </View>
        <View style={{width: '70%', paddingLeft: 15}}>
          <Text style={styles.trailTitle}>{item.title}</Text>
          <Text style={styles.trailLocation}>{item.location}</Text>
          <ProgressBar step={item.visitedLocations} steps={item.totalLocations}/>
          <View style={styles.locationsVisitedContainer}>
            <Text>
              <MaterialIcons name="not-listed-location" size={20} color={'#cd5242'}/>
            </Text>
            <Text style={styles.locationsVisited}>{item.visitedLocations}/{item.totalLocations}</Text><Text style={styles.locationsVisitedtext}> locations visited</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={globalStyles.container}>
      <View style={styles.trailsListContainer}>
        <FlatList data={trails} style={styles.trailsList} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
         <TrailItem item={item}/>
        )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  trailsListContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  trailsList: {
    flex: 1,
    width: '100%',
    marginHorizontal: 10,
  },
  trailsItem: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  trailImage: {
    width: '100%',
    height: '100%',
  },
  trailLocation: {
    color: '#A9A9A9'
  },
  trailTitle: {
    fontWeight: 'bold',
  },
  locationsVisitedContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationsVisited: {
    color: '#e29a90',
    fontWeight: 'bold',
  },
  locationsVisitedtext: {
    color: '#e29a90'
  }
});
