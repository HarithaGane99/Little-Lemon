/* eslint-disable prettier/prettier */
import { SectionList,  StyleSheet, Text, View } from 'react-native'
import React from 'react';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
]


const Seperator = ()=><View style={styles.seperator}></View>

const Footer = ()=><View style={styles.footer}><Text style={styles.footerText}>All rights reserved by Little Lemon, 2024</Text></View>


const Item = ({ name,price}) => {
  return(
      <View style={styles.itemsContainer}>
        <Text style={styles.itemText}>{name}</Text>
        <Text style={styles.itemText}>{price}</Text>
      </View>
  )
}


const MenuItems = () => {

  const renderItem = ({item}) => <Item name={item.name} price={item.price}/>;

  const renderSectionHeader = ({section : {title}})=>(
    <View style={styles.headerStyle}>
      <Text style={styles.sectionHeader}>{title}</Text>
    </View>
  )
  return (
      <View style={styles.menuContainer} >
        <SectionList
          keyExtractor={(item,index)=>item+index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
        />
      </View>
  )
}

export default MenuItems;

const styles = StyleSheet.create({
  menuContainer: {
    flex:1,
    backgroundColor:'#333333',
  },

  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  itemsContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seperator:{
    borderBottomWidth:1,
    borderColor:'#EDEFEE',
  },
  headerText:{
    fontSize:26,
    color:'#000',
    textAlign:'center',
  },
  footerText:{
    fontSize: 18,
    color: 'black',
    textAlign:'center',
  },
  sectionHeader: {
    backgroundColor: '#F4CE14',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  footer:{
    backgroundColor:'#EE9972',
    marginBottom:10,
  },
  headerStyle: {
    backgroundColor: '#F4CE14',
  },
})

