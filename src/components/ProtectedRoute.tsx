import React from 'react';
import { Navigate } from 'react-router-dom';
import { LoadingPage } from '../screens/LoadingPage';

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
    const renderPage = () => {
        console.log(props.user, props.isLoading);
        if (props.isLoading) {
            return <LoadingPage />
        } else if (!props.user) {
            return <Navigate to="/" replace />
        }
        return props.children;
    }

    return renderPage();
};

interface ProtectedRouteProps {
    user: any;
    isAuthenticated: boolean;
    isLoading: boolean;
    children: any;
}