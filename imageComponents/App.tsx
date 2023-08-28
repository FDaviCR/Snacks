import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

const App = () => {
  return(
    <View>  
      <Image
        source={require('./assets/pirate.png')}
        style={{width:300, height:300}}  
      />

      <Text>----------------------------------------------------</Text>

      <ImageBackground 
        source={require('./assets/pirate.png')}
        style={{width:300, height:300}}  
      >
        <Text style={{color: "#FF0000"}}> -------------------- Exemplo ---------- </Text>
        <Text> -------------------- Exemplo ---------- </Text>
        <Text> -------------------- Exemplo ---------- </Text>
        <Text> -------------------- Exemplo ---------- </Text>
        <Text style={{color: "#FF0000"}}> -------------------- Exemplo ---------- </Text>
        <Text> -------------------- Exemplo ---------- </Text>
        <Text> -------------------- Exemplo ---------- </Text>
        <Text> -------------------- Exemplo ---------- </Text>
        <Text style={{color: "#FF0000"}}> -------------------- Exemplo ---------- </Text>
      </ImageBackground>
    </View>
  );
}

export default App;