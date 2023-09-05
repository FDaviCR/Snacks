import React from 'react';
import { Button, Text, View, StyleSheet, TextInput} from 'react-native';

type Props = {
  name: string;
}

export const Name = ({name}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite aqui...'
        placeholderTextColor="#000000"
      />
      <Button
        title='Atualizar'
        onPress={() => {}}
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