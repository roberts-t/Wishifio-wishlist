import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CreateWishlistForm } from '../components/forms/CreateWishlistForm';

export const MakeWishlist = () => {
    return (
        <div className="min-h-screen font-montserrat">
            <Navbar />
            <div className="container mx-auto px-20">
                <div className="flex flex-col items-center justify-center gap-y-4 py-16">
                    <h1 className="text-4xl font-bold text-center">
                        Create a wishlist
                    </h1>
                    <CreateWishlistForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};