import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineCreate } from 'react-icons/md';
import { HiOutlineTrash } from 'react-icons/hi';
import { api } from '../../config/request';
import { ConfirmModal } from '../modals/ConfirmModal';
import { processGenericServerError } from "../../config/serverErrors";

export const WishlistListItemDropdown: React.FC<WishlistListItemDropdownProps> = (props) => {

    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const handleDeleteWishlist = () => {
        api.delete(`/wishlist/${props.wishlistHash}`).then(async() => {
            props.deleteWishlist(props.wishlistHash);
        }).catch((err) => {
            processGenericServerError(err);
        });
    }

    return (
        <div className="absolute top-1 right-2">
            <Menu as="div" className="relative inline-block">
                <div>
                    <Menu.Button className="w-full py-0.5 px-0.5 justify-center text-xl text-white focus:outline-none ">
                        <BsThreeDots />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-28 -mt-1 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-sky-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        <MdOutlineCreate className="mr-0.5" />
                                        Edit
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${
                                            active ? 'bg-red-400 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        onClick={() => setIsConfirmModalOpen(true)}
                                    >
                                        <HiOutlineTrash className="mr-0.5" />
                                        Remove
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            <ConfirmModal
                isOpen={isConfirmModalOpen}
                setIsOpen={setIsConfirmModalOpen}
                title="Are you sure?"
                description="You are about to delete wishlist. This action cannot be undone."
                onConfirm={handleDeleteWishlist}
            />
        </div>
    );
};

interface WishlistListItemDropdownProps {
    wishlistHash: string;
    deleteWishlist: (id: string) => void;
}