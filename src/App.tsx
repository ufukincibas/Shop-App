import React from "react";
import { Text, View , Image, FlatList, TextInput, StyleSheet  } from "react-native";
import data from './components/Data.json'
import Card from './components/product_cards'

function App() {
  return(
    <View>
      <Text style={styles.title}>PATİKASTORE</Text>
      <TextInput style={styles.input} 
      placeholder="Ara..."/>
      <FlatList
     
      data={data}
      renderItem={({item}) => <Card products = {item}
      numColumns={2}/>}
      />
      </View>
  );
}

export default App; 

const styles =StyleSheet.create({
  title:{
    color:'purple',
    fontSize:30,
    fontWeight:'bold',
  },
  input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})