import React from 'react';
import { Dialog } from '@headlessui/react';

export const RegisterTab: React.FC<RegisterTabProps> = (props) => {
    return (
        <>
            <Dialog.Title
                as="h3"
                className="text-2xl text-center font-bold leading-6 text-gray-900"
            >
                Sign up
            </Dialog.Title>

            <form className="mt-6 flex flex-col gap-y-3">
                <div className="flex flex-col gap-y-1">
                    <label className="text-gray-600 font-semibold" htmlFor="wishName">E-mail</label>
                    <input
                        className="border-gray-300 border-2 rounded px-4 py-2 w-full"
                        name="wishName"
                        type="email"
                        id="wishName"
                        placeholder="Your email"
                    />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label className="text-gray-600 font-semibold" htmlFor="wishName">Password</label>
                    <input
                        className="border-gray-300 border-2 rounded px-4 py-2 w-full"
                        name="wishName"
                        type="password"
                        id="wishName"
                    />
                </div>
                <div className="flex flex-col gap-y-1 mb-2">
                    <label className="text-gray-600 font-semibold" htmlFor="wishName">Confirm Password</label>
                    <input
                        className="border-gray-300 border-2 rounded px-4 py-2 w-full"
                        name="wishName"
                        type="password"
                        id="wishName"
                    />
                </div>
                <button
                    className="mt-1 bg-sky-500 text-white font-semibold px-8 py-2 rounded-md hover:bg-sky-600 transition duration-200"
                    type="button"
                >
                    Sign up
                </button>
            </form>
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