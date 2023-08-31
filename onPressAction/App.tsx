import React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';

const App = () => {
  const handleButton = () =>{
    alert("TESTE BUTTON!");
  };

  const handleText = () =>{
    alert("TESTE TEXT!");
  };

  return(
    <View>
      <Text onPress={handleText}> Exemplo </Text>
      <ImageBackground 
        source={require('./assets/pirate.png')}
        style={{width:300, height:300}}  
      >
        
      </ImageBackground>

      <Button title={"Clique Aqui!"} onPress={handleButton}/>
    </View>
  );
}

export default App;