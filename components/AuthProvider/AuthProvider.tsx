'use client'

import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setIsAuthenticated(true);
            setLoading(false);
        } else {
            console.log("HHHHHHHHHHHHHHHH")
            setIsAuthenticated(false);
        }
        
    }, []);

    const login = (token: string) => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        setIsAuthenticated(false);
    };

    if (loading){
        return <div></div>
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};