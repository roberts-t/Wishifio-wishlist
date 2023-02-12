import React from 'react';
import { FormikForm } from "./FormikForm";
import { api } from "../../config/request";
import { useNavigate } from "react-router-dom";
import { wishValidationSchema as validationSchema } from "../../helpers/validationHelpers";
import { createItemErrors, processServerErrors } from "../../config/serverErrors";
import { WishFormBody } from "./body/WishFormBody";

export const AddWishForm: React.FC<AddWishFormProps> = (props) => {
    const navigate = useNavigate();
    const [generalError, setGeneralError] = React.useState<string | null>(null);

    const initialValues = {
        name: '',
        subtitle: '',
        url: '',
        price: '',
        note: ''
    }

    const onSubmit = (values: any, actions: any) => {
        if (props.hash === undefined) return;
        const formData = new FormData();
        for (const [key, value] of Object.entries(values)) {
            formData.append(key, value as any);
        }

        api.post(`/wishlist/${props.hash}/item/create`, formData,
            {headers: {'Content-Type': 'multipart/form-data'}
        }).then(() => {
            actions.setSubmitting(false);
            navigate(`/wishlist/${props.hash}`);
        }).catch((err) => {
            const serverError = processServerErrors(err, actions, setGeneralError, createItemErrors);
            if (!serverError) {
                setGeneralError(createItemErrors['ITEM_ERROR' as keyof typeof createItemErrors].msg);
            }
            actions.setSubmitting(false);
        });
    }

    return (
        <div className="2xl:px-72 xl:px-52 sm:px-10 px-4 mt-5">
            <FormikForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                submitText="Save to wishlist"
                submitClassName="my-5 cursor-pointer bg-sky-500 mx-auto block text-white font-semibold px-16 py-2 rounded-md hover:bg-sky-600 transition duration-200 focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring-2"
            >
                    <div className=" bg-white border rounded sm:p-10 p-6 grid md:grid-cols-2 grid-cols-1 gap-5">
                        <WishFormBody />
                    </div>
                {generalError && <div className="mt-2 text-red-500 text-center font-semibold">{generalError}</div>}
            </FormikForm>
        </div>
    );
};

interface AddWishFormProps {
    hash: string | undefined
}