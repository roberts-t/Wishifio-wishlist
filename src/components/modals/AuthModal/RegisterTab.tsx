import React from 'react';
import { Dialog } from '@headlessui/react';
import { SignUpForm } from '../../forms/SignUpForm';

export const RegisterTab: React.FC<RegisterTabProps> = (props) => {
    return (
        <>
            <Dialog.Title
                as="h3"
                className="text-2xl text-center font-bold leading-6 text-gray-900"
            >
                Sign up
            </Dialog.Title>

            <SignUpForm />
            <div className="mt-5 border-t-2 text-center">
                <p className="text-gray-500 leading-none font-normal mt-3 text-sm">Already have an account?</p>
                <button
                    onClick={() => props.setTab(1)}
                    className="font-semibold leading-none text-blue-400 hover:text-blue-500 transition" type="button"
                >
                    Log in now
                </button>
            </div>
        </>
    );
};

interface RegisterTabProps {
    setTab: (tab: number) => void;
}