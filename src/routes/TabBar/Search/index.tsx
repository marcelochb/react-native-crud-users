import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Search } from '@src/pages';
import { screenOptions } from '@src/routes/styles';
const Stack = createStackNavigator();

export const SearchStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
