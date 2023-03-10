import React from 'react';
import { CreateWishlistForm } from '../components/forms/CreateWishlistForm';
import { Page } from "./Page";

export const MakeWishlist = () => {
    return (
        <Page>
            <div className="container mx-auto md:px-20 px-8">
                <div className="flex flex-col items-center justify-center gap-y-4 sm:py-16 pb-16 pt-10">
                    <h1 className="sm:text-4xl text-3xl font-bold text-center">
                        Create a wishlist
                    </h1>
                    <CreateWishlistForm />
                </div>
            </div>
        </Page>
    );
};