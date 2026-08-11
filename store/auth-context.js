import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticating: false,
    authenticate: () => {},
    logout: () => {}
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();

    function authenticate(token) {
        setAuthToken(token);
    }

    function logout() {
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticating: !!authToken,
        authenticate: authenticate,
        logout: authenticate
    }

    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}

export default AuthContextProvider;