import React from 'react';
import { FormikForm } from './FormikForm';
import { FormInput } from './inputs/FormInput';
import { FormFileUpload } from './inputs/FormFileUpload';
import * as yup from 'yup';
import { api } from '../../config/request';
import { imageValidation } from "../../helpers/validationHelpers";
import { createWishlistErrors, processServerErrors } from '../../config/serverErrors';
import { useNavigate } from 'react-router-dom';

export const CreateWishlistForm = () => {
    const navigate = useNavigate();
    const [generalError, setGeneralError] = React.useState<string | null>(null);

    const initialValues = {
        title: '',
        description: '',
    }

    const validationSchema = {
        title: yup
            .string()
            .required('Title is required')
            .max(50, 'Title must be less than 50 characters')
            .min(1, 'Title must be at least 1 characters'),
        description: yup
            .string()
            .required('Description is required')
            .max(500, 'Description must be less than 500 characters')
            .min(1, 'Description must be at least 1 characters'),
    }

    const onSubmit = (values: any, actions: any) => {
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('image', values.image);

        api.post('/wishlist/create', formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        }).then((res) => {
            navigate(`/wishlist/${res.data.hash}`);
            actions.setSubmitting(false);
        }).catch((err) => {
            const serverError = processServerErrors(err, actions, setGeneralError, createWishlistErrors);
            if (!serverError) {
                setGeneralError(createWishlistErrors['WISHLIST_ERROR' as keyof typeof createWishlistErrors].msg);
            }
            actions.setSubmitting(false);
        });
    }

    return (
        <FormikForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            submitText="Create"
            className="w-full max-w-lg flex flex-col"
            submitClassName="w-3/6 mx-auto mt-5 bg-sky-500 text-white py-2 rounded-md font-medium mt-10 hover:bg-sky-600 transition duration-200"
        >
            <div className="flex flex-col gap-y-4 mt-5">
                <FormFileUpload
                    name="image"
                    label="Wishlist image"
                    labelClassName="text-gray-700 font-bold"
                    image={true}
                    fileValidation={imageValidation}
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
                {generalError && <div className="text-red-500 text-center font-semibold">{generalError}</div>}
            </div>
        </FormikForm>
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
            inputClassName="w-full border-2 border-gray-300 rounded-md p-2 focus:border-sky-500 focus:outline-none transition"
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