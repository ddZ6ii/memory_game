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
const AuthContext = createContext();

// Consumer custom Hook
const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext was used outside of its Provider!");
  }
  return context;
};

// Context provider
function AuthContextProvider({ children }) {
  const [userAccount, setUserAccount] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const LOCAL_STORAGE_KEY = "account";

  const handleChangeAccount = useCallback((userInfo) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
    setUserAccount(userInfo);
    setIsAuthenticated(Object.keys(userInfo).length > 0);
  }, []);

  const clearAccount = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setUserAccount({});
    setIsAuthenticated(false);
  }, []);

  // retrieve user info from local storage (if any)
  useEffect(() => {
    const storedAccount = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedAccount) {
      setUserAccount(JSON.parse(storedAccount));
      setIsAuthenticated(true);
    }
  }, []);

  // memoize the full context value
  const contextValue = useMemo(
    () => ({
      userAccount,
      isAuthenticated,
      handleChangeAccount,
      clearAccount,
    }),
    [userAccount, handleChangeAccount]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, useAuthContext, AuthContextProvider };

AuthContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AuthContextProvider.defaultProps = {
  children: null,
};
