import React, { useContext } from 'react';
import { BsFillGiftFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext, AuthContextType } from "../context/AuthContext";

export const Footer = () => {
    const { isAuthenticated } = useContext(AuthContext) as AuthContextType;

    return (
        <footer className="w-full border-t bg-zinc-200 mt-auto">
            <div className="container mx-auto sm:px-20 px-4 sm:pt-5 pt-3 sm:pb-7 pb-4 flex flex-col text-sm gap-y-2">
                <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-x-0 gap-x-8">
                    <div>
                        <div className="w-fit">
                            <div className="flex flex-row items-center gap-x-1.5 w-fit sm:pr-10">
                                <div className="bg-gradient-to-r from-sky-400 to-sky-600 rounded-full p-3 w-12 h-12">
                                    <BsFillGiftFill className="text-2xl text-white" />
                                </div>
                                <div className="font-bold text-xl">
                                    Wishbox
                                </div>
                            </div>
                            {/*<hr className="w-full border-gray-400 block rounded-lg mt-2 mb-1" />*/}
                            <p className="text-gray-700 text-center sm:mt-0 mt-1 sm:ml-0 ml-3">
                                Made with ❤️
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold text-gray-600 mb-1 sm:mt-0 mt-2">Wishlists</div>
                        <ul className="text-gray-500 space-y-0.5">
                            <li>
                                <Link to={(isAuthenticated ? '/wishlists' : '/login')}>My Wishlists</Link>
                            </li>
                            <li>
                                <Link to={(isAuthenticated ? '/wishlist/create' : '/login')}>Create a wishlist</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:block hidden">
                        <div className="font-semibold text-gray-600 mb-1">Account</div>
                        <ul className="text-gray-500 space-y-0.5">
                            <li>
                                <Link to={'/login'}>Login</Link>
                            </li>
                            <li>
                                <Link to={'/signup'}>Sign up</Link>
                            </li>
                            <li>
                                <Link to={(isAuthenticated ? '/account' : '/login')}>Account settings</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:block hidden">
                        <div className="font-semibold text-gray-600 mb-1">Other</div>
                        <ul className="text-gray-500 space-y-0.5">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/about'}>About us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center text-gray-800 items-center bg-zinc-300 py-2 font-medium text-sm">
                WishBox &copy; 2023
            </div>
        </footer>
    );
};