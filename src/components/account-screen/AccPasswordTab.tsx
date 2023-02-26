import React from 'react';
import { AccountPasswordForm } from "../forms/AccountPasswordForm";
import { BsLightbulb } from "react-icons/bs";

export const AccPasswordTab = () => {
    return (
        <div>
            <div className="text-2xl font-bold text-left">Account password</div>
            <div className="grid grid-cols-2 text-left mt-5 gap-x-16">
                <AccountPasswordForm />
                <div className="mt-5">
                    <div className="font-semibold text-lg mb-1 flex items-center">
                        <BsLightbulb className="inline-block text-xl mr-0.5" />
                        Safe password tips:
                    </div>
                    <ul>
                        <li>Use at least 8 characters (min 6)</li>
                        <li>Use at least 1 number</li>
                        <li>Use at least 1 number (0-9)</li>
                        <li>Use at least 1 upper case letter (A-Z)</li>
                        <li>You could use special characters (!#@&..)</li>
                        <li>Use passwords that are hard to guess</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};