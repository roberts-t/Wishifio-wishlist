import React from 'react';
import { Page } from "./Page";
import { HiArrowDown } from "react-icons/hi2";
import { BsFillGiftFill } from 'react-icons/bs';
import { ReactComponent as Icon1 } from "../assets/vectors/about-icon-1.svg";
import { ReactComponent as Icon2 } from "../assets/vectors/about-icon-2.svg";
import { ReactComponent as Icon3 } from "../assets/vectors/about-icon-3.svg";
import { ReactComponent as IconMail } from "../assets/vectors/about-icon-mail.svg";
import { ReactComponent as Ornament } from "../assets/vectors/about-ornament.svg";
import { AboutSection } from "../components/AboutSection";

export const About = () => {
    return (
        <Page>
            <div className="h-10 bg-sky-500 relative">
                <Ornament className="absolute sm:top-2 top-3 sm:left-16 left-8 sm:h-16 sm:w-16 w-14 h-14" />
            </div>
            <div>
            {/* About us, bg image */}
                <div className="flex justify-center items-center bg-[url('assets/images/about/about-header.jpg')] bg-right-top md:h-about h-64 w-full bg-cover bg-no-repeat">
                    <h1 className="text-4xl text-white font-bold text-center font-montserrat">
                        ABOUT US
                    </h1>
                </div>
                {/* circles */}
                <div className="flex flex-col w-full items-center gap-3 justify-center mt-8">
                    <div className="w-8 h-8 bg-sky-200 rounded-full"></div>
                    <div className="w-11 h-11 bg-sky-300 rounded-full"></div>
                    <div className="w-14 h-14 bg-sky-500 rounded-full flex justify-center items-center">
                        <HiArrowDown size='2.5rem' className="fill-white" />
                    </div>
                </div>
                {/* Text, line, icon */}
                <div className="mt-10">
                    <div className="w-28 h-28 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full p-3 mx-auto flex justify-center items-center mt-6">
                        <BsFillGiftFill  className="text-6xl text-white" />
                    </div>
                    <h1 className="text-center font-bold sm:text-4xl text-3xl mt-1">WishBox</h1>
                    <h1 className="sm:text-xl text-lg text-center mt-4 px-6">
                        Every great accomplishment begins with a single <br className="sm:block hidden" /> idea and the courage to take the first step
                    </h1>
                        <hr className="h-1.5 w-about mx-auto my-2 w-80 bg-sky-500 rounded"/>
                </div>
                {/* Icons, info */}
                <div className="container mx-auto mt-16">
                    <div>
                        <AboutSection
                            title="What is WishBox?"
                            separator={true}
                            contentFirst={true}
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ipsum accumsan, gravida nunc in, vehicula purus. Maecenas lobortis nunc nisl, eget interdum dolor convallis et. Aenean a tincidunt augue. Donec porta massa et felis imperdiet sodales. Quisque hendrerit libero ut lectus tempus imperdiet. Duis eget sapien vel quam volutpat sollicitudin. Curabitur non rhoncus lacus. Nulla ut efficitur massa, facilisis semper ante. Fusce scelerisque mauris a diam hendrerit tempor. Sed sagittis nisi ut vestibulum iaculis."
                            icon={<Icon1 />}
                        />

                        <AboutSection
                            title="What is our goal?"
                            separator={true}
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ipsum accumsan, gravida nunc in, vehicula purus. Maecenas lobortis nunc nisl, eget interdum dolor convallis et. Aenean a tincidunt augue. Donec porta massa et felis imperdiet sodales. Quisque hendrerit libero ut lectus tempus imperdiet. Duis eget sapien vel quam volutpat sollicitudin. Curabitur non rhoncus lacus. Nulla ut efficitur massa, facilisis semper ante. Fusce scelerisque mauris a diam hendrerit tempor. Sed sagittis nisi ut vestibulum iaculis."
                            icon={<Icon2 />}
                        />

                        <AboutSection
                            title="Who are we?"
                            contentFirst={true}
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ipsum accumsan, gravida nunc in, vehicula purus. Maecenas lobortis nunc nisl, eget interdum dolor convallis et. Aenean a tincidunt augue. Donec porta massa et felis imperdiet sodales. Quisque hendrerit libero ut lectus tempus imperdiet. Duis eget sapien vel quam volutpat sollicitudin. Curabitur non rhoncus lacus. Nulla ut efficitur massa, facilisis semper ante. Fusce scelerisque mauris a diam hendrerit tempor. Sed sagittis nisi ut vestibulum iaculis."
                            icon={<Icon3 />}
                        />
                    </div>
                    {/* email */}
                    <div className="grid md:grid-cols-2 grid-cols-1 place-items-center mb-16 mt-7 px-6">
                        <IconMail className="md:w-80 md:h-80 w-56 h-56" />
                        <div>
                            <h1 className="sm:text-4xl text-3xl font-bold mb-4 text-center md:mt-0 mt-5">Get in touch with us</h1>
                            <div className="text-base mx-auto mt-4 mb-4 sm:pl-5 pl-6">
                                Email your questions or report any problems to <br /> <h1 className="font-bold">wishboxsupport@gmail.com</h1> We will try to review or answer as soon as possible
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};