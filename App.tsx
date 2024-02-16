/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {  Image, StyleSheet, View } from 'react-native';
import LittleLemonHeader from './src/components/LittleLemonHeader';
import LittleLemonFooter from './src/components/LittleLemonFooter';
import WelcomeScreen from './src/components/WelcomeScreen';
import MenuItems from './src/components/MenuItems';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/components/LoginScreen';

const Stack = createNativeStackNavigator();



export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader/>
            <Stack.Navigator 
              initialRouteName='LogIn' 
              screenOptions={{
                headerStyle:{backgroundColor:'#03fc2c'},
                headerTintColor:'#fff',
                headerTitleStyle:{
                  fontWeight:'bold',
                }
            }}>
              <Stack.Screen name='LogIn' component={LoginScreen}/>
              <Stack.Screen name='Welcome' component={WelcomeScreen}/>
              <Stack.Screen name='Menu' component={MenuItems}/>
            </Stack.Navigator>
          <LittleLemonFooter/>
        </View>
      </NavigationContainer>
    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

