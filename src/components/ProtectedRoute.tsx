import React, { ReactElement, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoadingPage } from '../screens/LoadingPage';
import { AuthContext, AuthContextType } from "../context/AuthContext";

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({screen}) => {

    const { isLoading, user } = useContext(AuthContext) as AuthContextType;

    const renderPage = () => {
        if (isLoading) {
            return <LoadingPage />
        } else if (!user) {
            return <Navigate to="/" replace />
        }
        return screen;
    }

    return renderPage();
};

interface ProtectedRouteProps {
    screen: ReactElement;
}