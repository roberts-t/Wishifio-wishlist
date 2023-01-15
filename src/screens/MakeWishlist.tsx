import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { MdOutlineCreate } from 'react-icons/md';

export const MakeWishlist = () => {
    return (
        <div className="min-h-screen font-montserrat">
            <Navbar />
            <div className="container mx-auto px-20">
                <div className="flex flex-col items-center justify-center gap-y-4 py-16">
                    <h1 className="text-4xl font-bold text-center">
                        Create a wishlist
                    </h1>
                    <form className="w-full max-w-lg flex flex-col">
                        <div className="flex flex-col gap-y-4 mt-5">
                            <div className="flex flex-col gap-y-2 items-center justify-center">
                                <label
                                    className="text-gray-700 font-bold"
                                    htmlFor="icon"
                                >
                                    Wishlist image
                                </label>
                                <button
                                    type="button"
                                    className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center relative hover:bg-gray-300 transition duration-200"
                                >
                                    <MdOutlineCreate className="text-4xl text-gray-700" />
                                </button>
                                <input
                                    className="hidden"
                                    type="file"
                                    id="icon"
                                    name="icon"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label
                                    className="text-gray-700 font-bold"
                                    htmlFor="title"
                                >
                                    Wishlist title
                                </label>
                                <input
                                    className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-sky-500 focus:outline-none transition"
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Enter a title"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label
                                    className="text-gray-700 font-bold"
                                    htmlFor="description"
                                >
                                    Wishlist description
                                </label>
                                <textarea
                                    className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-sky-500 focus:outline-none transition"
                                    id="description"
                                    name="description"
                                    placeholder="Enter a description"
                                />
                            </div>
                        </div>
                        <button
                            className="w-3/6 mx-auto mt-5 bg-sky-500 text-white py-2 rounded-md font-medium mt-10 hover:bg-sky-600 transition duration-200"
                            type="submit"
                        >
                            Create
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};