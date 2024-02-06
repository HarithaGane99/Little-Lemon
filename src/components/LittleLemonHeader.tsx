/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const LittleLemonHeader = () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText} >
             Little Lemon
        </Text>
    </View>
  );
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#EE9972',
        justifyContent: 'center', // Center text vertically
        alignItems: 'center', // Center text horizontally
      },
      headerText: {
        fontSize: 30,
        color: 'black',
      },
})

export default LittleLemonHeader;

