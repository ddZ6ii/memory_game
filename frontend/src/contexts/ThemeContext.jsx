import PropTypes from "prop-types";
import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const ThemeContext = createContext();

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

export { ThemeContext, ThemeContextProvider };

ThemeContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ThemeContextProvider.defaultProps = {
  children: null,
};
