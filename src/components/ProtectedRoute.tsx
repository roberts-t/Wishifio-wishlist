import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoadingPage } from '../screens/LoadingPage';
import { AuthContext, AuthContextType } from "../context/AuthContext";

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({screen, guestOnly}) => {

    const { isLoading, user } = useContext(AuthContext) as AuthContextType;

    const renderPage = () => {
        if (isLoading) {
            return <LoadingPage />
        } else if (guestOnly && user) {
            return <Navigate to="/" replace />
        } else if (!guestOnly && !user) {
            return <Navigate to="/" replace />
        }
        return screen;
    }

    return renderPage();
};

interface ProtectedRouteProps {
    screen: JSX.Element;
    guestOnly?: boolean;
}