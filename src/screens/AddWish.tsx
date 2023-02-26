import React from 'react';
import { Page } from "./Page";
import { useParams } from "react-router-dom";
import { AddWishForm } from "../components/forms/AddWishForm";
import { BackButton } from "../components/BackButton";
import { useNavigate } from "react-router-dom";

export const AddWish = () => {
    const { hash } = useParams();
    const navigate = useNavigate();

    return (
        <Page>
            <div className="container mx-auto px-20 relative">
                <BackButton label="To wishlist" onClick={() => navigate(`/wishlist/${hash}`)} />
                <div className="flex flex-col items-center justify-center py-12">
                    <h1 className="text-4xl font-bold text-center">
                        Add a wish to
                    </h1>
                    <h2 className="text-xl font-semibold text-center text-gray-600">
                        My test wishlist
                    </h2>
                </div>
            </div>
            <div className="bg-neutral py-5 flex-auto">
                <div className="container mx-auto px-20">
                    <div className="">
                        <AddWishForm hash={hash} />
                    </div>
                </div>
            </div>
        </Page>
    );
};