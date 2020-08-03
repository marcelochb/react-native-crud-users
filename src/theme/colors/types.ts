type propertsOfTheme = {
  title: string;
  backgroundColor: string;
  elementsColor: string;
  textPrimaryColor: string;
  textSecundaryColor: string;
};

export type propertsOfOptionTheme = {
  [key: string]: propertsOfTheme;
};
