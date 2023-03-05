import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

const url = "http://localhost:4000/api/users";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${url}/signup`, { email, password });
      dispatch({ type: "SIGNUP_SUCCESS", payload: response.data });
      return response.data;
    } catch (error) {
      setError(error);
      dispatch({ type: "SIGNUP_FAILURE", payload: error });
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};

export default useSignup;
