import React from "react";

export const THEME_LIGHT = "theme-light";
export const THEME_DARK = "theme-dark";

export const ThemeContext = React.createContext(THEME_LIGHT);

export const ThemeProvider = ({ children, defaultValue = THEME_LIGHT }) => {
  const [theme, setTheme] = React.useState(defaultValue);

  const toggleTheme = () => {
    setTheme(theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
