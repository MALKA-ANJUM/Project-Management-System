import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parser(localStorage.getItem("user")),
    );

    const login = (userData, token) => {
        localStorage.setItem("user", stringify(userData)),
        localStorage.setItem("token", token);
        setUser(userData);
    }

    const logout = () => {
        localStorage.clear();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}