import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { IoMdSettings, IoMdAddCircleOutline } from 'react-icons/io';
import { WishlistItem } from '../components/WishlistItem';
import { BiShare } from 'react-icons/bi';

export const Wishlist = () => {
    return (
        <div className="min-h-screen font-montserrat">
            <Navbar />
            <div className="container mx-auto px-20">
                <div className="flex flex-col items-center justify-center py-12">
                    <img
                        src={"https://cdn-icons-png.flaticon.com/512/3209/3209955.png"}
                        alt="Wishlist cover"
                        className="w-24 h-24 rounded-lg object-cover"
                    />
                    <h1 className="text-4xl font-bold text-center mt-2">
                        Wishlist
                    </h1>
                    <p className="m-0 text-sm">By Roberts</p>
                    <h2 className="text-xl font-semibold text-center text-gray-600">
                        My test wishlist
                    </h2>
                    <p className="text-sm text-gray-600 mx-auto px-12 mt-2">
                        Curabitur maximus enim erat, egestas tristique urna volutpat id. Sed sed ligula non justo efficitur porta sed lobortis nisi. Aliquam aliquam ut turpis sit amet laoreet. Quisque eu vulputate massa. Quisque commodo eu elit sed convallis. Fusce ac quam sed nisi pharetra ullamcorper. Mauris id elit ante. Donec semper quam at placerat semper. Fusce sapien metus, gravida mollis nunc bibendum, finibus malesuada ante. Duis lobortis justo in turpis finibus euismod. Fusce eu fermentum erat. Morbi et porttitor felis, quis vestibulum diam. Mauris vel dictum magna.
                    </p>
                </div>
            </div>
            <div className="bg-neutral py-5">
                <div className="container mx-auto px-20">
                    <div className="flex flex-row gap-x-4 pt-6 pb-2">
                        <button className="bg-dark hover:bg-dark-hover transition text-white px-6 py-2 shadow-sm font-medium rounded-sm flex flex-row justify-center items-center gap-x-1">
                            <IoMdSettings className="text-lg" /> Settings
                        </button>
                        <button className="bg-dark hover:bg-dark-hover transition text-white px-6 py-2 shadow-sm font-medium rounded-sm flex flex-row justify-center items-center gap-x-1">
                            <BiShare className="text-lg" /> Share
                        </button>
                        <button className="border-gray-600 transition hover:bg-sky-500 hover:text-white hover:border-sky-500 border-2 text-dark transition px-6 py-2 shadow-sm font-medium rounded-sm flex flex-row justify-center items-center gap-x-1">
                            <IoMdAddCircleOutline className="text-lg" /> Add a wish
                        </button>
                    </div>
                    <p className="pb-6 text-gray-600">Visibility: <span>Private</span></p>
                    <h3 className="text-gray-700 font-medium text-xl my-2.5">Wishlist wishes</h3>
                    <div className="grid grid-cols-1 gap-y-6 mb-8">
                        <WishlistItem />
                        <WishlistItem />
                        <WishlistItem />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};