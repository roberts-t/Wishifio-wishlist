import { BsFillGiftFill } from 'react-icons/bs';
import React, { useContext, useState } from 'react';
import { NavLink } from './NavLink';
import { AuthModal } from './modals/AuthModal/AuthModal';
import { AuthContext, AuthContextType } from '../context/AuthContext';
import { AccountNavDropdown } from './dropdowns/AccountNavDropdown';
import { Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import { MobileNav } from "./mobile-nav/MobileNav";

export const Navbar = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [authTab, setAuthTab] = useState(1);
    const { isAuthenticated, isLoading, user } = useContext(AuthContext) as AuthContextType;
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const openAuthModal = (tab: number) => {
        setIsAuthOpen(true);
        setAuthTab(tab);
    }

    return (
        <nav className="w-full lg:p-4 p-3 shadow bg-white relative">
            <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
            <div className="container mx-auto sm:px-20 px-3 flex justify-between items-center">
                <Link to="/" >
                    <div className="flex flex-row items-center gap-x-2">
                        <div className="bg-gradient-to-r from-sky-400 to-sky-600 rounded-full p-3">
                            <BsFillGiftFill className="text-2xl text-white" />
                        </div>
                        <p className="font-bold text-xl">WishBox</p>
                    </div>
                </Link>
                <div className="lg:block hidden">
                    <ul className="flex items-center gap-x-8">
                        <NavLink title="Home" href="/" />
                        <NavLink
                            title="My Wishlists"
                            href="/wishlists"
                            requiresAuth={true}
                            isAuth={isAuthenticated}
                            noAuthAction={() => openAuthModal(1)}
                        />
                        <NavLink
                            title="Create a wishlist"
                            href="/wishlist/create"
                            requiresAuth={true}
                            isAuth={isAuthenticated}
                            noAuthAction={() => openAuthModal(1)}
                        />
                        <NavLink title="About" href="/about" />
                    </ul>
                </div>
                <div className="gap-x-4 lg:flex hidden">
                    {!isAuthenticated && !isLoading ? (
                        <>
                            <button
                                onClick={() => openAuthModal(1)}
                                className="text-white px-4 py-1.5 rounded-sm border-sky-500 text-sky-500 border font-medium"
                            >
                                Log in
                            </button>
                            <button
                                onClick={() => openAuthModal(2)}
                                className="text-white px-4 py-1.5 rounded-sm bg-sky-500"
                            >
                                Sign up
                            </button>
                        </>
                    ) :
                    (
                        <AccountNavDropdown user={user} />
                    )
                    }
                </div>
                <div>
                    <button
                        className="p-1 group"
                        type="button"
                        onClick={() => setIsMobileNavOpen(true)}
                    >
                        <FiMenu className="lg:hidden text-sky-600 text-4xl group-hover:text-sky-700 transition" />
                    </button>
                </div>
            </div>
            <AuthModal isOpen={isAuthOpen} setIsOpen={setIsAuthOpen} tab={authTab} setTab={setAuthTab} />
        </nav>
    );
};