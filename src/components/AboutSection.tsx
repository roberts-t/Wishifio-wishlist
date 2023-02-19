import React from 'react';
import { ReactComponent as Separator } from "../assets/vectors/about-separator.svg";

export const AboutSection: React.FC<AboutSectionProps> = (props) => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1">
            <div className={"flex justify-center items-center px-10 md:mb-20 mb-10 " + (props.contentFirst ? "md:order-2 order-1" : "order-1")}>
                {props.icon}
            </div>
            <div className={"sm:mb-5 mb-2 " + (props.contentFirst ? "order-1 " : "md:order-2 order-1 ") + (props.separator && "pb-14") }>
                <div className={"bg-sky-500 h-full pt-10 lg:pr-10 px-8 lg:pl-24 text-white " + (!props.separator ? "pb-16" : "pb-4")}>
                    <h2 className="font-bold text-2xl mb-1.5">
                        {props.title}
                    </h2>
                    <p>
                        {props.content}
                    </p>
                </div>
                {props.separator && <Separator className="mx-auto block -mt-0.5" />}
            </div>
        </div>
    );
};

interface AboutSectionProps {
    title: string;
    content: string;
    icon: JSX.Element;
    contentFirst?: boolean;
    separator?: boolean;
}