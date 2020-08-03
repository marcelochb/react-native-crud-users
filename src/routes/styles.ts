import {StackNavigationOptions} from '@react-navigation/stack';
import {BottomTabBarOptions} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';

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

export const useRouteStyles = () => {
  const {colors} = useTheme();

  // const screenOptionStyle: StackNavigationOptions = {
  //   headerTintColor: colors.textPrimaryColor,
  //   headerBackTitleVisible: false,
  //   headerTitleAlign: 'center',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //     fontFamily: 'Lato-Regular',
  //   },
  // };

  const bottomTabBarOptionStyle: BottomTabBarOptions = {
    style: {
      backgroundColor: colors.elementsColor,
      height: '9.5%',
    },
    activeTintColor: colors.textPrimaryColor,
    inactiveTintColor: colors.textSecundaryColor,
    tabStyle: {
      backgroundColor: colors.elementsColor,
      // marginBottom: spacing.baseMargin,
    },
    labelStyle: {
      fontFamily: 'Lato-Regular',
      fontSize: 11,
    },
  };
  return bottomTabBarOptionStyle;
};
