import PropTypes from "prop-types";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// Create context
const ThemeContext = createContext();

// Consumer custom Hook
const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("userThemeContext was used outside of its Provider!");
  }
  return context;
};

// Context provider
function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const LOCAL_STORAGE_KEY = "isDarkMode";

  const handleChangeDarkMode = useCallback((bool) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bool));
    setIsDarkMode(bool);
  }, []);

  // retrieve user's preference from local storage (if any)
  useEffect(() => {
    const storedMode = localStorage.getItem(LOCAL_STORAGE_KEY);
    // set initial light/dark theme based on either user's saved preference (if any) or browser preference
    if (storedMode) {
      setIsDarkMode(JSON.parse(storedMode) === true);
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // memoize the full context value
  const contextValue = useMemo(
    () => ({
      isDarkMode,
      handleChangeDarkMode,
    }),
    [isDarkMode, handleChangeDarkMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, useThemeContext, ThemeContextProvider };

ThemeContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ThemeContextProvider.defaultProps = {
  children: null,
};
