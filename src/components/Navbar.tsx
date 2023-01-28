import { BsFillGiftFill } from 'react-icons/bs';
import React, { useContext, useState } from 'react';
import { NavLink } from './NavLink';
import { AuthModal } from './modals/AuthModal/AuthModal';
import { AuthContext, AuthContextType } from '../context/AuthContext';
import { AccountNavDropdown } from './dropdowns/AccountNavDropdown';

export const Navbar = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [authTab, setAuthTab] = useState(1);
    const { isAuthenticated, isLoading, user, getAuthStatus } = useContext(AuthContext) as AuthContextType;

    const openAuthModal = (tab: number) => {
        setIsAuthOpen(true);
        setAuthTab(tab);
    }

    return (
        <nav className="w-full p-4 shadow bg-white">
            <div className="container mx-auto px-20 flex justify-between items-center">
                <div className="flex flex-row items-center gap-x-2">
                    <div className="bg-gradient-to-r from-sky-400 to-sky-600 rounded-full p-3">
                        <BsFillGiftFill className="text-2xl text-white" />
                    </div>
                    <p className="font-bold text-xl">WishBox</p>
                </div>
                <div>
                    <ul className="flex items-center gap-x-8">
                        <NavLink title="Home" href="/" />
                        <NavLink title="My Wishlists" href="/wishlists" />
                        <NavLink title="Create a wishlist" href="/wishlist/create" />
                        <NavLink title="About" href="/about" />
                    </ul>
                </div>
                <div className="gap-x-4 flex">
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
                        <AccountNavDropdown user={user} getAuthStatus={getAuthStatus} />
                    )
                    }
                </div>
            </div>
            <AuthModal isOpen={isAuthOpen} setIsOpen={setIsAuthOpen} tab={authTab} setTab={setAuthTab} />
        </nav>
    );
};