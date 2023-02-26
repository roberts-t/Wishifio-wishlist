import React from 'react';
import { Dialog } from '@headlessui/react';
import { RegisterTabContent } from "./RegisterTabContent";

export const RegisterTab: React.FC<RegisterTabProps> = (props) => {
    return (
        <>
            <Dialog.Title
                as="h3"
                className="text-2xl text-center font-bold leading-6 text-gray-900"
            >
                Sign up
            </Dialog.Title>

            <RegisterTabContent onLoginClick={() => props.setTab(1)} />
        </>
    );
};

interface RegisterTabProps {
    setTab: (tab: number) => void;
}