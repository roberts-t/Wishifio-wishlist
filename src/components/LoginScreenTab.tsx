import React from 'react';
import { LoginTabContent } from "./modals/AuthModal/LoginTabContent";

export const LoginScreenTab: React.FC<LoginScreenTabProps> = (props) => {
    return (
        <>
            <h1 className="font-semibold sm:text-3xl text-2xl">
                Log in
            </h1>
            <p className="text-gray-700">
                Save your wishes in your account!
            </p>

            <LoginTabContent onSignUpClick={props.onSignUpClick} redirect={"/"} />
        </>
    );
};

interface LoginScreenTabProps {
    onSignUpClick: () => void;
}