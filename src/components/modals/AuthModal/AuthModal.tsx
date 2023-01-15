import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { LoginTab } from './LoginTab';
import { RegisterTab } from './RegisterTab';


export const AuthModal: React.FC<AuthModalProps> = (props) => {

    const closeModal = () => {
        props.setIsOpen(false);
    }

    const renderTab = () => {
        if (props.tab === 1) return <LoginTab setTab={props.setTab} />;
        else if (props.tab === 2) return <RegisterTab setTab={props.setTab}  />;
    }

    return (
        <>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {renderTab()}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

interface AuthModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    tab: number;
    setTab: (tab: number) => void;
}