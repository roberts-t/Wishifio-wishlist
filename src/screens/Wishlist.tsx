import React, { useEffect, useState } from 'react';
import { IoMdSettings, IoMdAddCircleOutline } from 'react-icons/io';
import { WishlistItem } from '../components/WishlistItem';
import { BiShare } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { api } from '../config/request';
import { ReactComponent as EmptyWishlist } from '../assets/vectors/empty-wishlist.svg';
import { Page } from "./Page";
import { processGenericServerError } from "../config/serverErrors";
import { ShareWishlistModal } from "../components/modals/ShareWishlistModal";

export const Wishlist = () => {
    const { hash } = useParams();
    const [wishlist, setWishlist] = useState<any>(null);
    const [isOwner, setIsOwner] = useState<boolean>(false);
    const [showShareModal, setShowShareModal] = useState<boolean>(false);

    const getWishlist = () => {
        api.get(`/wishlist/${hash}`).then((res) => {
            setWishlist(res.data.wishlist);
            setIsOwner(res.data.isOwner);
        }).catch((err) => {
            processGenericServerError(err);
        });
    }

    const removeItem = (id: string) => {
        const newItems = wishlist.items.filter((item: any) => item._id !== id);
        setWishlist({
            ...wishlist,
            items: newItems
        });
    }

    const setNewVisibility = (visibility: string) => {
        setWishlist((prevWishlist: any) => ({
            ...prevWishlist,
            settings: {
                ...prevWishlist.settings,
                visibility: visibility
            }
        }));
    }

    const getUppercaseVisibility = () => {
        const visibility = wishlist?.settings?.visibility;
        if (!visibility) return 'Private';
        return visibility.charAt(0).toUpperCase() + visibility.slice(1);
    }

    useEffect(() => {
        getWishlist();
    }, []);

    return (
        <Page>
            {wishlist && (
                <>
                    <div className="container mx-auto px-20">
                        <div className="flex flex-col items-center justify-center py-12">
                            <img
                                src={process.env.REACT_APP_SERVER_URL + wishlist.imageUrl}
                                alt="Wishlist cover"
                                className="w-24 h-24 rounded-lg object-cover"
                            />
                            <h1 className="text-4xl font-bold text-center mt-2">
                                Wishlist
                            </h1>
                            <p className="m-0 text-sm">By {wishlist.createdBy.username}</p>
                            <h2 className="text-xl font-semibold text-center text-gray-600">
                                {wishlist.title}
                            </h2>
                            <p className="text-sm text-gray-600 mx-auto px-12 mt-2">
                                {wishlist.description}
                            </p>
                        </div>
                    </div>
                    <div className="bg-neutral py-5 flex-auto">
                        <div className="container mx-auto px-20">
                            {isOwner && (
                                <>
                                    <div className="flex flex-row gap-x-4 pt-6 pb-2">
                                        <button className="bg-dark hover:bg-dark-hover transition text-white px-6 py-2 shadow-sm font-medium rounded-sm flex flex-row justify-center items-center gap-x-1">
                                            <IoMdSettings className="text-lg" /> Settings
                                        </button>
                                        <button
                                            className="bg-dark hover:bg-dark-hover transition text-white px-6 py-2 shadow-sm font-medium rounded-sm flex flex-row justify-center items-center gap-x-1"
                                            type="button"
                                            onClick={() => setShowShareModal(true)}
                                        >
                                            <BiShare className="text-lg" /> Share
                                        </button>
                                        <Link
                                            className="border-gray-600 transition hover:bg-sky-500 hover:text-white hover:border-sky-500 border-2 text-dark transition px-6 py-2 shadow-sm font-medium rounded-sm flex flex-row justify-center items-center gap-x-1"
                                            to={`/wishlist/${hash}/add`}
                                        >
                                            <IoMdAddCircleOutline className="text-lg" />
                                            Add a wish
                                        </Link>
                                    </div>
                                    <p className="pb-6 text-gray-600">Visibility: <span>{getUppercaseVisibility()}</span></p>
                                </>
                            )}
                            <h3 className="text-gray-700 font-medium text-xl my-2.5">Wishlist wishes</h3>
                            <div className="grid grid-cols-1 gap-y-6 mb-8">
                                {wishlist.items.length > 0 ? (
                                    wishlist.items.map((item: any) => (
                                        <WishlistItem
                                            key={item._id}
                                            item={item}
                                            isOwner={isOwner}
                                            wishlistHash={hash}
                                            removeItem={removeItem}
                                        />
                                    ))
                                    ) :
                                    (
                                        <div className="flex justify-center flex-col items-center">
                                            <EmptyWishlist className="w-48 h-48" />
                                            <p className="text-gray-700 text-xl font-bold">Currently wishlist does not have any wishes</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <ShareWishlistModal
                        isOpen={showShareModal}
                        setIsOpen={setShowShareModal}
                        wishlistHash={wishlist.hash}
                        currentPrivacyOption={wishlist.settings.visibility}
                        setWishlistPrivacy={setNewVisibility}
                    />
                </>
            )}
        </Page>
    );
};