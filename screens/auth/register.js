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
import { formStyles } from '../../stylesheets/forms';
import { icons } from '../../stylesheets/icons';
import { textStyles } from '../../stylesheets/typography';
import { buttonStyles } from '../../stylesheets/buttons';

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
      setPasswordCheckColor(colors.success);
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
          <TouchableOpacity style={globalStyles.stackNavigationHeaderPress} onPress={() => navigation.goBack()} >  
              <Ionicons name="chevron-back-circle-outline" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Animatable.Text animation='fadeIn' style={[textStyles.headerText, textStyles.bold, textStyles.alt]}>Welcome To AR Trails!</Animatable.Text>
        </View>
        <Animatable.View 
        animation='slideInUp'
        style={styles.footer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[textStyles.subTitletext, {marginTop: 40}]}>Create Your Account</Text>

            {/* EMAIL FIELD */}
            <Text style={formStyles.fieldLabel}>Email</Text>
            <View style={formStyles.fieldBox}>
              <AntDesign name="login" size={icons.size} color={colors.grey} />
              <TextInput 
              keyboardType='email-address'
              placeholder="Your Email"
              autoCapitalize="none"
              style={formStyles.textInput}
              onChangeText={(val) => emailTextInputChange(val)}
              />
              {emailVerified ? 
              <Animatable.View animation='bounceIn'>
              <Feather name="check-circle" size={icons.size} color={colors.success} />
              </Animatable.View>
              : null}
            </View>

            {/* DATE OF BIRTH FIELD */}
            <Text style={formStyles.fieldLabel}>Date Of Birth</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <View style={[formStyles.fieldBox, {alignItems: 'center'}]}>
                <FontAwesome name="calendar" size={icons.size} color={colors.grey} />
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
                <Feather name="check-circle" size={icons.size} color={colors.success} />
                </Animatable.View>
                : null}
              </View>
            </TouchableOpacity>

            {/* GENDER FIELD */}
            <Text style={formStyles.fieldLabel}>Gender</Text>
            <View>
              <RadioButtonRN
                data={genders}
                selectedBtn={(val) => genderOnSelect(val)}
                style={{flex: 1, flexDirection: 'row'}}
                boxStyle={{flex: 1, marginHorizontal: 5, paddingVertical: 20, borderRadius: 10}}
                textStyle={{color: 'black', fontWeight: 'bold'}}
                circleSize={0}
                activeColor={'#fff'}
                boxActiveBgColor={colors.primary}
              />
            </View>

            {/* POSTCODE FIELD */}
            <Text style={formStyles.fieldLabel}>Postcode</Text>
            <View style={[formStyles.fieldBox]}>
              <Feather name="map-pin" size={icons.size} color={colors.grey} />
              <TextInput 
              placeholder="Postcode"
              autoCapitalize="characters"
              style={formStyles.textInput}
              onChangeText={(val) => postCodeTextInputChange(val)}
              />
              {postCodeVerified ? 
              <Animatable.View animation='bounceIn'>
              <Feather name="check-circle" size={icons.size} color={colors.success} />
              </Animatable.View>
              : null}
            </View>

            {/* PASSWORD FIELD */}
            <Text style={formStyles.fieldLabel}>Password</Text>
            <View style={formStyles.fieldBox}>
              <Feather name="lock" size={icons.size} color={colors.grey} />
              <TextInput 
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={passwordSecureText}
              onChangeText={(val) => passwordTextInputChange(val)}
              style={formStyles.textInput} />
              <TouchableWithoutFeedback onPress={() => updateSecureTextEntry()}>
                {passwordSecureText ?
                <Feather name="eye-off" size={icons.size} color={passwordCheckColor} />
                :
                <Feather name="eye" size={icons.size} color={passwordCheckColor} />
                }
              </TouchableWithoutFeedback>
            </View>

            {/* CONFIRM PASSWORD FIELD */}
            <Text style={formStyles.fieldLabel}>Confirm Password</Text>
            <View style={[formStyles.fieldBox, {marginBottom: 50}]}>
              <Feather name="lock" size={icons.size} color={colors.grey} />
              <TextInput 
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={passwordSecureText}
              onChangeText={(val) => confirmedPasswordTextInputChange(val)}
              style={formStyles.textInput} />
              <TouchableWithoutFeedback onPress={() => updateSecureTextEntry()}>
                {passwordSecureText ?
                <Feather name="eye-off" size={icons.size} color={passwordCheckColor} />
                :
                <Feather name="eye" size={icons.size} color={passwordCheckColor} />
                }
              </TouchableWithoutFeedback>
            </View>

            {/* REGISTER BUTTON */}
            {(emailVerified && passwordVerified && dateOfBirthVerified && genderVerified && postCodeVerified) ?
            <TouchableOpacity style={[buttonStyles.primaryButton, , {marginTop: 35, marginBottom: 100}]} onPress={() => navigation.navigate('Login')}>
              <Text style={buttonStyles.primaryButtonText}>Register</Text>
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
      flex: 9,
      backgroundColor: '#fff',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      paddingHorizontal: 20,
  },
});