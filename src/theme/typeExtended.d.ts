import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      title: string;
      backgroundColor: string;
      elementsColor: string;
      textPrimaryColor: string;
      textSecundaryColor: string;
    };
    fontSize: {
      base: string;
      large: string;
      lagest: string;
    };
    metrics: {
      smallest: string;
      small: string;
      base: string;
      large: string;
      lagest: string;
      inputHeight: string;
      inputWidthBase: string;
      inputWidthLarge: string;
      buttonHeight: string;
      radiusBase: string;
      radiusLarge: string;
      radiusRounded: string;
      borderWidth: string;
    };
  }
}
