import React from 'react';
import { WishFormBody } from "./body/WishFormBody";
import { FormikForm } from "./FormikForm";
import { api } from "../../config/request";
import { wishValidationSchema as validationSchema } from "../../helpers/validationHelpers";

export const EditWishForm: React.FC<EditWishFormProps> = ({ wish }) => {

    const initialValues = {
        name: wish?.name || '',
        subtitle: wish?.subtitle || '',
        url: wish?.url || '',
        price: wish?.price || '',
        note: wish?.note || ''
    }

    const onSubmit = (values: any, actions: any) => {
        console.log(values);
    }

    return (
        <div className="px-80 mt-5">
            <FormikForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                submitText="Update wish"
                submitClassName="my-5 cursor-pointer bg-sky-500 mx-auto block text-white font-semibold px-16 py-2 rounded-md hover:bg-sky-600 transition duration-200 focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring-2"
            >
                <div className=" bg-white border rounded p-10 grid grid-cols-2 gap-4">
                    <WishFormBody />
                </div>
            </FormikForm>
        </div>
    );
};

interface EditWishFormProps {
    wish: any;
    hash: string | undefined;
}