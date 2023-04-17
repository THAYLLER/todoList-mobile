import React from 'react';
import { render } from '@testing-library/react-native';
import TodoList from '../TodoList';

test('renders FlatList', () => {
  const { getByTestId } = render(<TodoList />);
  const flatList = getByTestId('flat-list');
  expect(flatList).toBeTruthy();
});
