import React from 'react';
import { useEffect, useState } from 'react';
import { api } from '../config/request';

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({children} : AuthContextProps) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getAuthStatus = () => {
        console.log("Getting auth status")
        api.get("auth/user")
            .then((res) => {
                if (res.status === 200 && res.data) {
                    setUser(res.data);
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
                setIsLoading(false);
            }).catch(() => {
            console.error("Auth error");
            setIsAuthenticated(false);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        getAuthStatus();
    }, []);

    const value = {
        isAuthenticated,
        isLoading,
        user,
        getAuthStatus
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

interface AuthContextProps {
    children: React.ReactNode;
}

export interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: any;
    getAuthStatus: () => void;
}