import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconUsers from '@src/assets/icons/users.svg';
import IconSearch from '@src/assets/icons/search.svg';
import IconStatistics from '@src/assets/icons/statistics.svg';
import { UsersStack } from './Users';
import { SearchStack } from './Search';
import { StatisticsStak } from './Statistics';
import { bottomTabBarOptions, useRouteStyles } from '../styles';

const TabBottom = createBottomTabNavigator();

export const TabBar = () => {
  return (
    <TabBottom.Navigator lazy={false} tabBarOptions={() => useRouteStyles}>
      <TabBottom.Screen
        name="User"
        component={UsersStack}
        options={{
          tabBarIcon: () => <IconUsers />,
        }}
      />
      <TabBottom.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: () => <IconSearch />,
        }}
      />
      <TabBottom.Screen
        name="Statistic"
        component={StatisticsStak}
        options={{
          tabBarIcon: () => <IconStatistics />,
        }}
      />
    </TabBottom.Navigator>
  );
};
