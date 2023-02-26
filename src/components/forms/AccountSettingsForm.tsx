import React, { useState } from 'react';
import { FormikForm } from "./FormikForm";
import * as yup from "yup";
import { FormInput } from "./inputs/FormInput";
import { api } from "../../config/request";
import {
    processGenericServerError,
    processServerErrors,
    userUpdateDetailsErrors
} from "../../config/serverErrors";
import { GeneralErrorMsg } from "../GeneralErrorMsg";

export const AccountSettingsForm: React.FC<AccountSettingsFormProps> = ({initialUsername}) => {
    const [generalError, setGeneralError] = useState<string | null>(null);

    const initialValues = {
        username: initialUsername,
    }

    const validationSchema = {
        username: yup
            .string()
            .min(3, 'Username must be at least 3 characters')
            .max(20, 'Username must be at most 20 characters')
            .required('Username is required'),
    }

    const onSubmit = (values: any, actions: any) => {
        if (actions.isSubmitting) return;
        api.put('/user/update', values).then(() => {
            window.location.reload();
            actions.setSubmitting(false);
        }).catch((err) => {
            const serverError = processServerErrors(err, actions, setGeneralError, userUpdateDetailsErrors);
            if (!serverError) {
                setGeneralError(userUpdateDetailsErrors['SERVER_ERROR' as keyof typeof userUpdateDetailsErrors].msg);
            }
            processGenericServerError(err);
            actions.setSubmitting(false);
        });
    }

    return (
        <FormikForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            submitText="Update"
            submitClassName="mt-4 cursor-pointer bg-sky-500 block text-white font-semibold px-10 py-2 rounded-md hover:bg-sky-600 transition duration-200 focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring-2"
        >
            <FormInput
                name="username"
                label="Username"
                required={true}
                labelClassName="text-gray-600 font-semibold"
                inputClassName={`border-2 rounded px-4 py-2 w-full focus:outline-none focus:ring-1`}
            />
            { generalError &&
                <div className="text-center mt-1 -mb-6">
                    <GeneralErrorMsg message={generalError} />
                </div>
            }
        </FormikForm>
    );
};

interface AccountSettingsFormProps {
    initialUsername: string;
}