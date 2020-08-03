import {useTheme} from '@src/theme';
import {TextStyle} from 'react-native';

// import { Container } from './styles';

export const useTexts = () => {
  const {colors, typography} = useTheme();

  const textRegular: TextStyle = {
    fontFamily: 'Lato-Regular',
  };

  const baseSize: TextStyle = {
    fontSize: typography.base,
  };

  const largeSize: TextStyle = {
    fontSize: typography.large,
  };

  const largestSize: TextStyle = {
    fontSize: typography.largest,
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
