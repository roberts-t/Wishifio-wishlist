import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineLightBulb, HiOutlineViewGridAdd, HiOutlineShare } from 'react-icons/hi';
import { MdOutlineCreate } from 'react-icons/md';
import { ReactComponent as OnlineWish } from '../assets/vectors/online-wish.svg';
import { WishStep } from '../components/WishStep';
import { Page } from "./Page";
import { Link } from "react-router-dom";
import { AuthContext, AuthContextType } from "../context/AuthContext";

export const Home = () => {
    const { isAuthenticated } = useContext(AuthContext) as AuthContextType;

    return (
        <Page>
            <div className="container mx-auto lg:px-20 px-5">
                <div className="sm:py-24 py-14">
                    <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-3">
                        <div className="flex flex-col justify-center lg:px-10 px-4 sm:order-1 order-2">
                            <h1 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-gray-800 leading-tight">
                                Think of a wish and share it!
                            </h1>
                            <hr className="w-10/12 h-1 bg-gradient-to-r from-sky-400 to-sky-600 my-4 rounded" />
                            <p className="text-gray-600 xl:text-lg font-medium">
                                Make a wishlist and share it with your friends and family. They can contribute to your wishlist and make your wishes come true.
                            </p>
                            <div className="flex mt-8">
                                <Link
                                    to={isAuthenticated ? "/wishlist/create" : "/signup"}
                                    className="text-white px-8 py-2.5 rounded bg-sky-500 hover:bg-sky-600 transition font-semibold text-lg"
                                >
                                    Get started
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center sm:order-2 order-1 sm:mb-0 mb-5">
                            <div className="mx-auto w-fit relative">
                                <AiFillStar className="absolute text-5xl text-yellow-400 -top-2 sm:left-2 left-0 animate-spin-slow" />
                                <OnlineWish className="xl:h-80 lg:h-72 h-60 w-fit" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50">
                <div className="container mx-auto sm:px-28 px-6">
                    <div className="lg:py-24 sm:py-16 py-12">
                        <div className="grid lg:grid-cols-4 grid-cols-2 sm:gap-8 gap-5">
                            <WishStep
                                title="Make a wish"
                                description="Think of an item you have always wanted to have."
                                wishIconElement={<HiOutlineLightBulb className="sm:text-5xl text-4xl text-sky-700" />}
                            />
                            <WishStep
                                title="Create a wishlist"
                                description="Create a new wishlist or use an existing one."
                                wishIconElement={<MdOutlineCreate className="sm:text-5xl text-4xl text-sky-700" />}
                            />
                            <WishStep
                                title="Add your wish"
                                description="Add your wish to the wishlist."
                                wishIconElement={<HiOutlineViewGridAdd className="sm:text-5xl text-4xl text-sky-700" />}
                            />
                            <WishStep
                                title="Share your wishlist"
                                description="Finally, share your wishlist with your friends and family."
                                wishIconElement={<HiOutlineShare className="sm:text-5xl text-4xl text-sky-700" />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};