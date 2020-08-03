import {useTheme} from '@src/theme';
import {ViewStyle} from 'react-native';

export const useButtons = () => {
  const {colors, metrics} = useTheme();
  const base: ViewStyle = {
    height: metrics.buttonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const secundaryColor: ViewStyle = {
    backgroundColor: colors.elementsColor,
  };

  const borderSecundaryColor: ViewStyle = {
    backgroundColor: 'transparent',
    borderColor: colors.textPrimaryColor,
    borderStyle: 'solid',
    borderWidth: metrics.borderWidth,
  };

  const baseSecundaryColor = {
    ...base,
    ...secundaryColor,
  };

  const outlinedSecundaryColor = {
    ...base,
    ...borderSecundaryColor,
  };

  return {
    buttons: {
      baseSecundaryColor,
      outlinedSecundaryColor,
    },
  };
};
