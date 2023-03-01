import { AuthContext } from "../context/AuthenContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      "useAuthContext must be used inside an AuthenContextProvider"
    );
  }

  return context;
};
