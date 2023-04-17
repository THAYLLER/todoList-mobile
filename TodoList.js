import React  from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import  { useStates } from './store';

export default function TodoList() {
  const { states, isLoading, error } = useStates();

  return (
    <View style={styles.container}>
      <FlatList
        testId="flat-list"
        data={states}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.nome}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
