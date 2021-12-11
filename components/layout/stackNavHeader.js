import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../stylesheets/global';
import { Ionicons } from '@expo/vector-icons';

export default function StackNavigationHeader() {
  return (
    <View style={globalStyles.stackNavigationHeader}>
        <TouchableOpacity style={globalStyles.stackNavigationHeaderPress} onPress={() => navigation.goBack()} >  
            <Ionicons name="chevron-back-circle-outline" size={40} color="#fff" />
        </TouchableOpacity>
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




