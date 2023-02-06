import React, { useEffect } from 'react';
import { WishlistListItem } from '../components/WishlistListItem';
import { api } from '../config/request';
import { Page } from "./Page";
import { ReactComponent as WishlistsEmpty } from "../assets/vectors/empty-wishlists.svg";

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
        <Page>
            <div className="container mx-auto px-20">
                <div className="flex flex-col items-center justify-center gap-y-4 py-12">
                    <h1 className="text-4xl font-bold text-center">
                        My Wishlists
                    </h1>
                </div>
            </div>
            <div className="bg-neutral py-5 flex-auto">
                <div className="container mx-auto px-20">
                    <p className="text-xl font-semibold pt-4 pb-1 text-gray-700">
                        {wishlists.length} wishlist{wishlists.length > 1 || wishlists.length === 0 ? 's' : ''}
                    </p>
                    <div className="flex flex-col items-center justify-center py-6">
                        <div className={"grid w-full gap-6 " + ((wishlists.length > 0) ? 'grid-cols-3' : 'grid-cols-1')}>
                            {wishlists.length === 0 && (
                                <div className="flex flex-col items-center justify-center gap-y-4 mt-5">
                                    <WishlistsEmpty className="w-64 h-40" />
                                    <p className="text-gray-700 text-xl font-bold">
                                        Currently you do not have any wishlists :(
                                    </p>
                                </div>
                            )}
                            {wishlists.map((wishlist: any) => (
                                <WishlistListItem
                                    key={wishlist.id}
                                    id={wishlist.id}
                                    title={wishlist.title}
                                    description={wishlist.description}
                                    wishlistImage={"http://localhost:5000" + wishlist.imageUrl}
                                    deleteWishlist={removeWishlist}
                                    wishlistHash={wishlist.hash}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};