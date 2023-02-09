import React from "react";
import { Link } from "react-router-dom";


export const CreateWishListRedirectButton = () => {

    return (
        <div className="flex mt-8">
            <Link
                className="text-white px-8 py-2.5 rounded bg-sky-500 hover:bg-sky-600 transition font-semibold text-lg"
                to={'/wishlist/create'}
            >
                Create a wish list!
            </Link>
        </div>
    )
};