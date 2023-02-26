import React, { useState } from 'react';
import { wishlistValidationSchema as validationSchema } from "../../helpers/validationHelpers";
import { WishlistFormBody } from "./body/WishlistFormBody";
import { FormikForm } from "./FormikForm";
import { api } from "../../config/request";
import { createWishlistErrors, processServerErrors } from "../../config/serverErrors";
import { SuccessAnimation } from "../SuccessAnimation";


export const EditWishlistForm = ({ wishlist, updateWishlistTitle }: EditWishlistFormProps) => {
    const [generalError, setGeneralError] = useState<string | null>(null);
    const [animationPlaying, setAnimationPlaying] = useState<boolean>(false);

    const initialValues = {
        title: wishlist?.title || '',
        description: wishlist?.description || '',
    }

    const onSubmit = (values: any, actions: any) => {
        if (!wishlist) return;
        const formData = new FormData();
        for (const [key, value] of Object.entries(values)) {
            formData.append(key, value as any);
        }

        // If image has been removed by "Remove" button then it will be an empty string
        // In that case send a deleteImage flag to the server
        if (values?.image == "") {
            formData.append('deleteImage', JSON.stringify(true));
        }

        api.put(`/wishlist/${wishlist.hash}`, formData,
            {headers: {'Content-Type': 'multipart/form-data'}
        }).then(() => {
            actions.setSubmitting(false);
            updateWishlistTitle(values.title);
            setAnimationPlaying(true);
        }).catch((err) => {
            const serverError = processServerErrors(err, actions, setGeneralError, createWishlistErrors);
            if (!serverError) {
                setGeneralError(createWishlistErrors['WISHLIST_ERROR' as keyof typeof createWishlistErrors].msg);
            }
            actions.setSubmitting(false);
        });
    }

    return (
        <>
            <FormikForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                submitText="Save"
                className="w-full flex flex-col"
                submitClassName="w-3/6 mx-auto mt-5 bg-sky-500 text-white py-2 rounded-md font-medium mt-10 hover:bg-sky-600 transition duration-200"
            >
                <div className="flex flex-col gap-y-4 mt-5">
                    <WishlistFormBody initialImage={wishlist.image && process.env.REACT_APP_SERVER_URL + wishlist.imageUrl} />
                    {generalError && <div className="text-red-500 text-center font-semibold">{generalError}</div>}
                </div>
            </FormikForm>
            <div className="mt-1">
                <SuccessAnimation animationPlaying={animationPlaying} setAnimationPlaying={setAnimationPlaying} />
            </div>
        </>
    );
};

interface EditWishlistFormProps {
    wishlist: any;
    updateWishlistTitle: (title: string) => void;
}