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

  const handleChangeDarkMode = useCallback((bool) => {
    // write new value to local storage
    localStorage.setItem("isDarkMode", JSON.stringify(bool));
    // toggle theme context value
    setIsDarkMode(bool);
  }, []);

  useEffect(() => {
    // get user's preference from local storage (if any)
    const hasUserSavedTheme = localStorage.getItem("isDarkMode");
    console.log("ContextProvider re-rendered");

    // set initial light/dark theme based on either user's saved preference (if any) or browser preference
    if (hasUserSavedTheme) {
      setIsDarkMode(JSON.parse(hasUserSavedTheme) === true);
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
