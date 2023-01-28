import React from 'react';
import { CgSpinner } from 'react-icons/cg';

export const LoadingPage = () => {
    return (
        <div className="min-h-screen place-items-center flex bg-background">
            <div className="mx-auto flex items-center flex-col text-slate-700">
                <CgSpinner className="animate-spin block text-5xl" />
                <span className="text-lg mt-1 font-medium">Loading...</span>
            </div>
        </div>
    );
};