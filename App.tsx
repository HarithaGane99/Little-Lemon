/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LittleLemonHeader from './src/components/LittleLemonHeader';
import LittleLemonFooter from './src/components/LittleLemonFooter';
import LoginScreen from './src/components/LoginScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SubscribeScreen from './src/components/SubscribeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{headerTitleAlign:'center'}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Subscribe" component={SubscribeScreen} />
          </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerContainer: { backgroundColor: '#333333' },
});
