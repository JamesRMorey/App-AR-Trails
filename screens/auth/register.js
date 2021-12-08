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
import RadioButtonRN from 'radio-buttons-react-native';


export default function Login({ navigation }) {

  // DAATEPICKER SHIT
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
    setData({
      ...data,
      dob: date
    })
    if (date.getFullYear() < (new Date()).getFullYear()) {
      setDateOfBirthVerified(true);
    } else {
      setDateOfBirthVerified(false);
    }
    hideDatePicker();
  };

  // FORM VALIDITY CHECK
  const [emailVerified, setEmailVerified] = useState(false);
  const [postCodeVerified, setPostCodeVerified] = useState(false);
  const [dateOfBirthVerified, setDateOfBirthVerified] = useState(false);
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [genderVerified, setGenderVerified] = useState(false);

  const [passwordCheckColor, setPasswordCheckColor] = useState(colors.grey);
  const [passwordSecureText, setPasswordSecureText] = useState(true);


  const [confirmedPassword, setConfirmedPassword] = useState('');

  //FORM DATA
  const [data, setData] = useState({
    email: '',
    password: '',
    postcode: '',
    gender: '',
    dob: new Date(),
  })

  const genders = [
    {label: 'Male'},
    {label: 'Female'},
    {label: 'Other'}     
    ];

  const emailTextInputChange = (val) => {
    if (val.length > 0 && val.includes('@')) {
        setData({
          ...data,
          email: val,
      });
      setEmailVerified(true)
    } else {
        setData({
          ...data,
          email: val,
      });
      setEmailVerified(false)
    }
  }

  const passwordTextInputChange = (val) => {
      setData({
        ...data,
        password: val
      });
      if ((val == confirmedPassword) && val.length > 0) {
        passwordsMatch(true);
      } else {
        passwordsMatch(false);
      };
  };

  const confirmedPasswordTextInputChange = (val) => {
    setConfirmedPassword(val, passwordsMatch());
    if ((val == data.password) && val.length > 0) {
      passwordsMatch(true);
    } else {
      passwordsMatch(false);
    };
  };

  const checkVerified = () => {
    console.log(emailVerified + ' ' + passwordVerified + ' ' + genderVerified + ' ' + dateOfBirthVerified + ' ' + postCodeVerified);
  }

  const passwordsMatch = (status) => {
    if (status) {
      setPasswordCheckColor(colors.okgreen);
      setPasswordVerified(true);
    } else {
      setPasswordCheckColor(colors.grey);
      setPasswordVerified(false);
    };
  };

  const genderOnSelect = (val) => {
    setData({
      ...data,
      gender: val.label
    });
    setGenderVerified(true);
  }

  const postCodeTextInputChange = (val) => {
    setData({
      ...data,
      postcode: val
    });
    {val.length > 0 ? setPostCodeVerified(true) : setPostCodeVerified(false)}
  }

  const updateSecureTextEntry = () => {
    setPasswordSecureText(!passwordSecureText);
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
            <Text style={[styles.text_footer, {marginTop: 40, fontWeight: 'bold'}]}>Create Your Account</Text>

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
              {emailVerified ? 
              <Animatable.View animation='bounceIn'>
              <Feather name="check-circle" size={30} color={colors.okgreen} />
              </Animatable.View>
              : null}
            </View>

            {/* DATE OF BIRTH FIELD */}
            <Text style={[styles.text_footer, {marginTop: 35}]}>Date Of Birth</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <View style={[styles.action, {alignItems: 'center'}]}>
                <FontAwesome name="birthday-cake" size={30} color="black" />
                  <View style={{flex: 1}}>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                      date={data.dob}
                      // display='inline'
                      isDarkModeEnabled={darkMode}
                    />
                    <Text style={{marginLeft: 10}}>{data.dob.getDate()} / {data.dob.getMonth() + 1} / {data.dob.getFullYear()}</Text>
                  </View>
                {dateOfBirthVerified ? 
                <Animatable.View animation='bounceIn'>
                <Feather name="check-circle" size={30} color={colors.okgreen} />
                </Animatable.View>
                : null}
              </View>
            </TouchableOpacity>

            {/* GENDER FIELD */}
            <Text style={[styles.text_footer, {marginTop: 35}]}>Gender</Text>
            <View>
              <RadioButtonRN
                data={genders}
                selectedBtn={(val) => genderOnSelect(val)}
                style={{flex: 1, flexDirection: 'row'}}
                boxStyle={{flex: 1, marginHorizontal: 5, paddingVertical: 20, borderRadius: 10}}
                textStyle={{color: 'black'}}
                circleSize={0}
                activeColor={'#fff'}
                boxActiveBgColor={colors.primary}
              />
            </View>

            {/* POSTCODE FIELD */}
            <Text style={[styles.text_footer, {marginTop: 30}]}>Postcode</Text>
            <View style={[styles.action]}>
              <Entypo name="address" size={30} color="black" />
              <TextInput 
              placeholder="Postcode"
              autoCapitalize="characters"
              style={styles.textInput}
              onChangeText={(val) => postCodeTextInputChange(val)}
              />
              {postCodeVerified ? 
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
              secureTextEntry={passwordSecureText}
              onChangeText={(val) => passwordTextInputChange(val)}
              style={[styles.textInput]} />
              <TouchableWithoutFeedback onPress={() => updateSecureTextEntry()}>
                {passwordSecureText ?
                <Feather name="eye-off" size={30} color={passwordCheckColor} />
                :
                <Feather name="eye" size={30} color={passwordCheckColor} />
                }
              </TouchableWithoutFeedback>
            </View>

            {/* CONFIRM PASSWORD FIELD */}
            <Text style={[styles.text_footer, {marginTop: 35}]}>Confirm Password</Text>
            <View style={[styles.action, {marginBottom: 50}]}>
              <Feather name="lock" size={30} color="black" />
              <TextInput 
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={passwordSecureText}
              onChangeText={(val) => confirmedPasswordTextInputChange(val)}
              style={[styles.textInput]} />
              <TouchableWithoutFeedback onPress={() => updateSecureTextEntry()}>
                {passwordSecureText ?
                <Feather name="eye-off" size={30} color={passwordCheckColor} />
                :
                <Feather name="eye" size={30} color={passwordCheckColor} />
                }
              </TouchableWithoutFeedback>
            </View>

            {/* REGISTER BUTTON */}
            {(emailVerified && passwordVerified && dateOfBirthVerified && genderVerified && postCodeVerified) ?
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
      flex: 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
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
      borderWidth: 1,
      borderColor: colors.lightGrey,
      borderRadius: 10,
      padding: 10,
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