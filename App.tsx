/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {  View } from 'react-native';
import LittleLemonHeader from './src/components/LittleLemonHeader';
import LittleLemonFooter from './src/components/LittleLemonFooter';
import WelcomeScreen from './src/components/WelcomeScreen';
import MenuItems from './src/components/MenuItems';

export class App extends Component {
  render() {
    return (
      <>
      <View style={{
        flex:1,
        backgroundColor:'#495E57',
         }}>
        <LittleLemonHeader/>
        <WelcomeScreen/>
        {/* <MenuItems/> */}
      </View>
      <View style={{ backgroundColor: '#495E57',flex:0.05 }}>
        <LittleLemonFooter/>
      </View>
      </>
    );
  }
}

export default App;
