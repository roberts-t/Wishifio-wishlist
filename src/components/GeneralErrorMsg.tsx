import React from 'react';
import { MdOutlineDangerous } from 'react-icons/md';

export const GeneralErrorMsg = ({ message }: GeneralErrorMsgProps) => {
    return (
        <p className="text-red-500 font-medium">
            <MdOutlineDangerous className="inline mr-0.5 align-middle text-xl" />
            <span className="align-middle">{message}</span>
        </p>
    );
};

interface GeneralErrorMsgProps {
    message: string;
}