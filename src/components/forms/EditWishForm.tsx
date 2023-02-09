import React from 'react';
import { WishFormBody } from "./body/WishFormBody";
import { FormikForm } from "./FormikForm";
import { api } from "../../config/request";
import { wishValidationSchema as validationSchema } from "../../helpers/validationHelpers";
import { useNavigate } from "react-router-dom";
import { createItemErrors, processServerErrors } from "../../config/serverErrors";
import { GeneralErrorMsg } from "../GeneralErrorMsg";

export const EditWishForm: React.FC<EditWishFormProps> = ({ wish, wishlistHash }) => {
    const navigate = useNavigate();
    const [generalError, setGeneralError] = React.useState<string | null>('test');

    const initialValues = {
        name: wish?.name || '',
        subtitle: wish?.subtitle || '',
        url: wish?.url || '',
        price: wish?.price || '',
        note: wish?.note || ''
    }

    const onSubmit = (values: any, actions: any) => {
        if (!wish) return;
        const formData = new FormData();
        for (const [key, value] of Object.entries(values)) {
            formData.append(key, value as any);
        }

        // If image has been removed by "Remove" button then it will be an empty string
        // In that case send a deleteImage flag to the server
        if (values?.image == "") {
            formData.append('deleteImage', JSON.stringify(true));
        }

        api.put(`/wishlist/${wishlistHash}/item/${wish.id}`, formData,
            {headers: {'Content-Type': 'multipart/form-data'}
        }).then(() => {
            actions.setSubmitting(false);
            navigate(`/wishlist/${wishlistHash}`);
        }).catch((err) => {
            const serverError = processServerErrors(err, actions, setGeneralError, createItemErrors);
            if (!serverError) {
                setGeneralError(createItemErrors['ITEM_ERROR' as keyof typeof createItemErrors].msg);
            }
            actions.setSubmitting(false);
        });
        actions.setSubmitting(false);
    }

    return (
        <div className="2xl:px-72 xl:px-52 sm:px-10 px-4 mt-5">
            <FormikForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                submitText="Update wish"
                submitClassName="my-5 cursor-pointer bg-sky-500 mx-auto block text-white font-semibold px-16 py-2 rounded-md hover:bg-sky-600 transition duration-200 focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring-2"
            >
                <div className=" bg-white border rounded sm:p-10 p-6 grid md:grid-cols-2 grid-cols-1 gap-5">
                    <WishFormBody initialImage={wish.image && process.env.REACT_APP_SERVER_URL + wish.imageUrl} />
                </div>
                { generalError &&
                    <div className="text-center mt-2">
                        <GeneralErrorMsg message={generalError} />
                    </div>
                }
            </FormikForm>
        </div>
    );
};

interface EditWishFormProps {
    wish: any;
    wishlistHash: string | undefined;
}