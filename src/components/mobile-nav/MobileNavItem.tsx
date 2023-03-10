import React from 'react';
import { Link } from "react-router-dom";

export const MobileNavItem: React.FC<MobileNavItemProps> = (props) => {
    return (
        <li className={"text-lg py-2.5 px-4 rounded-md " + ((props.location === props.linkTo) ? "bg-sky-500 text-white font-bold" : "text-slate-600 font-semibold")}>
            <Link to={props.linkTo} className="flex items-center gap-x-3">
                {props.icon} {props.text}
            </Link>
        </li>
    );
};

interface MobileNavItemProps {
    linkTo: string;
    icon: React.ReactNode;
    text: string;
    location: string;
}