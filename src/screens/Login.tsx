import React, { useState } from 'react';
import { Page } from "./Page";
import { LoginScreenTab } from "../components/LoginScreenTab";
import { RegisterScreenTab } from "../components/RegisterScreenTab";
import { ReactComponent as LoginIcon } from "../assets/vectors/login-icon.svg";

export const Login: React.FC<LoginProps> = (props) => {
    const [tab, setTab] = useState(props.defaultTab || 1);

    const renderTab = () => {
        if (tab == 1) {
            return <LoginScreenTab onSignUpClick={() => setTab(2)} />
        } else if (tab == 2) {
            return <RegisterScreenTab onLoginClick={() => setTab(1)} />
        }
    }

    return (
        <Page>
            <div className="bg-gray-50 flex flex-auto justify-center items-center">
                <div className="container mx-auto flex justify-center">
                    <div className="flex flex-row items-center">
                        <div className="bg-white rounded-lg shadow-md p-8 w-96">
                            {renderTab()}
                        </div>
                        <div className="flex flex-col justify-center items-center ml-20">
                            <div className="mr-20 flex flex-col text-center mb-2">
                                <span className="font-bold text-4xl text-sky-500">{(tab == 1 ? "Welcome back" : "Welcome")}</span>
                                <span className="font-medium text-gray-600 text-lg">{(tab == 1 ? "Good to see you again" : "Hope you enjoy the stay")}!</span>
                            </div>
                            <LoginIcon className="h-96 w-112" />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};

interface LoginProps {
    defaultTab?: number;
}