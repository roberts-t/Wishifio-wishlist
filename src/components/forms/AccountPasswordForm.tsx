import React, { useState } from 'react';
import * as yup from 'yup';
import { FormikForm } from "./FormikForm";
import { FormInput } from "./inputs/FormInput";
import { api } from "../../config/request";
import { SuccessAnimation } from "../SuccessAnimation";
import { processGenericServerError, processServerErrors, userChangePasswordErrors } from "../../config/serverErrors";
import { GeneralErrorMsg } from "../GeneralErrorMsg";


export const AccountPasswordForm = () => {
    const [animationPlaying, setAnimationPlaying] = useState<boolean>(false);
    const [generalError, setGeneralError] = useState<string | null>(null);

    const initialValues = {
        password: '',
        newPassword: '',
        newPasswordConfirm: '',
    }

    const validationSchema = {
        password: yup
            .string()
            .min(6, 'Incorrect current password')
            .required('Incorrect current password'),
        newPassword: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        newPasswordConfirm: yup
            .string()
            .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
            .required('Passwords must match')
    }

    const onSubmit = (values: any, actions: any) => {
        if (actions.isSubmitting) return;
        api.put('/user/change-password', values).then(() => {
            setAnimationPlaying(true);
            actions.resetForm();
            actions.setSubmitting(false);
        }).catch((err) => {
            const serverError = processServerErrors(err, actions, setGeneralError, userChangePasswordErrors);
            if (!serverError) {
                setGeneralError(userChangePasswordErrors['SERVER_ERROR' as keyof typeof userChangePasswordErrors].msg);
            }
            processGenericServerError(err);
            actions.setSubmitting(false);
        });
    }

    return (
        <>
            <FormikForm
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                submitText="Change password"
            >
                <div className="flex flex-col gap-y-3">
                    <AccPasswordField
                        name="password"
                        label="Current password"
                        placeholder="Current password"
                    />
                    <AccPasswordField
                        name="newPassword"
                        label="New password"
                        placeholder="New password"
                    />
                    <AccPasswordField
                        name="newPasswordConfirm"
                        label="Confirm new password"
                        placeholder="New password"
                    />
                </div>
                { generalError &&
                    <div className="text-center mt-1 -mb-6">
                        <GeneralErrorMsg message={generalError} />
                    </div>
                }
                <div className="mt-2">
                    <SuccessAnimation animationPlaying={animationPlaying} setAnimationPlaying={setAnimationPlaying} />
                </div>
            </FormikForm>
        </>
    );
};

const AccPasswordField = ({ name, label, placeholder }: AccPasswordFieldProps) => {
    return (
        <FormInput
            name={name}
            label={label}
            placeholder={placeholder}
            type="password"
            required={true}
            labelClassName="text-gray-600 font-semibold"
            inputClassName={`border-2 rounded px-4 py-2 w-full focus:outline-none focus:ring-1`}
        />
    );
}

interface AccPasswordFieldProps {
    name: string;
    label: string;
    placeholder: string;

}