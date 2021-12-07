import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { createAnimatableComponent } from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../stylesheets/colors';
import { globalStyles } from '../../stylesheets/global';
import * as Animatable from 'react-native-animatable';

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Animatable.Image 
      animation='bounceIn'
      source={require('../../assets/trails/badges/badge3.png')}
       style={styles.logo}
        resizeMode='contain' />
      </View> 
      <Animatable.View  
      animation='fadeInUpBig'
      style={styles.footer}>
        <Text style={styles.title}>Sign In / Create an Account to Get Hunting!</Text>
        <Text style={styles.text}>Some text here</Text>
        <TouchableOpacity style={globalStyles.primaryButton} onPress={() => navigation.navigate('Login')}>
          <Text style={globalStyles.primaryButtonText}>Sign In</Text>
        </TouchableOpacity>
      </Animatable.View> 
    </View>
  );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.primary,
  },
  header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});