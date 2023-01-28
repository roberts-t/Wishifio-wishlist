import React from 'react';
import { Dialog } from '@headlessui/react';
import { SignInForm } from '../../forms/SignInForm';

export const LoginTab: React.FC<LoginTabProps> = (props) => {
    return (
        <>
            <Dialog.Title
                as="h3"
                className="text-2xl text-center font-bold leading-6 text-gray-900"
            >
                Log in
            </Dialog.Title>

            <SignInForm closeModal={props.closeModal} />
            <div className="text-center mt-0.5">
                <a href="src/components/modals#" className="text-sm text-blue-500 text-right">
                    Forgot Your password?
                </a>
            </div>
            <div className="mt-5 border-t-2 text-center">
                <p className="text-gray-500 leading-none font-normal mt-3 text-sm">Don't have an account?</p>
                <button
                    onClick={() => props.setTab(2)}
                    className="font-semibold leading-none text-blue-400 hover:text-blue-500 transition" type="button"
                >
                    Sign up now
                </button>
            </div>
        </>
    );
};

interface LoginTabProps {
    setTab: (tab: number) => void;
    closeModal: () => void;
}