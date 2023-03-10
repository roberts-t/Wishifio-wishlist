import React from 'react';

export const WishStep: React.FC<WishProp> = (props) => {
    return (
        <div className="flex flex-col items-left border-2 border-sky-500 rounded-md sm:p-4 p-3.5 shadow">
            {props.wishIconElement}
            <h2 className="font-bold sm:mt-1.5 mt-1">{props.title}</h2>
            <p className="text-gray-700 sm:mt-2 mt-1 sm:text-normal text-sm">
                {props.description}
            </p>
        </div>
    );
};

interface WishProp {
    title: string;
    description: string;
    wishIconElement: JSX.Element;
}