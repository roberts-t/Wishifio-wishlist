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
        <div className="flex flex-row shadow bg-white">
            <div className="p-3 bg-gray-200 flex-shrink-0 flex items-center">
                <img
                    src={process.env.REACT_APP_SERVER_URL + props.item.imageUrl}
                    className="w-64 h-48 rounded object-cover"
                    alt="Product"
                />
            </div>
            <div className="flex flex-col p-4 w-full">
                <div className="uppercase font-bold text-xl text-gray-800">
                    {props.item.name}
                </div>
                <p className="text-gray-500 h-6">
                    {props.item.subtitle}
                </p>
                <div className="grid grid-cols-3 flex-grow-0 mt-5">
                    <div>
                        <span className="text-gray-600">Price range:</span>
                        <span className="text-gray-900 font-semibold text-lg block">{props.item.price}</span>
                    </div>
                    <div className="col-span-2">
                        <span className="text-gray-600">Notes:</span>
                        <span className="text-gray-500 line-clamp-3 block">{props.item.note || "-"}</span>
                    </div>
                </div>
                <div className="mb-2 mt-5 flex flex-row justify-center gap-x-5">
                    { props.item.url &&
                        <a href={props.item.url} target="_blank" rel="noreferrer" className="bg-sky-500 rounded px-7 py-2.5 text-white flex flex-row justify-center items-center hover:bg-sky-600 transition gap-x-1">
                            <AiOutlineLink className="text-lg" /> View website
                        </a>
                    }
                    { props.isOwner && (
                        <>
                            <Link
                                to={`/wishlist/${props.wishlistHash}/edit/${props.item.id}`}
                                className="border-gray-700 border-2 rounded px-7 py-2.5 text-dark flex flex-row font-semibold justify-center items-center hover:bg-dark hover:text-white hover:border-dark transition gap-x-1">
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
