import {metrics} from './metrics';
import {fontSize} from './fontSize';
import {useColors} from './colors';

export const useTheme = () => {
  const {colors} = useColors('light');

  return {
    colors,
    metrics,
    fontSize,
  };
};
