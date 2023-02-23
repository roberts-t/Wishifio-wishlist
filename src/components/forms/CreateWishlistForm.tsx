import React from 'react';
import { FormikForm } from './FormikForm';
import { api } from '../../config/request';
import { createWishlistErrors, processServerErrors } from '../../config/serverErrors';
import { useNavigate } from 'react-router-dom';
import { WishlistFormBody } from "./body/WishlistFormBody";
import { wishlistValidationSchema as validationSchema } from "../../helpers/validationHelpers";

export const CreateWishlistForm = () => {
    const navigate = useNavigate();
    const [generalError, setGeneralError] = React.useState<string | null>(null);

    const initialValues = {
        title: '',
        description: '',
    }

    const onSubmit = (values: any, actions: any) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(values)) {
            formData.append(key, value as any);
        }

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
                <WishlistFormBody />
                {generalError && <div className="text-red-500 text-center font-semibold">{generalError}</div>}
            </div>
        </FormikForm>
    );
};