import React from 'react';
import { TbGift } from 'react-icons/tb';
import { Page } from "./Page";

export const LoadingPage = () => {
    return (
        <Page>
            <div className="flex-auto place-items-center flex bg-background">
                <div className="mx-auto flex items-center flex-col text-slate-700 px-10">
                    <TbGift className="animate-spin-medium block text-6xl text-sky-500" />
                    <span className="text-2xl mt-2 font-semibold">Loading...</span>
                    <span className="text-gray-500 text-center">If this takes too long, please check your internet connection.</span>
                </div>
            </div>
        </Page>
    );
};