import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WishlistListItem } from '../components/WishlistListItem';
import { api } from '../config/request';

export const Wishlists = () => {

    const [wishlists, setWishlists] = React.useState([]);
    const getWishlists = () => {
        api.get('/wishlists').then((res) => {
            setWishlists(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    const removeWishlist = (id: string) => {
        setWishlists(
            wishlists.filter((wishlist: any) => wishlist._id !== id)
        )
    }


    useEffect(() => {
        getWishlists();
    }, []);

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
                    <p className="text-xl font-semibold pt-4 pb-1 text-gray-700">
                        {wishlists.length} wishlist{wishlists.length > 1 || wishlists.length === 0 ? 's' : ''}
                    </p>
                    <div className="flex flex-col items-center justify-center py-6">
                        <div className="grid grid-cols-3 w-full gap-6">
                            {wishlists.map((wishlist: any) => (
                                <WishlistListItem
                                    key={wishlist.id}
                                    id={wishlist.id}
                                    title={wishlist.title}
                                    description={wishlist.description}
                                    wishlistImage={"http://localhost:5000" + wishlist.imageUrl}
                                    deleteWishlist={removeWishlist}
                                />
                            ))}
                            {/*<WishlistListItem*/}
                            {/*    title="My test wishlist!"*/}
                            {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."*/}
                            {/*    wishlistImage="" />*/}
                            {/*<WishlistListItem*/}
                            {/*    title="My test wishlist!"*/}
                            {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."*/}
                            {/*    wishlistImage="" />*/}
                            {/*<WishlistListItem*/}
                            {/*    title="My test wishlist!"*/}
                            {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."*/}
                            {/*    wishlistImage="" />*/}
                            {/*<WishlistListItem*/}
                            {/*    title="My test wishlist!"*/}
                            {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."*/}
                            {/*    wishlistImage="" />*/}
                            {/*<WishlistListItem*/}
                            {/*    title="My test wishlist!"*/}
                            {/*    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper erat id urna molestie efficitur. Aliquam erat volutpat. Pellentesque sed dolor erat. Duis id semper quam. Etiam sed lorem euismod, interdum elit id, aliquet urna. Ut a enim ut nulla sagittis scelerisque quis at dolor. Morbi vitae congue leo. Vestibulum efficitur porta purus, non tristique tellus molestie sed."*/}
                            {/*    wishlistImage="" />*/}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};