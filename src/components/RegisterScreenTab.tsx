import React from 'react';
import { RegisterTabContent } from "./modals/AuthModal/RegisterTabContent";

export const RegisterScreenTab: React.FC<RegisterScreenTabProps> = (props) => {
    return (
        <>
            <h1 className="font-semibold text-3xl">
                Sign up
            </h1>
            <p className="text-gray-700">
                Start to save your wishes in your account!
            </p>

            <RegisterTabContent onLoginClick={props.onLoginClick} />
        </>
    );
};

interface RegisterScreenTabProps {
    onLoginClick: () => void;
}