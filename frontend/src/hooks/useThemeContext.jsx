import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const useUserContext = () => {
  // get the context
  const context = useContext(ThemeContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useUserContext was used outside of its Provider!");
  }

  return context;
};

export default useUserContext;
