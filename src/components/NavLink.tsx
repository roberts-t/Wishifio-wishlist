import React from 'react';

export const NavLink: React.FC<NavLinkProps> = (props) => {

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (props.requiresAuth && !props.isAuth && props.noAuthAction) {
            e.preventDefault();
            props.noAuthAction();
        }
    }

    return (
        <li>
            <a
                href={props.href || '#'}
                onClick={handleClick}
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
    requiresAuth?: boolean;
    isAuth?: boolean;
    noAuthAction?: () => void;
}