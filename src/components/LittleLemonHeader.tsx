/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const LittleLemonHeader = () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
            Welcome to Little Lemon
        </Text>
    </View>
  );
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#F4CE14',
        flex: 0.07,
        justifyContent: 'center', // Center text vertically
        alignItems: 'center', // Center text horizontally
      },
      headerText: {
        fontSize: 28,
        color: 'black',
      },
})

export default LittleLemonHeader;

