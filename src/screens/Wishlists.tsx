import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WishlistListItem } from '../components/WishlistListItem';

export const Wishlists = () => {
    return (
        <div className="min-h-screen font-montserrat">
            <Navbar />
            <div className="container mx-auto px-20">
                <div className="flex flex-col items-center justify-center gap-y-4 py-12">
                    <h1 className="text-4xl font-bold text-center">
                        My Wishlists
                    </h1>
                </div>
            </div>
            <div className="bg-neutral py-5">
                <div className="container mx-auto px-20">
                    <p className="text-xl font-semibold pt-4 pb-1 text-gray-700">1 wishlist</p>
                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="grid grid-cols-3 w-full gap-6">
                            <WishlistListItem
                                title="My test wishlist!"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."
                                wishlistImage="" />
                            <WishlistListItem
                                title="My test wishlist!"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."
                                wishlistImage="" />
                            <WishlistListItem
                                title="My test wishlist!"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."
                                wishlistImage="" />
                            <WishlistListItem
                                title="My test wishlist!"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."
                                wishlistImage="" />
                            <WishlistListItem
                                title="My test wishlist!"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."
                                wishlistImage="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};