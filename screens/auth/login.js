import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform, TextInput, Keyboard } from 'react-native';
import { colors } from '../../stylesheets/colors';
import { globalStyles } from '../../stylesheets/global';
import { AntDesign, Feather } from '@expo/vector-icons'; 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

export default function Login({ navigation }) {

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
        <Animatable.Text animation='fadeIn' style={styles.text_header}>Welcome Back!</Animatable.Text>
      </View>
      <Animatable.View 
      animation='fadeInUpBig'
      style={styles.footer}> 
        <Text style={styles.text_footer}>Enter your account details</Text>
        <Text style={[styles.text_footer, {marginTop: 35}]}>Email</Text>
        <View style={styles.action}>
          <AntDesign name="login" size={30} color="black" />
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
        {(data.email.length > 0 && data.password.length > 0) ?
        <TouchableOpacity style={[globalStyles.primaryButton, , {marginTop: 35}]} onPress={() => navigation.navigate('Login')}>
          <Text style={globalStyles.primaryButtonText}>Sign In</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={[globalStyles.primaryButton, , {marginTop: 35}]} onPress={() => navigation.navigate('Register')}>
          <Text style={globalStyles.primaryButtonText}>Register</Text>
        </TouchableOpacity> 
        }
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
      flex: 2,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50,
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
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