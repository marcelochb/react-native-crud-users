import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Statistics } from '@src/pages';
import { screenOptions } from '@src/routes/styles';
const Stack = createStackNavigator();

export const StatisticsStak = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  );
};
