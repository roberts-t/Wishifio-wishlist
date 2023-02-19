import React from 'react';

export const WishlistListItemPlaceholder = () => {
    return (
        <div className="w-full shadow-sm bg-gray-50">
            <div className="flex flex-col h-full">
                <div className="flex justify-center items-center p-4 flex-shrink-0 relative">
                    <div className="animate-pulse bg-gray-200 w-24 h-24 rounded-lg"></div>
                </div>
                <div className="bg-white rounded-t-xl pt-3 flex flex-col h-full justify-between pb-12">
                    <div className="pb-4 px-5">
                        <div className="w-5/6 h-5 bg-gray-200 rounded animate-pulse mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};