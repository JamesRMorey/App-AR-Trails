import React, { useState } from 'react';
import { Appearance } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform, TextInput, Keyboard, ScrollView, Button } from 'react-native';
import { colors } from '../../stylesheets/colors';
import { globalStyles } from '../../stylesheets/global';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function Login({ navigation }) {

  const [darkMode, setDarkMode] = useState(false)

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    console.log(Appearance.getColorScheme());
    if (Appearance.getColorScheme() == 'dark') {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  })

  const emailTextInputChange = (val) => {
    if (val.length > 0 && val.includes('@')) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        
    });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
    });
    }
  }

  const passwordTextInputChange = (val) => {
      setData({
        ...data,
        password: val
      })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  return (
    <View style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} */}
      <View style={globalStyles.stackNavigationHeader}>
        <TouchableOpacity style={globalStyles.stackNavigationHeaderPress} onPress={() => navigation.navigate('Login')} >  
          <Ionicons name="chevron-back-circle-outline" size={40} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Animatable.Text animation='fadeIn' style={styles.text_header}>Welcome To AR Trails!</Animatable.Text>
      </View>
      <Animatable.View 
      animation='fadeInUpBig'
      style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.text_footer, {marginTop: 50}]}>Create Your Account</Text>
          {/* EMAIL FIELD */}
          <Text style={[styles.text_footer, {marginTop: 35}]}>Email</Text>
          <View style={styles.action}>
            <AntDesign name="login" size={30} color="black" />
            <TextInput 
            keyboardType='email-address'
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => emailTextInputChange(val)}
            />
            {data.check_textInputChange ? 
            <Animatable.View animation='bounceIn'>
            <Feather name="check-circle" size={30} color={colors.okgreen} />
            </Animatable.View>
            : null}
          </View>
          {/* PASSWORD FIELD */}
          <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" size={30} color="black" />
            <TextInput 
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry}
            onChangeText={(val) => passwordTextInputChange(val)}
            style={[styles.textInput]} />
            <TouchableWithoutFeedback onPress={() => updateSecureTextEntry()}>
              {data.secureTextEntry ?
              <Feather name="eye-off" size={30} color={colors.grey} />
              :
              <Feather name="eye" size={30} color={colors.grey} />
              }
            </TouchableWithoutFeedback>
          </View>
          {/* CONFIRM PASSWORD FIELD */}
          <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
          <View style={styles.action}>
            <Feather name="lock" size={30} color="black" />
            <TextInput 
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry}
            onChangeText={(val) => passwordTextInputChange(val)}
            style={[styles.textInput]} />
            <TouchableWithoutFeedback onPress={() => updateSecureTextEntry()}>
              {data.secureTextEntry ?
              <Feather name="eye-off" size={30} color={colors.grey} />
              :
              <Feather name="eye" size={30} color={colors.grey} />
              }
            </TouchableWithoutFeedback>
          </View>
          {/* DATE OF BIRTH FIELD */}
          <Text style={[styles.text_footer, {marginTop: 35}]}>Date Of Birth</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <View style={styles.action}>
              <FontAwesome name="birthday-cake" size={30} color="black" />
                <View>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    date={new Date()}
                    // display='inline'
                    isDarkModeEnabled={darkMode}
                  />
                </View>
              {data.check_textInputChange ? 
              <Animatable.View animation='bounceIn'>
              <Feather name="check-circle" size={30} color={colors.okgreen} />
              </Animatable.View>
              : null}
            </View>
          </TouchableOpacity>
          {/* GENDER FIELD */}
          <Text style={[styles.text_footer, {marginTop: 35}]}>Gender</Text>
          <View style={styles.action}>
            <Ionicons name="person-circle-outline" size={30} color="black" />
            <TextInput 
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => emailTextInputChange(val)}
            />
            {data.check_textInputChange ? 
            <Animatable.View animation='bounceIn'>
            <Feather name="check-circle" size={30} color={colors.okgreen} />
            </Animatable.View>
            : null}
          </View>
          {/* POSTCODE FIELD */}
          <Text style={[styles.text_footer, {marginTop: 35}]}>Postcode</Text>
          <View style={[styles.action, {marginBottom: 50}]}>
            <Entypo name="address" size={30} color="black" />
            <TextInput 
            placeholder="Your Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(val) => emailTextInputChange(val)}
            />
            {data.check_textInputChange ? 
            <Animatable.View animation='bounceIn'>
            <Feather name="check-circle" size={30} color={colors.okgreen} />
            </Animatable.View>
            : null}
          </View>
          {/* REGISTER BUTTON */}
          {(data.email.length > 0 && data.password.length > 0) ?
          <TouchableOpacity style={[globalStyles.primaryButton, , {marginTop: 35, marginBottom: 100}]} onPress={() => navigation.navigate('Login')}>
            <Text style={globalStyles.primaryButtonText}>Register</Text>
          </TouchableOpacity>
          : null }
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: colors.primary
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
  },
  footer: {
      flex: 4,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});