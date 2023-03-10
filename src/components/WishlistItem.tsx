import React, {useState} from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { MdOutlineCreate } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { CgSpinner } from 'react-icons/cg';
import { api } from "../config/request";
import { deleteWishlistErrors, processServerErrors } from "../config/serverErrors";
import {ConfirmModal} from "./modals/ConfirmModal";
import {GeneralErrorMsg} from "./GeneralErrorMsg";
import { Link } from "react-router-dom";

export const WishlistItem: React.FC<WishlistItemProps> = (props) => {
    const [generalError, setGeneralError] = React.useState<string | null>(null);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = React.useState<boolean>(false);
    const [imageLoading, setImageLoading] = useState<boolean>(true);

    const handleDelete = () => {
        if (!props.isOwner || !props.wishlistHash) {
            return;
        }
        setIsDeleting(true);
        api.delete(`/wishlist/${props.wishlistHash}/item/${props.item.id}`)
            .then(() => {
                setIsDeleting(false);
                props.removeItem(props.item.id);
            }).catch((err) => {
                const serverError = processServerErrors(err, undefined, setGeneralError, deleteWishlistErrors);
                if (!serverError) {
                    setGeneralError(deleteWishlistErrors['ITEM_ERROR' as keyof typeof deleteWishlistErrors].msg);
                }
                setIsDeleting(false);
            }
        );
    }

    const handleClickDelete = () => {
        if (isDeleting) return;
        setIsConfirmModalOpen(true);
    }

    return (
        <div className="flex md:flex-row flex-col shadow bg-white">
            <div className="p-3 bg-gray-200 flex-shrink-0 flex items-center justify-center">
                {imageLoading && (
                    <div className="animate-pulse bg-gray-300 w-64 h-48 rounded"></div>
                )}
                <img
                    src={process.env.REACT_APP_SERVER_URL + props.item.imageUrl}
                    className={"w-64 h-48 rounded object-cover " + (imageLoading && 'hidden')}
                    alt="Product"
                    onLoad={() => setImageLoading(false)}
                />
            </div>
            <div className="flex flex-col p-4 min-w-0">
                <div className="uppercase font-bold text-xl text-gray-800 w-full break-words">
                    {props.item.name}
                </div>
                <p className="text-gray-500 min-h-6 w-full break-words">
                    {props.item.subtitle}
                </p>
                <div className="grid sm:grid-cols-3 gap-y-2 gap-x-2 grid-cols-1 flex-grow-0 mt-5">
                    <div>
                        <span className="text-gray-600">Price range:</span>
                        <span className="text-gray-900 font-semibold text-lg block w-full break-words">{props.item.price}</span>
                    </div>
                    <div className="col-span-2">
                        <span className="text-gray-600">Notes:</span>
                        <span className="text-gray-500 line-clamp-3 block break-words w-full">{props.item.note || "-"}</span>
                    </div>
                </div>
                <div className="mb-2 mt-5 flex flex-row justify-center sm:gap-x-5 gap-x-4 sm:gap-y-0 ">
                    { props.item.url &&
                        <a href={props.item.url} target="_blank" rel="noreferrer" className="bg-sky-500 rounded sm:px-7 px-3.5 py-2.5 text-white flex flex-row justify-center items-center hover:bg-sky-600 transition gap-x-1">
                            <AiOutlineLink className="text-lg" /> <span className="sm:inline hidden">View</span> Website
                        </a>
                    }
                    { props.isOwner && (
                        <>
                            <Link
                                to={`/wishlist/${props.wishlistHash}/edit/${props.item.id}`}
                                className="border-gray-700 border-2 rounded sm:px-7 px-3.5 py-2.5 text-dark flex flex-row font-semibold justify-center items-center hover:bg-dark hover:text-white hover:border-dark transition gap-x-1">
                                <MdOutlineCreate className="text-lg" /> Edit
                            </Link>
                            <button onClick={handleClickDelete} className="border-red-500 text-red-500 border-2 rounded px-4 py-2.5 text-dark flex flex-row font-semibold justify-center items-center hover:bg-red-500 hover:text-white transition gap-x-1">
                                {isDeleting ?
                                    <CgSpinner className="animate-spin text-lg" /> :
                                    <RiDeleteBinLine className="text-lg" />
                                }
                            </button>
                        </>
                    )}
                </div>
                { generalError &&
                    <div className="text-center mt-1">
                        <GeneralErrorMsg message={generalError} />
                    </div>
                }
            </div>
            <ConfirmModal
                isOpen={isConfirmModalOpen}
                setIsOpen={setIsConfirmModalOpen}
                title="Are you sure?"
                description="You are about to delete a wish. This action cannot be undone."
                onConfirm={handleDelete}
            />
        </div>
    );
};

interface WishlistItemProps {
    wishlistHash: string | undefined
    item: any
    isOwner: boolean
    removeItem: (id: string) => void
}
