import { FormInput } from "../inputs/FormInput";
import React from "react";
import { FormFileUpload } from "../inputs/FormFileUpload";
import { imageValidation } from "../../../helpers/validationHelpers";

export const WishFormBody = () => {
    return (
        <>
            <WishField
                name="name"
                label="Wish name"
                placeholder="Enter the wish"
                required
            />
            <WishField
                name="subtitle"
                label="Wish subtitle"
                placeholder="e.g. short description, features, etc."
            />
            <WishField
                name="url"
                label="Website containing more info"
                placeholder="https://example.com/"
            />
            <WishField
                name="price"
                label="Price or price range"
                placeholder="e.g. $100; 100€-200€; Free etc."
            />
            <FormFileUpload
                name="image"
                label="Wish image"
                labelClassName="text-gray-800 font-semibold"
                image={true}
                customLook={true}
                fileValidation={imageValidation}
                customSize="48"
                containerClassName="flex flex-col gap-y-2 items-center justify-center"
            />
            <WishField
                name="note"
                label="Notes"
                placeholder="Enter any notes you have about this wish"
                tag="textarea"
                inputClassName="border-gray-300 border-2 rounded px-4 py-2 w-full h-full"
            />
        </>
    );
}

const WishField = ({name, label, placeholder, required, containerClassName, tag, inputClassName}: WishFieldProps) => {
    return (
        <FormInput
            name={name}
            label={label}
            tag={tag}
            placeholder={placeholder}
            required={required || false}
            inputClassName={inputClassName || "border-gray-300 border-2 rounded px-4 py-2 w-full"}
            labelClassName="text-gray-800 font-semibold"
            containerClassName={containerClassName || "flex flex-col gap-y-1"}
        />
    );
}

interface WishFieldProps {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
    containerClassName?: string;
    tag?: string;
    inputClassName?: string;
}