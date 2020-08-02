import {colors, typography, metrics} from '@src/theme';
import {TextStyle} from 'react-native';

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
  color: colors.primary,
};

const secundaryColor: TextStyle = {
  color: colors.secundary,
};

const tertiaryColor: TextStyle = {
  color: colors.tertiary,
};

export const basePrimaryColor: TextStyle = {
  ...textRegular,
  ...baseSize,
  ...primaryColor,
};

export const largePrimaryColor: TextStyle = {
  ...textRegular,
  ...largeSize,
  ...primaryColor,
};

export const largestPrimaryColor: TextStyle = {
  ...textRegular,
  ...largestSize,
  ...primaryColor,
};

export const baseSecundaryColor: TextStyle = {
  ...textRegular,
  ...baseSize,
  ...secundaryColor,
};

export const largeSecundaryColor: TextStyle = {
  ...textRegular,
  ...largeSize,
  ...secundaryColor,
};

export const largestSecundaryColor: TextStyle = {
  ...textRegular,
  ...largestSize,
  ...secundaryColor,
};

export const baseTertiaryColor: TextStyle = {
  ...textRegular,
  ...baseSize,
  ...tertiaryColor,
};

export const largeTertiaryColor: TextStyle = {
  ...textRegular,
  ...largeSize,
  ...tertiaryColor,
};

export const largestTertiaryColor: TextStyle = {
  ...textRegular,
  ...largestSize,
  ...tertiaryColor,
};
