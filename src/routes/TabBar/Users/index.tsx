import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Users } from '@src/pages';
import { screenOptions } from '@src/routes/styles';
const Stack = createStackNavigator();

export const UsersStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
};
