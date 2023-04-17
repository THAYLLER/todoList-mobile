import React from 'react';
import { View } from 'react-native';
import TodoList from './TodoList';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <TodoList />
    </View>
  );
}
