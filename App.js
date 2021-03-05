import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text,  FlatList } from 'react-native';
import LembreteInput from './components/LembreteInput';

import LembreteItem from './components/LembreteItem';

export default function App() {
  const [lembretes, setLembretes] = useState([]);
  const [contador, setContador] = useState(0);
  
  const adicionarLembrete = (lembrete) => {
    setLembretes(lembretes => {
      setContador (contador + 1);
      return [{key: contador.toString(), value: lembrete}, ...lembretes];
    })
  }
  const removerLembrete = (keyASerRemovida) => {
    setLembretes(lembretes => {
      return lembretes.filter((lembrete) => {
        return lembrete.key !== keyASerRemovida;
      });
    });
  }
  return (
    <View style={styles.container}>
      <LembreteInput onAdicionarLembrete={adicionarLembrete}/>     
      <View>
          <View
            style={{width: '80%', alignSelf: 'center'}}
          >
            <FlatList 
              data={lembretes}
              renderItem = {lembrete => (
                <LembreteItem 
                  lembrete={lembrete.item.value} 
                  chave={lembrete.item.key}
                  onDelete={removerLembrete}
                />
              )}
            />
          </View>     
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 40 
  },
  lembreteInputView: { 
    alignItems: 'center',
    marginBottom: 12 
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 4,
    textAlign: 'center'
  },
  lembreteInputButton: { 
    width: '80%' 
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#DDD',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 16,
    alignItems: 'center'
  }
})


