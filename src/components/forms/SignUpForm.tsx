import React from 'react';
import { FormikForm } from './FormikForm';
import * as yup from 'yup';
import { FormInput } from './inputs/FormInput';
import { api } from '../../config/request';
import { processServerErrors, signupErrors } from '../../config/serverErrors';
import { CiMail } from 'react-icons/ci';

export const SignUpForm = () => {
    const [generalError, setGeneralError] = React.useState<string | null>(null);
    const [success, setSuccess] = React.useState<boolean>(false);

    const initialValues = {
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    }

    const validationSchema = {
        email: yup
            .string()
            .email('Email must be a valid email address')
            .required('Email is required'),
        username: yup
            .string()
            .min(3, 'Username must be at least 3 characters')
            .max(20, 'Username must be at most 20 characters')
            .required('Username is required'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Passwords must match')
    }

    const onSubmit = (values: any, actions: any) => {
        actions.setSubmitting(true);
        setGeneralError(null);

        api.post('/signup', {
            email: values.email,
            username: values.username,
            password: values.password,
            c_password: values.confirmPassword
        }).then(() => {
            setSuccess(true);
            actions.setSubmitting(false);
        }).catch((err) => {
            const serverError = processServerErrors(err, actions, setGeneralError, signupErrors);
            if (!serverError) {
                setGeneralError(signupErrors['REGISTER_ERROR' as keyof typeof signupErrors].msg);
            }
            actions.setSubmitting(false);
        });
    }

    const renderForm = () => {
        if (success) {
            return (
                <div className="text-center mt-4">
                    <CiMail className="block mx-auto text-7xl text-gray-700 -mb-2" />
                    <p className="text-3xl font-bold text-success mb-2">Success!</p>
                    <p className="text-gray-600">You have successfully registered. Please check your email to verify your account.</p>
                </div>
            );
        } else {
            return (
                <FormikForm
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    submitText="Sign Up"

                >
                    <div className="mt-6 flex flex-col gap-y-3">
                        <SignUpField name="email" type="email" label="Email" />
                        <SignUpField name="username" type="text" label="Username" />
                        <SignUpField name="password" type="password" label="Password" />
                        <SignUpField className="mb-2" name="confirmPassword" type="password" label="Confirm Password" />
                    </div>
                    {generalError && <div className="text-red-500 text-center font-semibold">{generalError}</div>}
                </FormikForm>
            );
        }
    }

    return renderForm();
};

const SignUpField = ({ name, type, label, className }: SignUpFieldProps) => {
    return (
        <FormInput
            name={name}
            placeholder={label}
            containerClassName={`flex flex-col gap-y-1 ${className}`}
            labelClassName="text-gray-600 font-semibold"
            inputClassName={`border-2 rounded px-4 py-2 w-full focus:outline-none focus:ring-1`}
            label={label}
            type={type}
            required={true}
        />

    );
}

interface SignUpFieldProps {
    name: string;
    type: string;
    label: string;
    className?: string;
}