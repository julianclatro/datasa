import React from "react";
export const THEME_LIGHT = "theme-light";
export const THEME_DARK = "theme-dark";
type ThemeShade = "theme-light" | "theme-dark";
type ThemeContextType = {
  theme: ThemeShade;
  toggleTheme: () => void;
};
type ThemeProviderType = {
  children: React.ReactElement;
  defaultValue: ThemeShade;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: THEME_LIGHT,
} as ThemeContextType);

export const ThemeProvider: React.FunctionComponent<ThemeProviderType> = ({
  children,
  defaultValue = THEME_LIGHT,
}) => {
  const [theme, setTheme] = React.useState<ThemeShade>(defaultValue);

  const toggleTheme = () => {
    setTheme(theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return React.useContext(ThemeContext);
}
