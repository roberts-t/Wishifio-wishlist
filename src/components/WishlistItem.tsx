import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { MdOutlineCreate } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

export const WishlistItem = () => {
    return (
        <div className="flex flex-row shadow bg-white">
            <div className="p-3 bg-gray-200 flex-shrink-0 flex items-center">
                <img
                    src="https://massdrop-s3.imgix.net/product-images/drop-epos-pc38x-gaming-headset/FP/RcgDWTQITiqKcOhiwLGK_PC.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70"
                    className="w-72 rounded h-fit"
                    alt="Product"
                />
            </div>
            <div className="flex flex-col p-4">
                <div className="uppercase font-bold text-xl text-gray-800">
                    DROP + EPOS PC38X GAMING HEADSET
                </div>
                <p className="text-gray-500 h-6">
                    The PC38X is a collaboration between EPOS and Massdrop.
                </p>
                <div className="grid grid-cols-3 flex-grow-0 mt-5">
                    <div>
                        <span className="text-gray-600">Price range:</span>
                        <span className="text-gray-900 font-semibold text-lg block"> $140 - $200</span>
                    </div>
                    <div className="col-span-2">
                        <span className="text-gray-600">Notes:</span>
                        <span className="text-gray-500 line-clamp-3 block">An upgraded version of the crowd-favorite PC37X, our PC38X gaming headset is a level up in comfort, build quality, and sonic performance. Now, to celebrate Sennheiser Gaming’s rebrand to EPOS, the PC38X is launching in a new all-black colorway. It’s the same iconic headset, with a refined look to complement any setup. Powered by high-fidelity drivers found on Sennheiser’s venerable GSP 500 and 600 headsets, the PC38X delivers vivid sonic details with an ultra-wide frequency response. It can also be driven more easily than the PC37X, courtesy of a reduced 28-ohm driver impedance. On the exterior, a plush headband with breathable mesh-knit pads and a split design keeps you cooler and better supported for long sessions. Both knit mesh and classic velour earpads are included, so you can choose your preferred fit. Finally, for improved compatibility, the PC38X comes with two cables: one 3.5-millimeter TRRS cable for mobile devices and consoles (no adapter required), and a split cable for PCs.</span>
                    </div>
                </div>
                <div className="mb-2 mt-5 flex flex-row justify-center gap-x-5">
                    <a href="#" className="bg-sky-500 rounded px-7 py-2.5 text-white flex flex-row justify-center items-center hover:bg-sky-600 transition gap-x-1">
                        <AiOutlineLink className="text-lg" /> View website
                    </a>
                    <button className="border-gray-700 border-2 rounded px-7 py-2.5 text-dark flex flex-row font-semibold justify-center items-center hover:bg-dark hover:text-white hover:border-dark transition gap-x-1">
                        <MdOutlineCreate className="text-lg" /> Edit
                    </button>
                    <button className="border-red-500 text-red-500 border-2 rounded px-4 py-2.5 text-dark flex flex-row font-semibold justify-center items-center hover:bg-red-500 hover:text-white transition gap-x-1">
                        <RiDeleteBinLine className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};
