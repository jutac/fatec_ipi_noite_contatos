import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

// import { Container } from './styles';

const FormCadastro = (props) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  return (
    <View>
        <View style={styles.formField}>
            <Text>Nome:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Preencha o nome"
              onChangeText={(x) => setNome(x)}
              clearButtonMode='while-editing'
              textContentType='name'
            />
        </View>
        <View style={styles.formField}>
            <Text>Telefone:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Preencha o telefone"
              onChangeText={(x) => setTelefone(x)}
              clearButtonMode='while-editing'
              textContentType='telephoneNumber'
            />
        </View>
        <View style={styles.cadastroBtn}>
          <Button title="Cadastrar" onPress={() => props.onCadastrar(nome, telefone)} />
        </View>
    </View>
  );
}

export default FormCadastro;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      marginTop: 10,
      marginBottom: 5,
      fontFamily: 'arial',
      fontSize: 20,
      fontWeight: 'bold',
      color: '#4B0082',
    },
    formField: {
      margin: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    textInput: {
      width: 200,
      marginLeft: 4,
      padding: 5,
      borderWidth: 2,
      borderColor: '#888',
      borderRadius: 4,
      alignItems: 'center',
    },
    cadastroBtn: {
      marginTop: 5,
      marginBottom: 10,
    },
});
  