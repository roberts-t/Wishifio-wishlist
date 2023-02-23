import React, { useEffect, useState } from 'react';
import { Page } from "./Page";
import { api } from "../config/request";
import { useParams } from "react-router-dom";
import { processGenericServerError } from "../config/serverErrors";
import { EditWishlistForm } from "../components/forms/EditWishlistForm";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton";

export const EditWishlist = () => {
    const { hash } = useParams();
    const [wishlist, setWishlist] = useState<any>(null);
    const navigate = useNavigate();

    const getWishlist = () => {
        api.get(`/wishlist/${hash}`).then((res) => {
            setWishlist(res.data?.wishlist);
        }).catch((err) => {
            processGenericServerError(err);
        });
    }

    const updateWishlistTitle = (title: string) => {
        setWishlist((wishlist: any) => {
            return {
                ...wishlist,
                title
            }
        });
    }

    useEffect(() => {
        getWishlist();
    }, []);

    return (
        <Page>
            <div className="container mx-auto px-20 relative">
                <BackButton onClick={() => navigate(`/wishlist/${wishlist.hash}`)} label="To wishlist" />
                <div className="flex flex-col items-center justify-center py-12">
                    <h1 className="text-4xl font-bold text-center">
                        Wishlist settings
                    </h1>
                    <h2 className="text-xl font-semibold text-center text-gray-600">
                        {wishlist?.title}
                    </h2>
                </div>
            </div>
            <div className="">
                {wishlist && (
                    <div className="container mx-auto px-20 py-10 space-y-16">
                        <div className="flex flex-row">
                            <div className="w-80 bg-gray-100 p-5 border-r-2 border-sky-500">
                                <h2 className="text-xl font-bold">
                                    Edit wishlist
                                </h2>
                                <p className="text-gray-500 mt-1">
                                    You can change the look of your wishlist to better express what your wishlist is about
                                </p>
                            </div>
                            <div className="w-5/12 mx-auto">
                                <EditWishlistForm wishlist={wishlist} updateWishlistTitle={updateWishlistTitle} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Page>
    );
};