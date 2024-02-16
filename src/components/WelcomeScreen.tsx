/* eslint-disable prettier/prettier */
import { Image, Pressable, ScrollView, StyleSheet, Text, View,useColorScheme } from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
    const colorScheme = useColorScheme();
  return (
    <ScrollView indicatorStyle="white" style={[styles.welcome,colorScheme === 'light' ? { backgroundColor: '#fff' }  : { backgroundColor: '#333333' }]}>
        <View style={styles.header}>
            <Image
                style={styles.logo}
                source={require('../img/logo.png')}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel={'Little Lemon Logo'}
            />
        <Text style={styles.welcomeText1} >
            Little Lemon
        </Text>
        </View>
        <Text style={[styles.welcomeText2,colorScheme === 'light' ? {color:'#000'} : {color:'#fff'}]}>Little lemon is charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        <Pressable onPress={()=>navigation.navigate("Menu")}>
            <Text style={styles.buttonText}>View Menu</Text>
        </Pressable>
    </ScrollView>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    welcome:{
        flex:1,
        backgroundColor:'#000',
    },
    welcomeText1:{
        fontSize: 32,
        color: '#EDEFEE',
        padding:40,
        textAlign:'center',
        marginTop:20,
    },
    welcomeText2:{
        fontSize: 24,
        padding:20,
        marginVertical:8,
        textAlign:'center',
    },
    logo:{
        height: 100,
        width: 100,
        marginLeft:40,
        marginTop:30,
    },
    header:{
        flexDirection:'row',
        justifyContent: 'center',
        margin: 10,
    },
    buttonText:{
        color:'#ccc',
        fontSize:28,
        textAlign:'center',
        margin:10,
    }
})