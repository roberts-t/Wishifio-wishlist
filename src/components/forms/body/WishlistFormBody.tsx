import React from 'react';
import { FormInput } from "../inputs/FormInput";
import { FormFileUpload } from "../inputs/FormFileUpload";
import { imageValidation } from "../../../helpers/validationHelpers";

export const WishlistFormBody: React.FC<WishFormBodyProps> = ({initialImage}) => {
    return (
        <>
            <FormFileUpload
                name="image"
                label="Wishlist image"
                subLabel="Click on the button below to upload an image"
                labelClassName="text-gray-700 font-bold text-center"
                image={true}
                fileValidation={imageValidation}
                initialValue={initialImage}
                customLook={true}
                containerClassName="flex flex-col gap-y-2 items-center justify-center"
            />
            <WishlistField name="title" label="Wishlist title" placeholder="Enter a title" />
            <WishlistField
                name="description"
                label="Wishlist description"
                placeholder="Enter a description"
                tag="textarea"
            />
        </>
    );
};

const WishlistField = ({ name, label, placeholder, tag }: WishlistFieldProps) => {
    return (
        <FormInput
            name={name}
            tag={tag}
            label={label}
            placeholder={placeholder}
            labelClassName="text-gray-700 font-bold"
            containerClassName="flex flex-col gap-y-2 justify-center"
            inputClassName="w-full border-2 rounded-md p-2 focus:border-sky-500 focus:outline-none transition"
            required={true}
        />
    );
}

interface WishlistFieldProps {
    name: string;
    label: string;
    placeholder?: string;
    tag?: string;
}

interface WishFormBodyProps {
    initialImage?: string;
}