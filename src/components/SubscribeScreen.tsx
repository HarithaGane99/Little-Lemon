/* eslint-disable prettier/prettier */
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {

  const [email, setEmail] = useState('');



  return (
    <View style={styles.container}>
     <Image resizeMode='contain'
        style={styles.logo}
        source={require('../assets/little-lemon-logo-grey.png')}
      />
       <Text style={styles.normalText} numberOfLines={2}>Subscribe to our newsletter for our
        <Text> latest delicious recipes</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Type your email"
        keyboardType={'email-address'}
        placeholderTextColor="#000"
        value={email}
        onChangeText={setEmail}
      />
      <Pressable style={styles.button} onPress={()=>Alert.alert("Thanks for subscribing, stay tuned!")}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>

    </View>
  )
}

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    marginTop:40,
  },
  logo: {
    width: 100,
    height: 120,
  },
  normalText:{
    color:'#000',
    fontSize:22,
    marginTop:40,
    textAlign:'center',
  },
  input:{
    marginTop:36,
    width:'85%',
    borderColor:'#000',
    height:40,
    borderWidth:1,
    borderRadius:9,
    padding:10,
    color: '#000',
  },
  button:{
    backgroundColor:'green',
    width:'90%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius:10,
  },
  buttonText:{
    color:'#000',
    fontSize:24,
  }
  
})