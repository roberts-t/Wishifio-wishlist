import React, { useState } from 'react';
import { WishlistListItemDropdown } from './dropdowns/WishlistListItemDropdown';
import { Link } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

export const WishlistListItem: React.FC<ListProps> = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="h-80 shadow w-full bg-gradient-to-r from-sky-400 to-sky-600">
            <div className="flex flex-col h-full">
                <div className="flex justify-center items-center p-4 flex-shrink-0 relative">
                    {imageLoaded ? null : (
                        <div className="w-24 h-24 rounded-lg bg-white flex justify-center items-center">
                            <CgSpinner className="animate-spin text-gray-500 text-xl" />
                        </div>
                        )}
                    <img
                        src={props.wishlistImage || "https://img.freepik.com/free-photo/3d-render-gift-box-with-ribbon-present-package_107791-15850.jpg?w=2000"}
                        alt="Wishlist cover"
                        className={"w-24 h-24 rounded-lg object-cover " + (imageLoaded ? "" : "hidden")}
                        onLoad={() => setImageLoaded(true)}
                    />
                    <WishlistListItemDropdown wishlistHash={props.hash} deleteWishlist={props.deleteWishlist} />
                </div>
                <div className="bg-white rounded-t-xl pt-3 flex flex-col h-full justify-between">
                    <div className="pb-4 px-5 col-span-2">
                        <p className="font-semibold text-lg mb-1 w-full break-words">{props.title}</p>
                        <p className="text-gray-600 overflow-hidden line-clamp-4 text-sm w-full break-words mb-1">
                            {props.description}
                        </p>
                    </div>
                    <div className="text-center pb-4">
                        <Link
                            className="bg-dark text-white font-semibold px-8 py-2 rounded-sm hover:bg-dark-hover transition duration-200"
                            to={`/wishlist/${props.wishlistHash}`}
                        >
                            View list
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ListProps {
    hash: string;
    title: string;
    description: string;
    wishlistImage: string;
    deleteWishlist: (id: string) => void;
    wishlistHash: string;
}