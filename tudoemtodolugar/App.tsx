import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

// import { Card } from 'react-native-paper';

export default function App() {
  const [name, setName] = useState('Test');
  let age: number = 33;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        {name}
      </Text>

      <Button title="Test 2" onPress={() => setName("Test 2")}/>
      
      <Button title="Test 3" onPress={() => setName("Test 3")}/>
      
      <Button title="Test 4" onPress={() => setName("Test 4")}/>
      
      <Button title="Test 5" onPress={() => setName("Test 5")}/>
      
      <Button title="Test 6" onPress={() => setName("Test 6")}/>
    </SafeAreaView>
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
