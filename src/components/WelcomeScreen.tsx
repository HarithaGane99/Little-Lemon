/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style={styles.welcome}>
        <Text style={styles.welcomeText1} numberOfLines={2}>
            Welcome to Little
            <Text> Lemon</Text>
        </Text>
        <Text style={styles.welcomeText2}>Little lemon is charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
    </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    welcome:{
        alignItems: 'center',
        marginTop:0,
    },
    welcomeText1:{
        fontSize: 30,
        color: 'white',
        marginHorizontal:40,
        textAlign:'center',
    },
    welcomeText2:{
        color: 'white',
        fontSize: 26,
        marginTop:30,
        textAlign:'center',
        margin:10,
    }
})