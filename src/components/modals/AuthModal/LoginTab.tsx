import React from 'react';
import { Dialog } from '@headlessui/react';
import { LoginTabContent } from "./LoginTabContent";

export const LoginTab: React.FC<LoginTabProps> = (props) => {
    return (
        <>
            <Dialog.Title
                as="h3"
                className="text-2xl text-center font-bold leading-6 text-gray-900"
            >
                Log in
            </Dialog.Title>

            <LoginTabContent
                onSignUpClick={() => props.setTab(2)}
                closeModal={props.closeModal}
            />
        </>
    );
};

interface LoginTabProps {
    setTab: (tab: number) => void;
    closeModal: () => void;
}