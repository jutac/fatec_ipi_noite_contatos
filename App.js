import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import FormCadastro from './components/FormCadastro';
import ItemGrid from './components/ItemGrid';

export default function App() {

  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(0);

  const cadastrar = (nome, telefone) => {
    console.log("Nome: "+nome+" - Telefone: "+telefone);
    setContadorContatos(contadorContatos+1);
    setContatos((x) => ([...x, {key: contadorContatos.toString(), nome: nome, telefone: telefone}]))
  };

  const removerContato = (keyASerRemovida) => {
    setContatos(lembretes => {
      return lembretes.filter(l => (l.key != keyASerRemovida));
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Contato</Text>
      <FormCadastro onCadastrar={cadastrar} />
      {/* <View>
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
          <Button title="Cadastrar" onPress={cadastrar} />
        </View>
      </View> */}
      <Text style={styles.titulo}>Lista de Contatos</Text>
      {/* Cabecalho */}
      <View style={styles.gridHeader}>
        <Text style={styles.gridColumnNome}>NOME</Text>
        <Text style={styles.gridColumnTelefone}>TELEFONE</Text>
      </View>
      {/*substuir o ScrollView e todo o seu conteúdo*/}
      <FlatList
        data={contatos}
        renderItem={
          (x) => (
            <ItemGrid
              item={x.item}
              onDelete={removerContato}
              nomeStyle={styles.gridColumnNome}
              telefoneStyle={styles.gridColumnTelefone}
            />
            // <View key={x.item.key} style={styles.gridItemNaLista}>
            //   <Text style={styles.gridColumnNome}>{x.item.nome}</Text>
            //   <Text style={styles.gridColumnTelefone}>{x.item.telefone}</Text>
            // </View>
          )
        }
      />
    </View>
  );
}

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
  gridHeader: {
    flexDirection: 'row',
    padding: 4,
    borderTopWidth: 3,
    borderTopColor: '#666',
    borderBottomWidth: 3,
    borderBottomColor: '#666',
  },
  gridColumnNome: {
    width: 150,
    padding: 2,
    alignItems: 'flex-end'
  },
  gridColumnTelefone: {
    width: 150,
    padding: 2,
    alignItems: 'flex-end'
  },
});
