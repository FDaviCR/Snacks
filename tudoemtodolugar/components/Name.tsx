import React from 'react';
import { Button, View, StyleSheet, TextInput} from 'react-native';

export default function App() {
    return (
      <View style={styles.container}>
        
        <TextInput
          style={styles.input}
          placeholder='Digite aqui...'
          placeholderTextColor="#000000"
        />

        <Button
            title='Atualizar'
        />
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
    input:{
      backgroundColor: '#999',
      padding: 10,
    }
  });