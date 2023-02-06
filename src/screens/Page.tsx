import React from 'react';
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Page = ({ children }: PageProps) => {
    return (
        <div className="min-h-screen font-montserrat flex flex-col">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

interface PageProps {
    children: React.ReactNode;
}