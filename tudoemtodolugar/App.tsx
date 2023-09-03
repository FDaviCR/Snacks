import React, {useState} from 'react';
import { Text, View, StyleSheet, Button , TextInput} from 'react-native';

import Name from './components/Name';
// import { Card } from 'react-native-paper';

export default function App() {
  const [name, setName] = useState('Test');
  const [nameField, setNameField] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
          {nameField}
      </Text>
      <Name/>
      <Button title="Test 2" onPress={() => setNameField("Test 2")}/>
      
      <Button title="Test 3" onPress={() => setNameField("Test 3")}/>
      
      <Button title="Test 4" onPress={() => setNameField("Test 4")}/>
      
      <Button title="Test 5" onPress={() => setNameField("Test 5")}/>
      
      <Button title="Test 6" onPress={() => setNameField("Test 6")}/>

      { nameField != "" && <Button title='Limpar' onPress={() => setNameField("")}/> }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    margin: 10
  },
  input:{
    backgroundColor: '#999',
    padding: 10,
  }
});
