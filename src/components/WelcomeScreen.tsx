/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <ScrollView indicatorStyle="white" style={styles.welcome}>
        <Text style={styles.welcomeText1} numberOfLines={2}>
            Welcome to
            <Text> Little Lemon</Text>
        </Text>
        <Text style={styles.welcomeText2}>Little lemon is charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
    </ScrollView>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    welcome:{
        flex:1,
    },
    welcomeText1:{
        fontSize: 50,
        color: '#EDEFEE',
        padding:40,
        textAlign:'center',
    },
    welcomeText2:{
        color: '#EDEFEE',
        fontSize: 38,
        padding:20,
        marginVertical:8,
        textAlign:'center',
    }
})