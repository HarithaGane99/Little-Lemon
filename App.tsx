/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {  View } from 'react-native';
import LittleLemonHeader from './src/components/LittleLemonHeader';
import LittleLemonFooter from './src/components/LittleLemonFooter';
import WelcomeScreen from './src/components/WelcomeScreen';
import MenuItems from './src/components/MenuItems';
import Feedback from './src/components/Feedback';
import LoginScreen from './src/components/LoginScreen';

export class App extends Component {
  render() {
    return (
      <>
        <View style={{flex:1, backgroundColor:'#495E57',}}>
          <LittleLemonHeader/>
          <LoginScreen/>
          <View style={{ backgroundColor: '#333333',}}>
            <LittleLemonFooter/>
          </View>
        </View>
      </>
    );
  }
}

export default App;
