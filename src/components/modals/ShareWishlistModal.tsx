import React, { Fragment, useState } from 'react';
import { Dialog, Transition, Listbox } from '@headlessui/react';
import { BiLink } from 'react-icons/bi';
import { BsChevronExpand, BsCheck, BsXLg } from 'react-icons/bs';
import { useLocation } from "react-router-dom";
import { api } from "../../config/request";
import { CgSpinner } from "react-icons/cg";

const privacyOptions = [
    { name: 'Public', value: 'public', description: 'Anyone with link can access this wishlist' },
    { name: 'Private', value: 'private', description: 'Only you can see this wishlist' },
    { name: 'Restricted', value: 'restricted', description: 'Only logged in users with link can access this wishlist' },
];
export const ShareWishlistModal: React.FC<ShareWishlistModalProps> = (props) => {
    const getCurrentPrivacy = () => {
        const currentIndex = privacyOptions.findIndex((option) => option.value === props.currentPrivacyOption);
        if (currentIndex < 0) {
            return privacyOptions[0];
        }
        return privacyOptions[currentIndex];
    }

    const [selectedPrivacy, setSelectedPrivacy] = useState(getCurrentPrivacy);
    const [isSaving, setIsSaving] = useState(false);
    const location = useLocation();
    const shareUrl = `${window.location.origin}${location.pathname}`;

    const closeModal = () => {
        props.setIsOpen(false);
    }

    const copyLink = async () => {
        await navigator.clipboard.writeText(shareUrl);
    }

    const saveVisibility = () => {
        if (isSaving) return;
        setIsSaving(true);
        api.put(`/wishlist/${props.wishlistHash}/share`, {
            visibility: selectedPrivacy.value
        }).then(() => {
            setIsSaving(false);
            props.setWishlistPrivacy(selectedPrivacy.value);
            closeModal();
        }).catch((err) => {
            setIsSaving(false);
            console.log(err);
        });
    }

    return (
        <>
            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10 font-montserrat" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <span
                                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 transition cursor-pointer p-1"
                                        onClick={closeModal}
                                    >
                                        <BsXLg />
                                    </span>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-bold leading-6 text-gray-900"
                                    >
                                        Share your wishlist
                                        <hr className="mt-3"/>
                                    </Dialog.Title>

                                    <div className="mt-4 flex flex-col">
                                        <p className="font-semibold mb-1">Page link</p>
                                        <div className="bg-gray-200 py-2 px-3 rounded">
                                            {shareUrl}
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto mt-2 border-2 border-sky-500 text-sky-500 font-medium px-4 py-1 rounded-sm hover:bg-sky-500 hover:text-white transition duration-200 rounded focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-sky-500 focus-visible:ring-opacity-50 focus-visible:ring-offset-1 focus-visible:ring-offset-sky-300"
                                            onClick={copyLink}
                                        >
                                            Copy link <BiLink className="inline-block mb-0.5 text-lg -ml-0.5" />
                                        </button>
                                        <div className="mt-4">
                                            <p className="font-semibold mb-1">Wishlist visibility</p>
                                            <Listbox value={selectedPrivacy} onChange={setSelectedPrivacy}>
                                                <div className="relative mt-1">
                                                    <Listbox.Button className="relative w-full bg-gray-50 cursor-pointer rounded-md border shadow-sm border-gray-400 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-sky-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-300">
                                                        <div>
                                                            <span className="block truncate leading-none">{selectedPrivacy.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <BsChevronExpand
                                                                    className="h-5 w-5 text-gray-400"
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block truncate text-gray-600 text-sm leading-none">
                                                                {selectedPrivacy.description}
                                                            </span>
                                                        </div>
                                                    </Listbox.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        leave="transition ease-in duration-100"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Listbox.Options
                                                            className="absolute mt-0.5 w-full pb-2.5 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                            {privacyOptions.map((option, optionIdx) => (
                                                                <Listbox.Option
                                                                    key={optionIdx}
                                                                    className={({active}) =>
                                                                        `relative cursor-pointer select-none py-2 pl-8 pr-4 ${
                                                                            active && 'bg-gray-100'
                                                                        }`
                                                                    }
                                                                    value={option}
                                                                >
                                                                    {({selected}) => (
                                                                        <>
                                                                            <span
                                                                                className="block truncate"
                                                                            >
                                                                                {option.name}
                                                                                <span className="block truncate text-gray-600 text-sm leading-none py-0.5">
                                                                                    {option.description}
                                                                                </span>
                                                                            </span>
                                                                            {selected && (
                                                                                <span
                                                                                    className="absolute inset-y-0 left-0 flex items-center pl-2 text-sky-500"
                                                                                >
                                                                                    <BsCheck
                                                                                        className="h-5 w-5"
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                </span>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                                <button
                                                    className={"mt-10 mx-auto block bg-sky-500 text-white font-semibold px-12 py-2 rounded-sm transition duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 " + (isSaving ? "opacity-80 cursor-pointer" : "hover:bg-sky-600")}
                                                    onClick={saveVisibility}
                                                >
                                                    { isSaving ? <CgSpinner className="animate-spin block text-lg" /> : "Save" }
                                                </button>
                                            </Listbox>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

interface ShareWishlistModalProps {
    currentPrivacyOption: string;
    wishlistHash: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    setWishlistPrivacy: (privacy: string) => void;
}