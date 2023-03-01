import { createContext, useCallback, useReducer } from "react";

export const AuthContext = createContext()

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
              ...state,
                user: action.payload
            }
        case "LOGOUT":
            return {
              ...state,
                user: null
            }
        default:
            return state
    }
}

export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(authReducer, {
        user: null
    });

    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
