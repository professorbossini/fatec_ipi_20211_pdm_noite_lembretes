import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LembreteInput = (props) => {
  const [lembrete, setLembrete] = useState('');
  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete)
  }
  return (
    <View style={styles.lembreteInputView}>
      <TextInput 
        style={styles.lembreteTextInput}
        placeholder="Lembrar..."
        onChangeText={capturarLembrete}
        value={lembrete}
      />
      <View style={{width: '80%'}}>
        <Button 
          title="+"
          onPress={() => {
            props.onAdicionarLembrete(lembrete);
            setLembrete('') 
          }}
        />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  lembreteInputView: {
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 8,
    textAlign: 'center'

  }
})

export default LembreteInput;