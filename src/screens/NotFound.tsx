import React from 'react';
import { Page } from "./Page";
import { ReactComponent as Lost } from "../assets/vectors/not-found.svg";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <Page>
            <div className="container mx-auto flex-auto flex flex-col justify-center items-center">
                <div className="grid md:grid-cols-2 lg:gap-x-24 gap-x-16 font-montserrat md:py-20 sm:py-16 mb-20 px-10">
                    <div className="flex flex-col md:items-start items-center justify-center md:order-1 order-2">
                        <h1 className="lg:text-10xl sm:text-9xl text-8xl leading-none text-transparent font-extrabold tracking-wide bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700">
                            404
                        </h1>
                        <p className="lg:text-5xl sm:text-4xl text-3xl font-semibold text-slate-700 text-center">Page not found</p>
                        <p className="mt-2 font-medium sm:text-lg sm:text-left text-center text-gray-600">
                            Sorry, the page you were looking for does not exist :(
                        </p>
                        <Link to={'/'} className="text-lg font-semibold py-2 w-fit px-7 bg-sky-500 text-white text-center mt-5 rounded-md hover:bg-sky-600 transition duration-200 focus:border-sky-700 focus:ring-sky-600 focus:outline-none focus:ring-2  ">
                            Return home
                        </Link>
                    </div>
                    <div className="md:order-2 order-1">
                        <Lost className="lg:w-112 lg:h-112 sm:w-80 sm:h-80 w-64 h-64" />
                    </div>
                </div>
            </div>
        </Page>
    );
};