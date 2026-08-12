import { createAsyncStorage } from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const storage = createAsyncStorage("appDB");

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {}
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();

    function authenticate(token) {
        setAuthToken(token);
        storage.setItem('token', token);
    }

    function logout() {
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: authenticate
    }

    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}

export default AuthContextProvider;