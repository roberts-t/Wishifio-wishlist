import React from 'react';
import { Dialog } from '@headlessui/react';

export const LoginTab: React.FC<LoginTabProps> = (props) => {
    return (
        <>
            <Dialog.Title
                as="h3"
                className="text-2xl text-center font-bold leading-6 text-gray-900"
            >
                Log in
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
                <div className="flex flex-row gap-x-1.5 items-center">
                    <input type="checkbox" id="remember" />
                    <label className="text-gray-600 font-normal" htmlFor="remember">Remember me</label>
                </div>
                <button
                    className="mt-1 bg-sky-500 text-white font-semibold px-8 py-2 rounded-md hover:bg-sky-600 transition duration-200"
                    type="button"
                >
                    Sign in
                </button>
            </form>
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
}