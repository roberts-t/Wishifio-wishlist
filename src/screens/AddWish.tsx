import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const AddWish = () => {
    return (
        <div className="min-h-screen font-montserrat">
            <Navbar />
            <div className="container mx-auto px-20">
                <div className="flex flex-col items-center justify-center py-12">
                    <h1 className="text-4xl font-bold text-center">
                        Add a wish to
                    </h1>
                    <h2 className="text-xl font-semibold text-center text-gray-600">
                        My test wishlist
                    </h2>
                </div>
            </div>
            <div className="bg-neutral py-5">
                <div className="container mx-auto px-20">
                    <div className="">
                        <form className="my-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2 bg-white border rounded p-10 grid grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-y-1">
                                        <label className="text-gray-800 font-semibold" htmlFor="wishName">Wish name*</label>
                                        <input
                                            className="border-gray-300 border-2 rounded px-4 py-2 w-full"
                                            type="text"
                                            name="wishName"
                                            id="wishName"
                                            placeholder="Enter the wish"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                        <label className="text-gray-800 font-semibold" htmlFor="wishName">Wish subtitle</label>
                                        <input
                                            className="border-gray-300 border-2 rounded px-4 py-2 w-full"
                                            type="text"
                                            name="wishName"
                                            id="wishName"
                                            placeholder="e.g. short description, features, etc."
                                        />
                                    </div>
                                    <div className="col-span-2 flex flex-col gap-y-1">
                                        <label className="text-gray-800 font-semibold" htmlFor="wishName">Link to website that contains your wish</label>
                                        <input
                                            className="border-gray-300 border-2 rounded px-4 py-2 w-full"
                                            name="wishName"
                                            type="url"
                                            id="wishName"
                                            placeholder="Enter the wish"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-1 items-center">
                                        <label className="text-gray-800 font-semibold" htmlFor="wishName">Wish image</label>
                                        <div className="w-48 h-48 bg-gray-100 rounded">

                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                        <label className="text-gray-800 font-semibold" htmlFor="wishName">Notes</label>
                                        <textarea
                                            className="border-gray-300 border-2 rounded px-4 py-2 w-full h-full"
                                            name="wishName"
                                            id="wishName"
                                            placeholder="Enter the wish"
                                        />
                                    </div>
                                </div>
                                <div className="ml-8">
                                    <button className="text-white font-semibold bg-sky-500 rounded-sm py-2 w-full">
                                        Save to wishlist
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};