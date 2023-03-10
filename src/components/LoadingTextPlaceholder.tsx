import React from 'react';

export const LoadingTextPlaceholder: React.FC<LoadingTextPlaceholderProps> = (props) => {

    const renderLines = () => {
        const lines = [];
        for (let i = 0; i < (props.lines || 1); i++) {
            lines.push(
                <div
                    key={i}
                    className={"h-4 bg-gray-200 rounded animate-pulse " + (props.height || "h-4") + " " + (props.width || "w-16") + " " + (props.className)}
                />
            );
        }
        return lines;
    };

    return (
        <>
            {renderLines()}
        </>
    )
};

interface LoadingTextPlaceholderProps {
    height?: string;
    width?: string;
    className?: string;
    lines?: number;
}