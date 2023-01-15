import React from 'react';
import { Navbar } from '../components/Navbar';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineLightBulb, HiOutlineViewGridAdd, HiOutlineShare } from 'react-icons/hi';
import { MdOutlineCreate } from 'react-icons/md';
import { ReactComponent as OnlineWish } from '../assets/vectors/online-wish.svg';
import { WishStep } from '../components/WishStep';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <div className="min-h-screen font-montserrat">
            <Navbar />
            <div className="container mx-auto px-20">
                <div className="py-24">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center px-10">
                            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                                Think of a wish and share it!
                            </h1>
                            <hr className="w-10/12 h-1 bg-gradient-to-r from-sky-400 to-sky-600 my-4 rounded" />
                            <p className="text-gray-600 text-lg font-medium">
                                Make a wishlist and share it with your friends and family. They can contribute to your wishlist and make your wishes come true.
                            </p>
                            <div className="flex mt-8">
                                <button className="text-white px-8 py-2.5 rounded bg-sky-500 hover:bg-sky-600 transition font-semibold text-lg">Get started</button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="relative">
                                <OnlineWish className="h-80 w-full" />
                                <AiFillStar className="absolute text-5xl text-yellow-400 -top-2 left-28 animate-spin-slow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50">
                <div className="container mx-auto px-28">
                    <div className="py-24">
                        <div className="grid grid-cols-4 gap-8">
                            <WishStep
                                title="Make a wish"
                                description="Think of an item you have always wanted to have."
                                wishIconElement={<HiOutlineLightBulb className="text-5xl text-sky-700" />}
                            />
                            <WishStep
                                title="Create a wishlist"
                                description="Create a new wishlist or use an existing one."
                                wishIconElement={<MdOutlineCreate className="text-5xl text-sky-700" />}
                            />
                            <WishStep
                                title="Add your wish"
                                description="Add your wish to the wishlist."
                                wishIconElement={<HiOutlineViewGridAdd className="text-5xl text-sky-700" />}
                            />
                            <WishStep
                                title="Share your wishlist"
                                description="Finally, share your wishlist with your friends and family."
                                wishIconElement={<HiOutlineShare className="text-5xl text-sky-700" />}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};