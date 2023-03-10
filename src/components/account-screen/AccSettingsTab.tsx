import React from 'react';
import { AccountSettingsForm } from "../forms/AccountSettingsForm";
import { TiWarningOutline } from "react-icons/ti";

export const AccSettingsTab: React.FC<AccSettingsTabProps> = ({user}) => {
    return (
        <div>
            <div className="text-2xl font-bold text-left">Account settings</div>
            <div className="text-left mt-5 font-medium mb-3">
                <div className="leading-none">Your email:</div>
                <div className="text-gray-500 font-normal">{user.email}</div>
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 text-left gap-x-16 gap-y-5">
                <AccountSettingsForm initialUsername={user.username} />
                <div>
                    <div className="font-semibold text-lg mb-1 flex items-center">
                        <TiWarningOutline className="inline-block text-xl mr-0.5" />
                        Choosing a username:

                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">Do not use inappropriate usernames</li>
                            <li>Keep in mind that your username will be<br className="2xl:block hidden" /> shown to other users</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface AccSettingsTabProps {
    user: any;
}