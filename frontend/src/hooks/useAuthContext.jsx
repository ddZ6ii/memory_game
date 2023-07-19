import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuthContext = () => {
  // get the context
  const context = useContext(AuthContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useAuthContext was used outside of its Provider!");
  }

  return context;
};

export default useAuthContext;
