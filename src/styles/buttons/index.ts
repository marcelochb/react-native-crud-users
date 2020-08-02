import {colors, metrics} from '@src/theme';
import {ViewStyle} from 'react-native';

const base: ViewStyle = {
  height: metrics.buttonHeight,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

const secundaryColor: ViewStyle = {
  backgroundColor: colors.secundary,
};

const borderSecundaryColor: ViewStyle = {
  backgroundColor: 'transparent',
  borderColor: colors.secundary,
  borderStyle: 'solid',
  borderWidth: metrics.borderWidth,
};

export const baseSecundaryColor = {
  ...base,
  ...secundaryColor,
};

export const outlinedSecundaryColor = {
  ...base,
  ...borderSecundaryColor,
};
