import React from 'react';

export const WishStep: React.FC<WishProp> = (props) => {
    return (
        <div className="flex flex-col items-left border-2 border-sky-500 rounded-md p-4 shadow">
            {props.wishIconElement}
            <h2 className="font-bold mt-1.5">{props.title}</h2>
            <p className="text-gray-700 mt-2">
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