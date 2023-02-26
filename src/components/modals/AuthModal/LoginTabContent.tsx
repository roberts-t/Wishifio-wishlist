import React from 'react';
import { SignInForm } from "../../forms/SignInForm";

export const LoginTabContent: React.FC<LoginTabContentProps> = (props) => {
    return (
        <>
            <SignInForm closeModal={props.closeModal} redirect={props.redirect} />
            <div className="text-center mt-0.5">
                <a href="src/components/modals#" className="text-sm text-blue-500 text-right">
                    Forgot Your password?
                </a>
            </div>
            <div className="mt-5 border-t-2 text-center">
                <p className="text-gray-500 leading-none font-normal mt-3 text-sm">Don't have an account?</p>
                <button
                    onClick={props.onSignUpClick}
                    className="font-semibold leading-none text-blue-400 hover:text-blue-500 transition" type="button"
                >
                    Sign up now
                </button>
            </div>
        </>
    );
};

interface LoginTabContentProps {
    onSignUpClick: () => void;
    closeModal?: () => void;
    redirect?: string;
}