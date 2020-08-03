import {propertsOfOptionTheme} from './types';

const baseColors = {
  basePrimary: '#fff',
  baseSecundary: '#F2F2F2',
  intermediate: '#707070',
  contrastPrimary: '#0D0D0D',
  contrastSecundary: '#262626',
};

export const darkTheme = {
  title: 'dark',
  backgroundColor: baseColors.contrastPrimary,
  elementsColor: baseColors.contrastSecundary,
  textPrimaryColor: baseColors.basePrimary,
  textSecundaryColor: baseColors.intermediate,
};

export const lightTheme = {
  title: 'light',
  backgroundColor: baseColors.basePrimary,
  elementsColor: baseColors.baseSecundary,
  textPrimaryColor: baseColors.contrastPrimary,
  textSecundaryColor: baseColors.intermediate,
};

export const useColors = (initialTheme: string) => {
  const optionsTheme: propertsOfOptionTheme = {
    ['light']: {
      title: 'light',
      backgroundColor: baseColors.basePrimary,
      elementsColor: baseColors.baseSecundary,
      textPrimaryColor: baseColors.contrastPrimary,
      textSecundaryColor: baseColors.intermediate,
    },
    ['dark']: {
      title: 'dark',
      backgroundColor: baseColors.contrastPrimary,
      elementsColor: baseColors.contrastSecundary,
      textPrimaryColor: baseColors.basePrimary,
      textSecundaryColor: baseColors.intermediate,
    },
  };
  return {
    colors: optionsTheme[initialTheme],
  };
};
