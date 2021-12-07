import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { globalStyles } from '../../stylesheets/global';
import ProgressBar from '../../components/progressBar';
import { MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../stylesheets/colors';

export default function TrailDetails({ route, navigation }) {

  return (
    <ScrollView style={{backgroundColor: '#fff'}} showsVerticalScrollIndicator={false}>
      <View style={globalStyles.container}>
        <View style={styles.TrailHeaderContainer}>
          <Image source={require('../../assets/trails/badges/badge3.png')} style={{width: 200, height: 200}} resizeMode='contain' />
          <Text style={styles.TrailTitle}>{route.params.title}</Text>   
        </View>
        <View style={[styles.trailInfoCard, globalStyles.card]}>
          <View style={styles.trailInfoDescription}>
            <Text>{route.params.description}</Text>
          </View>
          <Text style={{fontWeight:'bold'}}>{route.params.location}</Text>
          <View style={[globalStyles.locationsVisitedContainer, {marginVertical: 10}]}>
            <MaterialIcons name="not-listed-location" size={20} color={'#cd5242'}/>
            <Text style={styles.locationsVisited}>{route.params.visitedLocations}/{route.params.totalLocations}</Text><Text style={styles.locationsVisitedtext}> locations visited</Text>
          </View>
          {(() => {
            if ((route.params.totalLocations - route.params.visitedLocations) > 1) {
              return (
                <Text style={{color: colors.primary, fontWeight: 'bold'}}>Just {route.params.totalLocations - route.params.visitedLocations} locations left to win this badge!</Text>
              )
            } else {
              return (
              <Text style={{color: colors.primary}}>Just <Text style={{fontWeight: 'bold'}}>{route.params.totalLocations - route.params.visitedLocations}</Text> location left to win this badge!</Text>
              )
            }
          })()}
          <View style={{padding: 20, backgroundColor: colors.alertInfoBackground, width: '100%', marginTop: 15, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
            <TouchableOpacity>
              <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: 20}}>Keep it Up!</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{left: 0, marginVertical: 15, width: '100%' }}>
          <Text style={{fontWeight: 'bold'}}>Your Progess</Text>
        </View>
        <View style={styles.trailProgressContainer}>
          <View style={styles.trailProgressbar}>
            <ProgressBar step={route.params.visitedLocations} steps={route.params.totalLocations} height={20}/>
          </View>
          <View style={styles.trailProgressbarTextContainer}>
            <Text style={styles.trailProgressbarText}>{(route.params.visitedLocations/route.params.totalLocations * 100).toFixed(0)}%</Text>
          </View>
        </View>
        <View style={[globalStyles.primaryButton, {width: '100%', marginBottom: 15}]}>
          <TouchableOpacity style={{alignItems: 'center', padding: 15}}>
            <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Begin {route.params.title}!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TrailHeaderContainer: {
    alignItems: 'center',
  },
  TrailDetailsBadge: {

  },
  TrailTitle: {
    fontSize: 25,
    color: colors.primary,
    fontWeight: 'bold',
  },
  trailInfoCard: {
    width: '100%',
    marginVertical: 15,
    marginHorizontal: 5,
    flexDirection:'column',
    alignItems:'center',
  },
  trailProgressContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  trailProgressbar: {
    width: '75%'
    // flex: 1,
    // flexDirection: 'row'
  },
  trailProgressbarTextContainer: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    // flexDirection: 'row'
  },
  trailProgressbarText: {
    fontWeight: 'bold',
    // flexDirection: 'row'
  },
  trailInfoDescription: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  locationsVisited: {
    color: '#e29a90',
    fontWeight: 'bold',
  },
  locationsVisitedtext: {
    color: '#e29a90'
  }
});
