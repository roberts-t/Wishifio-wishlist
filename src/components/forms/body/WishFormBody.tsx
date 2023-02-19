import { FormInput } from "../inputs/FormInput";
import React from "react";
import { FormFileUpload } from "../inputs/FormFileUpload";
import { imageValidation } from "../../../helpers/validationHelpers";

export const WishFormBody: React.FC<WishFormBodyProps> = (props) => {
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
                label="Website"
                subLabel="Website where you can buy this wish or find more information about it"
                placeholder="https://example.com/"
            />
            <WishField
                name="price"
                label="Price"
                subLabel="You can enter a precise price, a range or short custom text like 'Free'"
                required={true}
                placeholder="e.g. $100; 100€-200€; Free etc."
            />
            <FormFileUpload
                name="image"
                label="Wish image"
                subLabel="Click on the button below to upload an image"
                labelClassName="text-gray-800 font-semibold text-center"
                image={true}
                customLook={true}
                initialValue={props.initialImage}
                fileValidation={imageValidation}
                customSize="48"
                containerClassName="flex flex-col gap-y-2 items-center justify-center"
            />
            <WishField
                name="note"
                label="Notes"
                placeholder="Enter any notes you have about this wish"
                tag="textarea"
                inputClassName="border-2 rounded px-4 py-2 w-full h-full"
            />
        </>
    );
}

const WishField = ({name, label, placeholder, required, containerClassName, tag, inputClassName, subLabel}: WishFieldProps) => {
    return (
        <FormInput
            name={name}
            label={label}
            tag={tag}
            subLabel={subLabel}
            placeholder={placeholder}
            required={required || false}
            inputClassName={inputClassName || "border-2 rounded px-4 py-2 w-full"}
            labelClassName="text-gray-800 font-semibold"
            containerClassName={containerClassName || "flex flex-col gap-y-1"}
        />
    );
}

interface WishFormBodyProps {
    initialImage?: string;
}

interface WishFieldProps {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
    containerClassName?: string;
    tag?: string;
    inputClassName?: string;
    subLabel?: string;
}