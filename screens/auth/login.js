import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform, TextInput, Keyboard, ScrollView } from 'react-native';
import { colors } from '../../stylesheets/colors';
import { globalStyles } from '../../stylesheets/global';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { formStyles } from '../../stylesheets/forms';
import { icons } from '../../stylesheets/icons';
import { textStyles } from '../../stylesheets/typography';
import { buttonStyles } from '../../stylesheets/buttons';

export default function Login({ setIsAuthenticated }) {

  const navigation = useNavigation();

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  })

  const emailTextInputChange = (val) => {
    if (val.length > 0) {
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
      <View style={styles.header}>
        <Animatable.Text animation='fadeIn' style={[textStyles.headerText, textStyles.alt, textStyles.bold]}>Welcome Back!</Animatable.Text>
      </View>
      <Animatable.View 
      animation='slideInUp'
      style={styles.footer}> 
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[textStyles.subTitletext, {marginTop: 40}]}>Enter Your Details</Text>
          <Text style={formStyles.fieldLabel}>Email</Text>
          <View style={formStyles.fieldBox}>
            <AntDesign name="login" size={icons.size} color={colors.grey} />
            <TextInput 
            placeholder="Your Email"
            autoCapitalize="none"
            style={formStyles.textInput}
            onChangeText={(val) => emailTextInputChange(val)}
            />
            {data.check_textInputChange ? 
            <Animatable.View animation='bounceIn'>
            <Feather name="check-circle" size={icons.size} color={colors.success} />
            </Animatable.View>
            : null}
          </View>
          <Text style={formStyles.fieldLabel}>Password</Text>
          <View style={formStyles.fieldBox}>
            <Feather name="lock" size={icons.size} color={colors.grey} />
            <TextInput 
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry}
            onChangeText={(val) => passwordTextInputChange(val)}
            style={formStyles.textInput} />
            <TouchableWithoutFeedback onPress={() => updateSecureTextEntry()}>
              {data.secureTextEntry ?
              <Feather name="eye-off" size={icons.size} color={colors.grey} />
              :
              <Feather name="eye" size={icons.size} color={colors.grey} />
              }
            </TouchableWithoutFeedback>
          </View>
          {(data.email.length > 0 && data.password.length > 0) ?
          <TouchableOpacity style={[buttonStyles.primaryButton, , {marginTop: 35}]} onPress={() => setIsAuthenticated(true)}>
            <Text style={buttonStyles.primaryButtonText}>Sign In</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={[buttonStyles.primaryButton, , {marginTop: 35}]} onPress={() => navigation.navigate('Register')}>
            <Text style={buttonStyles.primaryButtonText}>Register</Text>
          </TouchableOpacity> 
          }
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
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
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
  },
  fieldLabel: {
    marginTop: 25,
  },
});