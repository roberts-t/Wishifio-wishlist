import React from 'react';
import { Page } from "../screens/Page";
import { ReactComponent as Unauthorized } from "../assets/vectors/unauthorized.svg";
import { BiLock } from "react-icons/bi";

export const UnauthorizedWarning = () => {
    return (
        <Page>
            <div className="container mx-auto flex-auto flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 gap-x-16 font-montserrat py-20 mb-20">
                    <Unauthorized className="w-112 h-112" />
                    <div className="text-4xl font-semibold text-slate-700 flex flex-col justify-center mb-10">
                        <div className="w-full text-center">
                            <BiLock className="inline-block text-6xl" />
                        </div>
                        Authorization required
                        <p className="mt-2 font-medium text-lg text-gray-600">
                            To access this wishlist you need to be logged in
                        </p>
                    </div>
                </div>
            </div>
        </Page>
    );
};