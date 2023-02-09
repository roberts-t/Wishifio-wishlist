import React from "react";
import {Link} from "react-router-dom";


export const CreateWishListRedirectButton = () => {

    return (
        <div className="flex mt-8">
            <Link to={'/wishlist/create'}>
                <button
                    className="text-white px-8 py-2.5 rounded bg-sky-500 hover:bg-sky-600 transition font-semibold text-lg"
                >
                    Create a wish list!
                </button>
            </Link>
        </div>
    )
};