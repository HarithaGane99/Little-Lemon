/* eslint-disable prettier/prettier */
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {

    const [email,onEmailChange]=useState('');
    const [password,onPasswordChange]=useState('');
  return (
    <KeyboardAvoidingView style={styles.container}>
        <ScrollView >
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
                placeholder='email'
                value={email}
                onChangeText={onEmailChange}
                style={styles.input}
                keyboardType={'email-address'}
            />
            <TextInput
                placeholder='password'
                value={password}
                onChangeText={onPasswordChange}
                style={styles.input}
                keyboardType={'default'}
                secureTextEntry={true}
            />
        </ScrollView>
    </KeyboardAvoidingView>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
      },
      input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
      }
})