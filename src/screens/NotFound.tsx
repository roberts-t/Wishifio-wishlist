import React from 'react';
import { Page } from "./Page";
import { ReactComponent as Lost } from "../assets/vectors/not-found.svg";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <Page>
            <div className="container mx-auto flex-auto flex flex-col justify-center items-center">
                <div className="grid grid-cols-2 gap-x-24 font-montserrat py-20 mb-20">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-10xl leading-none text-transparent font-extrabold tracking-wide bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700">
                            404
                        </h1>
                        <p className="text-5xl font-semibold text-slate-700 text-center">Page not found</p>
                        <p className="mt-2 font-medium text-lg text-gray-600">
                            Sorry, the page you were looking for does not exist :(
                        </p>
                        <Link to={'/'} className="text-lg font-semibold py-2 w-fit px-7 bg-sky-500 text-white text-center mt-5 rounded-md hover:bg-sky-600 transition duration-200 focus:border-sky-700 focus:ring-sky-600 focus:outline-none focus:ring-2  ">
                            Return home
                        </Link>
                    </div>
                    <div>
                        <Lost className="w-112 h-112" />
                    </div>
                </div>
            </div>
        </Page>
    );
};