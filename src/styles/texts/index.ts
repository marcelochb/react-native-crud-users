import {useTheme} from '@src/theme';
import {TextStyle} from 'react-native';

// import { Container } from './styles';

export const useTextStyles = () => {
  const {colors, fontSize} = useTheme();

  const textRegular: TextStyle = {
    fontFamily: 'Lato-Regular',
  };

  const baseSize: TextStyle = {
    fontSize: fontSize.base,
  };

  const largeSize: TextStyle = {
    fontSize: fontSize.large,
  };

  const largestSize: TextStyle = {
    fontSize: fontSize.largest,
  };

  const primaryColor: TextStyle = {
    color: colors.textPrimaryColor,
  };

  const secundaryColor: TextStyle = {
    color: colors.textSecundaryColor,
  };

  const basePrimaryColor: TextStyle = {
    ...textRegular,
    ...baseSize,
    ...primaryColor,
  };

  const largePrimaryColor: TextStyle = {
    ...textRegular,
    ...largeSize,
    ...primaryColor,
  };

  const largestPrimaryColor: TextStyle = {
    ...textRegular,
    ...largestSize,
    ...primaryColor,
  };

  const baseSecundaryColor: TextStyle = {
    ...textRegular,
    ...baseSize,
    ...secundaryColor,
  };

  const largeSecundaryColor: TextStyle = {
    ...textRegular,
    ...largeSize,
    ...secundaryColor,
  };

  const largestSecundaryColor: TextStyle = {
    ...textRegular,
    ...largestSize,
    ...secundaryColor,
  };

  return {
    texts: {
      basePrimaryColor,
      largePrimaryColor,
      largestPrimaryColor,
      baseSecundaryColor,
      largeSecundaryColor,
      largestSecundaryColor,
    },
  };
};
