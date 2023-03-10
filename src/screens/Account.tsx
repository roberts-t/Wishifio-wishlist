import React, { useContext, useEffect, useRef, useState } from 'react';
import { Page } from "./Page";
import { FaRegUser } from "react-icons/fa";
import { AuthContext, AuthContextType } from "../context/AuthContext";
import { MdManageAccounts, MdLockOutline } from "react-icons/md";
import { AccSettingsTab } from "../components/account-screen/AccSettingsTab";
import { AccPasswordTab } from "../components/account-screen/AccPasswordTab";

export const Account = () => {

    const { user } = useContext(AuthContext) as AuthContextType;
    const tabElement = useRef<HTMLDivElement>(null);
    const [tab, setTab] = useState("settings");

    useEffect(() => {
        if (tabElement.current) {
            tabElement.current.scrollIntoView({ block: "center", behavior: "smooth" });
        }
    }, [tab]);

    const renderTab = () => {
        switch (tab) {
            case "settings":
                return <AccSettingsTab user={user} />
            case "password":
                return <AccPasswordTab />
        }
    }

    return (
        <Page>
            <div className="container mx-auto md:px-20 px-5">
                <div className="flex flex-col items-center justify-center sm:py-12 py-8">
                    <h1 className="sm:text-4xl text-3xl font-bold text-center">
                        Account settings
                    </h1>
                </div>
            </div>
            <div className="bg-neutral flex-auto py-10">
                <div className="container mx-auto mt lg:px-32 px-4">
                    <div className="flex md:flex-row flex-col">
                        <div className="md:w-[21rem] flex-shrink-0 md:mr-5 md:mb-0 mb-6 bg-white text-center shadow rounded">
                            <div className="bg-sky-400 text-white rounded-full h-20 w-20 flex justify-center items-center mx-auto mt-5 mb-1">
                                <FaRegUser className="text-5xl" />
                            </div>
                            <div className="font-semibold text-xl leading-none px-2 w-full break-words">{user.username}</div>
                            <div className="font-medium text-gray-500 text-sm mb-6">{user.email}</div>
                            <div className="border-t md:mb-16 mb-10">
                                <ul className="text-left font-medium text-gray-600">
                                    <li
                                        onClick={() => setTab("settings")}
                                        className={"py-3 border-b px-6 transition flex items-center cursor-pointer " + (tab === "settings" ? "font-bold bg-sky-100" : "hover:bg-sky-50")}
                                    >
                                        <MdManageAccounts className="inline-block text-xl mr-1"/> Settings
                                    </li>
                                    <li
                                        className={"py-3 border-b px-6 transition flex items-center cursor-pointer " + (tab === "password" ? "font-bold bg-sky-100" : "hover:bg-sky-50")}
                                        onClick={() => setTab("password")}
                                    >
                                        <MdLockOutline className="inline-block text-xl mr-1"/> Password
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div ref={tabElement} className="flex-auto bg-white text-center shadow rounded p-8">
                            {renderTab()}
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};