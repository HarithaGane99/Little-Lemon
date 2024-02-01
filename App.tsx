/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {  View } from 'react-native';
import LittleLemonHeader from './src/components/LittleLemonHeader';
import LittleLemonFooter from './src/components/LittleLemonFooter';
import WelcomeScreen from './src/components/WelcomeScreen';

export class App extends Component {
  render() {
    return (
      <>
      <View style={{
        flex:0.1,
        backgroundColor:'#495E57',
         }}>
        <LittleLemonHeader/>
      </View>
      <View style={{ backgroundColor: '#495E57', flex:0.85,}}>
        <WelcomeScreen/>
      </View>
      <View style={{ backgroundColor: '#495E57',flex:0.05 }}>
        <LittleLemonFooter/>
      </View>
      </>
    );
  }
}

export default App;
