import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ItemGrid = (props) => {
  return (
      <TouchableOpacity onLongPress={props.onDelete.bind(this, props.item.key)}>
        <View key={props.item.key} style={styles.gridItemNaLista}>
            <Text style={props.nomeStyle}>{props.item.nome}</Text>
            <Text style={props.telefoneStyle}>{props.item.telefone}</Text>
        </View>
      </TouchableOpacity>
  );
}

export default ItemGrid;


const styles = StyleSheet.create({
    gridItemNaLista: {
      flexDirection: 'row',
      padding: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#666',
    },
  });
  