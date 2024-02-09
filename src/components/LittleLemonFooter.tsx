/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class LittleLemonFooter extends Component {
  render() {
    return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>All rights reserved by Little Lemon, 2024</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#EE9972',
        marginBottom:10,
      },
      footerText: {
        fontSize: 18,
        color: 'black',
        textAlign:'center',
      },
})
