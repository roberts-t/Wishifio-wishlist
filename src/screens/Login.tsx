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
            <div className="bg-gray-50 px-5 flex flex-auto justify-center items-center">
                <div className="container sm:mx-auto flex justify-center">
                    <div className="flex md:flex-row flex-col sm:w-auto w-full items-center">
                        <div className="bg-white rounded-lg shadow-md lg:p-8 p-6 sm:w-96 sm:mb-0 mb-10 w-full sm:order-1 order-2">
                            {renderTab()}
                        </div>
                        <div className="flex flex-col justify-center items-center lg:ml-20 md:ml-10 md:my-0 sm:my-5 my-4 sm:order-2 order-1">
                            <div className="md:mr-20 flex flex-col text-center mb-2">
                                <span className="font-bold lg:text-4xl sm:text-3xl text-2xl text-sky-500">{(tab == 1 ? "Welcome back" : "Welcome")}</span>
                                <span className="font-medium text-gray-600 sm:text-lg">{(tab == 1 ? "Good to see you again" : "Hope you enjoy the stay")}!</span>
                            </div>
                            <LoginIcon className="lg:h-96 lg:w-112 md:h-72 md:w-80 h-44 w-auto" />
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