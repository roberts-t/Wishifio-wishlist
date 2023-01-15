import React from 'react';

export const Footer = () => {
    return (
        <footer className="w-full p-3 border-t bg-zinc-200">
            <div className="container mx-auto px-20 flex flex-col items-center justify-center text-sm gap-y-2">
                <div>
                    <p className="text-gray-700 text-center">
                        Made with ❤️ by RT and VV
                    </p>
                </div>
                <div className="text-gray-600">
                    WishBox &copy; 2022
                </div>
            </div>
        </footer>
    );
};