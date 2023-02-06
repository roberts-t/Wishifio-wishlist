import React from 'react';
import { CreateWishlistForm } from '../components/forms/CreateWishlistForm';
import { Page } from "./Page";

export const MakeWishlist = () => {
    return (
        <Page>
            <div className="container mx-auto px-20">
                <div className="flex flex-col items-center justify-center gap-y-4 py-16">
                    <h1 className="text-4xl font-bold text-center">
                        Create a wishlist
                    </h1>
                    <CreateWishlistForm />
                </div>
            </div>
        </Page>
    );
};