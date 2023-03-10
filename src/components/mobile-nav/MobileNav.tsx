import React, { useContext } from 'react';
import { BsFillGiftFill, BsXLg } from "react-icons/bs";
import { FaHome, FaGifts, FaPlusSquare, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MobileNavItem } from "./MobileNavItem";
import { useLocation } from 'react-router-dom'
import { AuthContext, AuthContextType } from "../../context/AuthContext";

export const MobileNav: React.FC<MobileNavProps> = (props) => {
    const location = useLocation();
    const { isAuthenticated, isLoading } = useContext(AuthContext) as AuthContextType;

    return (
        <div
            className={`fixed font-montserrat lg:hidden top-0 left-0 transition duration-300 z-40 p-4 bg-white w-screen h-screen ${(props.isOpen ? "translate-y-0 opacity-1" : "-translate-y-full opacity-0")}`}
        >
            <div>
                <div className="container mx-auto flex justify-between items-center mt-1 px-3">
                    <Link to="/" >
                        <div className="flex flex-row items-center gap-x-2">
                            <div className="bg-gradient-to-r from-sky-400 to-sky-600 rounded-full p-3">
                                <BsFillGiftFill className="text-2xl text-white" />
                            </div>
                            <p className="font-bold text-xl">WishBox</p>
                        </div>
                    </Link>
                    <button
                        onClick={() => props.setIsOpen(false)}
                        className="p-2"
                    >
                        <BsXLg className="text-gray-500 text-xl" />
                    </button>
                </div>
                <hr className="mt-3 mb-5" />
                <div>
                    <ul>
                        <MobileNavItem
                            linkTo="/"
                            icon={<FaHome className="inline-block text-xl" />}
                            text="Home"
                            location={location.pathname}
                        />
                        <MobileNavItem
                            linkTo="/wishlists"
                            icon={<FaGifts className="inline-block text-xl" />}
                            text="My Wishlists"
                            location={location.pathname}
                        />
                        <MobileNavItem
                            linkTo={(isAuthenticated ? "/wishlist/create" : "/login")}
                            icon={<FaPlusSquare className="inline-block text-xl" />}
                            text="Create a wishlist"
                            location={location.pathname}
                        />
                        <MobileNavItem
                            linkTo={"/about"}
                            icon={<FaInfoCircle className="inline-block text-xl" />}
                            text="About"
                            location={location.pathname}
                        />
                    </ul>
                    <div>
                        {!isAuthenticated && !isLoading ? (
                                <div className="grid grid-cols-2 gap-6 px-4 mt-3">
                                    <Link
                                        to="/login"
                                        className="text-white px-4 py-2 rounded border-sky-500 text-sky-500 border-2 font-semibold"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="text-white px-4 py-2 rounded bg-sky-500 flex items-center font-semibold"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            ) :
                            (<></>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

interface MobileNavProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}