/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

const menuItemsToDisplay = [' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',]


const MenuItems = () => {
  return (
    <View style={{flex:0.75}}>
      <ScrollView style={styles.menuContainer} indicatorStyle='white'>
        <Text style={styles.menuText}>Menu Items</Text>
        <Text style={styles.itemText}>
            {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  )
}

export default MenuItems;

const styles = StyleSheet.create({
    menuContainer:{
        padding:40,
        backgroundColor:'black',
    },
    menuText:{
        fontSize:40,
        flexWrap:'wrap',
        color:'white',
    },
    itemText:{
        color: '#F4CE14',
        fontSize: 36,
    }
})