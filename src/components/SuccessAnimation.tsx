import React from 'react';
import { BsCheck } from "react-icons/bs";

export const SuccessAnimation: React.FC<SuccessAnimationProps> = (props) => {
    return (
        <div className="h-6 overflow-hidden flex justify-center">
            <div
                className={"font-semibold flex flex-row gap-x-1 items-center translate-y-full opacity-0 " + (props.animationPlaying && "animate-slide-in")}
                onAnimationEnd={() => props.setAnimationPlaying(false)}
            >
                <div className="flex h-5 w-5 rounded-full justify-center items-center bg-success">
                    <BsCheck className="text-white text-lg" />
                </div>
                <span className="text-gray-900">Success!</span>
            </div>
        </div>
    );
};

interface SuccessAnimationProps {
    animationPlaying: boolean;
    setAnimationPlaying: (value: boolean) => void;
}