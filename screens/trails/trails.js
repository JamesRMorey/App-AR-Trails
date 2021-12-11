import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { globalStyles } from '../../stylesheets/global';
import ProgressBar from '../../components/progressBar';
import { MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '../../stylesheets/colors';
import { icons } from '../../stylesheets/icons';
import { textStyles } from '../../stylesheets/typography';

export default function TrailsIndex( { navigation } ) {

  const [trails, setTrails] = useState([
    {key: 1, title: 'Globzia Park', location: 'Oxford Place Norwich', description:'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', visitedLocations: 9, totalLocations: 10, badgeSrc: '../../assets/trails/badges/badge3.png'},
    {key: 2, title: 'Zoobie Lust', location: 'Oxford Place Norwich', description:'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', visitedLocations: 7, totalLocations: 8, badgeSrc: '../../assets/trails/badges/badge3.png'},
    {key: 3, title: 'Penguin Polava', location: 'Twycross Zoo, Twycross', description:'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', visitedLocations: 7, totalLocations: 15, badgeSrc: '../../assets/trails/badges/badge3.png'},
    {key: 4, title: 'Twycross Tresspass', location: 'Twycross Zoo, Twycross', description:'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', visitedLocations: 16, totalLocations: 50, badgeSrc: '../../assets/trails/badges/badge3.png'},
    {key: 5, title: 'Potters Powers', location: 'Warick Castle, Warick', description:'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', visitedLocations: 10, totalLocations: 20, badgeSrc: '../../assets/trails/badges/badge3.png'},
  ]);

  const trailsOnPressHandler = (item) => {
    navigation.navigate('Trail Info', item)
  }

  const TrailItem = ({item}) => (
    <TouchableOpacity onPress={() => trailsOnPressHandler(item)}>
      <View style={[styles.trailsItem, globalStyles.card]}>
        <View style={{ width: '30%' }}>
          <Image source={require('../../assets/trails/badges/badge3.png')} style={styles.trailImage} resizeMode='contain' />
        </View>
        <View style={{width: '70%', paddingLeft: 15}}>
          <Text style={[textStyles.defaultText, textStyles.bold]}>{item.title}</Text>
          <Text style={[textStyles.defaultText, textStyles.light]}>{item.location}</Text>
          <ProgressBar step={item.visitedLocations} steps={item.totalLocations} height={10}/>
          <View style={globalStyles.locationsVisitedContainer}>
            <MaterialIcons name="not-listed-location" size={icons.size} color={'#cd5242'}/>
            <Text style={[textStyles.defaultText, textStyles.bold ,{color: '#cd5242'}]}>{item.visitedLocations}/{item.totalLocations}</Text><Text style={[textStyles.defaultText,styles.locationsVisitedtext]}> locations visited</Text>
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
  },
  trailImage: {
    width: '100%',
    height: '100%',
  },
  locationsVisitedtext: {
    color: '#e29a90'
  }
});
