import React from 'react';

export const NavLink: React.FC<NavLinkProps> = (props) => {
    return (
        <li>
            <a
                href={props.href || '#'}
                className="text-gray-700 hover:text-black transition duration-200 font-medium"
            >
                {props.title}
            </a>
        </li>
    );
};

interface NavLinkProps {
    href?: string;
    title: string;
}