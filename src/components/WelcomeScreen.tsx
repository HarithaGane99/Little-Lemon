/* eslint-disable prettier/prettier */
import { Image, Pressable,  StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
      <Image resizeMode='contain'
        style={styles.logo}
        source={require('../assets/little-lemon-logo.png')}
      />
      <Text style={styles.normalText} numberOfLines={2}>Littlle Lemon, your local
        <Text> Mediterranean Bistro</Text>
      </Text>
      <Pressable style={styles.button} onPress={()=>navigation.navigate('Subscribe')}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
  </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({

    logo:{
        height: 250,
        width: 150,
        marginTop:70,
    },
    container: {
        flex:1,
        paddingTop: 50,
        alignItems:'center',
      },
    normalText:{
      color:'#000',
      fontSize:26,
      marginTop:40,
      textAlign:'center',
      fontWeight:'900',
    },
    button:{
      backgroundColor:'green',
      width:'90%',
      height:40,
      alignItems:'center',
      justifyContent:'center',
      marginTop:70,
      borderRadius:10,
    },
    buttonText:{
      color:'#000',
      fontSize:24,
    }
})