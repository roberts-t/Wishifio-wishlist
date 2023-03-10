import React from 'react';
import { LoadingTextPlaceholder } from "../../LoadingTextPlaceholder";

export const WishlistPlaceholder = () => {

    const renderPlaceholderItems = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(
                <div key={i} className="flex md:flex-row flex-col shadow bg-white">
                    <div className="p-3 bg-gray-200 flex-shrink-0 flex items-center justify-center">
                        <div className="w-64 h-48 rounded bg-gray-300 animate-pulse" />
                    </div>
                    <div className="flex flex-col p-4 w-full">
                        <div className="uppercase font-bold text-xl text-gray-800">
                            <LoadingTextPlaceholder height="h-7" width="w-52" className="my-1" />
                        </div>
                        <div className="text-gray-500 h-6">
                            <LoadingTextPlaceholder height="h-3" width="w-64" className="my-1" />
                        </div>
                        <div className="grid grid-cols-3 flex-grow-0 mt-2">
                            <div>
                                <span className="text-gray-600">Price range:</span>
                                <LoadingTextPlaceholder height="h-7" width="w-24" className="my-1" />
                            </div>
                            <div className="col-span-2">
                                <span className="text-gray-600">Notes:</span>
                                <LoadingTextPlaceholder height="h-4" width="sm:w-72 w-full" className="my-2" lines={1} />
                            </div>
                        </div>
                        <div className="mb-2 mt-5 flex flex-row justify-center sm:gap-x-5 gap-x-4 sm:gap-y-0 ">
                            <div className="w-44 h-11 rounded bg-gray-300 animate-pulse" />
                        </div>
                    </div>
                </div>
            )
        }
        return items;
    }

    return (
        <div>
            <div className="container mx-auto lg:px-20 px-4">
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-24 h-24 rounded-lg bg-gray-200 animate-pulse"/>
                    <h1 className="text-4xl font-bold text-center mt-2">
                        Wishlist
                    </h1>
                    <LoadingTextPlaceholder height="h-4" width="w-24" className="my-1" />
                    <LoadingTextPlaceholder height="h-7" width="w-36" className="my-1" />
                    <LoadingTextPlaceholder height="h-3" width="w-60" className="mt-2" lines={2} />
                </div>
            </div>
            <div className="bg-neutral py-5 flex-auto">
                <div className="container mx-auto lg:px-20 px-4">
                    <h3 className="text-gray-700 font-medium text-xl my-2.5">Wishlist wishes</h3>
                    <div className="grid grid-cols-1 gap-y-6 mb-8">
                        {renderPlaceholderItems()}
                    </div>
                </div>
            </div>
        </div>
    );
};