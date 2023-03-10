import React, { useEffect, useState } from 'react';
import { Page } from "./Page";
import { useParams } from "react-router-dom";
import { AddWishForm } from "../components/forms/AddWishForm";
import { BackButton } from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { api } from "../config/request";
import { processGenericServerError } from "../config/serverErrors";

export const AddWish = () => {
    const { hash } = useParams();
    const [wishlist, setWishlist] = useState<any>(null);
    const navigate = useNavigate();

    const getWishlist = () => {
        api.get(`/wishlist/${hash}`).then((res) => {
            if (res?.data?.isOwner && res?.data?.wishlist) setWishlist(res.data.wishlist);
            else window.location.href = "/";
        }).catch((err) => {
            processGenericServerError(err);
        });
    }

    useEffect(() => {
        getWishlist();
    }, []);

    return (
        <Page>
            <div className="container mx-auto sm:px-20 px-5 relative">
                <BackButton label="To wishlist" onClick={() => navigate(`/wishlist/${hash}`)} />
                <div className="flex flex-col items-center justify-center sm:py-12 pt-14 pb-8">
                    <h1 className="sm:text-4xl text-3xl font-bold text-center">
                        Add a wish to
                    </h1>
                    <h2 className="sm:text-xl text-lg font-semibold text-center text-gray-600">
                        {wishlist?.title}
                    </h2>
                </div>
            </div>
            <div className="bg-neutral py-5 flex-auto">
                <div className="container mx-auto sm:px-20 px-5">
                    <div className="">
                        <AddWishForm hash={hash} />
                    </div>
                </div>
            </div>
        </Page>
    );
};