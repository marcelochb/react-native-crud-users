import {StackNavigationOptions} from '@react-navigation/stack';
import {BottomTabBarOptions} from '@react-navigation/bottom-tabs';

export const screenOptions: StackNavigationOptions = {
  headerTintColor: '#000',
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
};

export const bottomTabBarOptions: BottomTabBarOptions = {
  style: {
    backgroundColor: '#58585A',
    // borderTopWidth: 5,
    // borderTopColor: '#58585A',
    height: '9.5%',
  },
  activeTintColor: '#fff',
  inactiveTintColor: 'rgba(255,255,255,0.6)',
  tabStyle: {
    backgroundColor: '#58585A',
    // marginBottom: spacing.baseMargin,
  },
  labelStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 11,
  },
};
