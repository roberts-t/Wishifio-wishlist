import React from 'react';
import { HiArrowNarrowLeft } from "react-icons/hi";

export const BackButton: React.FC<BackButtonProps> = (props) => {
    return (
        <button
            onClick={props.onClick}
            type="button"
            className="absolute text-sm border border-gray-300 flex items-center top-5 bg-gray-100 font-medium px-3 py-1.5 rounded-md text-gray-600 hover:bg-gray-200 transition"
        >
            <HiArrowNarrowLeft className="inline-block mr-1 text-lg" />
            <span className="font-semibold">{props.label || "Back"}</span>
        </button>
    );
};

interface BackButtonProps {
    onClick: () => void;
    label?: string;
}

