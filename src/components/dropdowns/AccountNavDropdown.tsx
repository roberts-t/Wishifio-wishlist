import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { api } from '../../config/request';
import { FiChevronDown } from 'react-icons/fi';
import { BsGift, BsDoorOpen } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';

export const AccountNavDropdown: React.FC<AccountNavDropdownProps> = (props) => {

    const logOut = () => {
        api.get('/logout').then(async() => {
            await props.getAuthStatus();
            window.location.href = "/";
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <Menu as="div" className="relative inline-block">
                <Menu.Button className="flex flex-row items-center">
                    <FaRegUser className="text-3xl mr-1 bg-sky-400 text-white border-sky-500 p-2 rounded-full overflow-visible" />
                    <span className="font-semibold">{props?.user?.username}</span>
                    <FiChevronDown className="text-xl" />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="border border-gray-200 absolute right-0 mt-2.5 origin-top-right w-44 divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 w-full">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link to="/wishlists">
                                    <button
                                        className={`${
                                            active ? 'bg-sky-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2`}
                                    >
                                        <BsGift className="mr-1.5" />
                                        <span>My wishlists</span>
                                    </button>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link to="/account">
                                        <button
                                            className={`${
                                                active ? 'bg-sky-500 text-white' : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2`}
                                        >
                                            <FaRegUser className="mr-1.5" />
                                            <span>Account</span>
                                        </button>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={logOut}
                                        className={`${
                                            active ? 'bg-sky-500 text-white' : 'text-gray-900'
                                        } group flex w-full items-center rounded-md px-2 py-2`}
                                    >
                                        <BsDoorOpen className="mr-1.5" />
                                        Log out
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};

interface AccountNavDropdownProps {
    user: any;
    getAuthStatus: () => void;
}