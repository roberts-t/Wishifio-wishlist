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
import { NotFound } from "./NotFound";
import { UnauthorizedWarning } from "../components/UnauthorizedWarning";
import { WishlistPlaceholder } from "../components/placeholders/loading/WishlistPlaceholder";

export const Wishlist = () => {
    const { hash } = useParams();
    const [wishlistError, setWishlistError] = useState<string | null>(null);
    const [wishlist, setWishlist] = useState<any>(null);
    const [isOwner, setIsOwner] = useState<boolean>(false);
    const [showShareModal, setShowShareModal] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [imageLoading, setImageLoading] = useState<boolean>(true);

    const getWishlist = () => {
        api.get(`/wishlist/${hash}`).then((res) => {
            setWishlist(res.data.wishlist);
            setIsOwner(res.data.isOwner);
            setIsLoading(false);
        }).catch((err) => {
            if (err.response.status === 404 || err.response.status === 401) {
                setWishlistError(err?.response?.data?.errorCode);
            } else {
                processGenericServerError(err);
            }
            setIsLoading(false);
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

    const renderWishlist = (): JSX.Element | null => {
        if (isLoading) {
            return (<Page><WishlistPlaceholder /></Page>);
        }
        if (wishlistError) {
            if (wishlistError === 'NOT_FOUND') {
                return <NotFound />
            } else if (wishlistError === 'UNAUTHORIZED') {
                return <UnauthorizedWarning />
            }
        }
        return (
                <Page>
                    {wishlist && !wishlistError && (
                        <>
                            <div className="container mx-auto lg:px-20 px-4">
                                <div className="flex flex-col items-center justify-center py-12">
                                    {imageLoading && (
                                        <div className="w-24 h-24 rounded-lg bg-gray-200 animate-pulse" />
                                    )}
                                    <img
                                        src={process.env.REACT_APP_SERVER_URL + wishlist.imageUrl}
                                        alt="Wishlist cover"
                                        className={"w-24 h-24 rounded-lg object-cover " + (imageLoading && 'hidden')}
                                        onLoad={() => setImageLoading(false)}
                                    />
                                    <h1 className="sm:text-4xl text-3xl font-bold text-center mt-2">
                                        Wishlist
                                    </h1>
                                    <p className="m-0 text-sm">By {wishlist.createdBy.username}</p>
                                    <h2 className="sm:text-xl text-lg px-3 font-semibold text-center text-gray-600 break-words w-full">
                                        {wishlist.title}
                                    </h2>
                                    <p className="text-sm text-gray-600 mx-auto sm:px-12 px-4 mt-2 break-words w-full text-center">
                                        {wishlist.description}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-neutral py-5 flex-auto">
                                <div className="container mx-auto lg:px-20 px-4">
                                    {isOwner && (
                                        <>
                                            <div className="flex flex-row gap-x-4 sm:pt-6 pt-2 pb-2 flex-wrap sm:justify-start justify-center gap-y-4">
                                                <Link
                                                    to={`/wishlist/${hash}/edit`}
                                                    className="bg-dark hover:bg-dark-hover transition text-white px-6 sm:py-2 py-2.5 shadow-sm font-medium rounded-sm flex flex-row justify-center items-center gap-x-1"
                                                >
                                                    <IoMdSettings className="text-lg" /> Settings
                                                </Link>
                                                <button
                                                    className="bg-dark hover:bg-dark-hover transition text-white px-6 sm:py-2 py-2.5 shadow-sm font-medium rounded-sm flex flex-row justify-center items-center gap-x-1"
                                                    type="button"
                                                    onClick={() => setShowShareModal(true)}
                                                >
                                                    <BiShare className="text-lg" /> Share
                                                </button>
                                                <Link
                                                    className="sm:basis-auto border-gray-600 transition hover:bg-sky-500 hover:text-white hover:border-sky-500 border-2 text-dark transition px-6 py-2 shadow-sm font-medium rounded-sm flex flex-row justify-center items-center gap-x-1"
                                                    to={`/wishlist/${hash}/add`}
                                                >
                                                    <IoMdAddCircleOutline className="text-lg" />
                                                    Add a wish
                                                </Link>
                                            </div>
                                            <p className="sm:pb-6 pb-2 text-gray-600 sm:text-start text-center">Visibility: <span>{getUppercaseVisibility()}</span></p>
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
    }

    return renderWishlist();
};