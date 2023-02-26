import React from 'react';
import { SignUpForm } from "../../forms/SignUpForm";

export const RegisterTabContent: React.FC<RegisterTabContentProps> = (props) => {
    return (
        <>
            <SignUpForm />
            <div className="mt-5 border-t-2 text-center">
                <p className="text-gray-500 leading-none font-normal mt-3 text-sm">Already have an account?</p>
                <button
                    onClick={props.onLoginClick}
                    className="font-semibold leading-none text-blue-400 hover:text-blue-500 transition" type="button"
                >
                    Log in now
                </button>
            </div>
        </>
    );
};

interface RegisterTabContentProps {
    onLoginClick: () => void;
}