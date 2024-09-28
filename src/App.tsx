import React from "react";
import { Text, View , Image, FlatList  } from "react-native";
import data from './components/Data.json'
import Card from './components/product_cards'

function App() {
  return(
    <View>
      <FlatList
     
      data={data}
      renderItem={({item}) => <Card products = {item}/>}
      />
      </View>
  );
}

export default App; 
