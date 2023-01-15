import React from 'react';
import { WishlistListItemDropdown } from './dropdowns/WishlistListItemDropdown';

export const WishlistListItem: React.FC<ListProps> = (props) => {
    return (
        <div className=" shadow w-full bg-gradient-to-r from-sky-400 to-sky-600">
            <div className="flex flex-col">
                <div className="flex justify-center items-center p-4 flex-shrink-0 relative">
                    <img
                        src={props.wishlistImage || "https://img.freepik.com/free-photo/3d-render-gift-box-with-ribbon-present-package_107791-15850.jpg?w=2000"}
                        alt="Wishlist cover"
                        className="w-24 h-24 rounded-lg object-cover border-2 border-sky-500"
                    />
                    <WishlistListItemDropdown />
                    {/*<button className="p-1 text-red-500 hover:text-red-700 transition bg-white text-normal absolute top-2 right-2 rounded-lg">*/}
                    {/*    <RiCloseCircleLine />*/}
                    {/*</button>*/}
                </div>
                <div className="bg-white rounded-t-xl pt-3">
                    <div className="pb-4 px-5 col-span-2">
                        <p className="font-semibold text-lg mb-1">{props.title}</p>
                        <p className="text-gray-600 overflow-hidden line-clamp-4 text-sm">
                            {props.description}
                        </p>
                    </div>
                    <div className="text-center pb-4">
                        <button
                            className="bg-dark text-white font-semibold px-8 py-2 rounded-sm hover:bg-dark-hover transition duration-200"
                            type="button"
                        >
                            View list
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ListProps {
    title: string;
    description: string;
    wishlistImage: string;
}