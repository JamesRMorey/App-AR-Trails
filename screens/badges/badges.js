import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { globalStyles } from '../../stylesheets/global';
import ProgressBar from '../../components/progressBar';
import { MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '../../stylesheets/colors';

export default function BadgesIndex( { navigation } ) {

  const [trails, setTrails] = useState([
    {key: 1, title: 'Shining Star'},
    {key: 2, title: 'Zoobie Head',},
    {key: 3, title: 'Penguins Shield',},
    {key: 4, title: 'Twycross Trophy'},
    {key: 5, title: 'Potters Wand',},
  ]);

  const badgeOnPressHandler = (item) => {
    navigation.navigate('Badge Info', item)
  }

  const BadgeItem = ({item}) => (
    <TouchableOpacity style={{width: '50%', marginBottom: 15}} onPress={() => badgeOnPressHandler(item)}>
        <View style={{alignItems: 'center'}}>
          <Image source={require('../../assets/trails/badges/badge3.png')}
           style={{width: 150, height: 150}}
           resizeMode="contain"
          />
          <Text style={{color: colors.primary, fontSize: 15, fontWeight: 'bold'}}>{item.title}</Text>
        </View>
    </TouchableOpacity>
  )

  return (
    <View style={globalStyles.container}>
      <View style={{flex: 1, flexDirection: 'row', width: '100%'}}>
        <FlatList data={trails} numColumns={2} columnWrapperStyle="space-around" style={{width: '100%'}} showsVerticalScrollIndicator={false} renderItem={({ item }) => (
         <BadgeItem item={item}/>
        )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
