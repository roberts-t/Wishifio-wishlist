import React, { useEffect, useState } from 'react';
import { Page } from "./Page";
import { api } from "../config/request";
import { useParams } from "react-router-dom";
import { processGenericServerError } from "../config/serverErrors";
import { EditWishlistForm } from "../components/forms/EditWishlistForm";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import { LoadingPage } from "./LoadingPage";

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
        <>
            { !wishlist ? <LoadingPage /> : (
                <Page>
                    <div className="container mx-auto sm:px-20 px-5 relative">
                        <BackButton onClick={() => navigate(`/wishlist/${wishlist.hash}`)} label="To wishlist" />
                        <div className="flex flex-col items-center justify-center sm:py-12 pt-16">
                            <h1 className="sm:text-4xl text-3xl font-bold text-center">
                                Wishlist settings
                            </h1>
                            <h2 className="sm:text-xl text-lg font-semibold text-center text-gray-600">
                                {wishlist?.title}
                            </h2>
                        </div>
                    </div>
                    <div className="">
                        {wishlist && (
                            <div className="container mx-auto md:px-20 px-4 py-10 space-y-16">
                                <div className="flex md:flex-row flex-col">
                                    <div className="md:w-80 w-full bg-gray-100 p-5 md:border-r-2 md:mb-0 mb-3 border-b-2 border-sky-500">
                                        <h2 className="text-xl font-bold">
                                            Edit wishlist
                                        </h2>
                                        <p className="text-gray-500 mt-1">
                                            You can change the look of your wishlist to better express what your wishlist is about
                                        </p>
                                    </div>
                                    <div className="md:w-5/12 sm:w-8/12 w-full mx-auto">
                                        <EditWishlistForm wishlist={wishlist} updateWishlistTitle={updateWishlistTitle} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Page>
            )}
        </>
    );
};