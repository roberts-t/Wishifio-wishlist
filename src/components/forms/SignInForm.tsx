import React, { useContext } from 'react';
import { FormikForm } from './FormikForm';
import * as yup from 'yup';
import { FormInput } from './inputs/FormInput';
import { api } from '../../config/request';
import { FormCheckbox } from './inputs/FormCheckbox';
import { loginErrors } from '../../config/serverErrors';
import { processServerErrors } from '../../config/serverErrors';
import { AuthContext, AuthContextType } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

export const SignInForm: React.FC<SignInFormProps> = (props) => {
    const [generalError, setGeneralError] = React.useState<string | null>(null);
    const { getAuthStatus } = useContext(AuthContext) as AuthContextType;
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
        remember: false
    }

    const validationSchema = {
        email: yup
            .string()
            .email('Email must be a valid email address')
            .required('Email is required'),
        password: yup
            .string()
            .required('Password is required'),
    }

    const onSubmit = (values: any, actions: any) => {
        actions.setSubmitting(true);
        setGeneralError(null);

        api.post('/login', values).then(async () => {
            if (props.closeModal) props.closeModal();
            await getAuthStatus();
            actions.setSubmitting(false);
            if (props.redirect) navigate(props.redirect);
        }).catch((err) => {
            const serverError = processServerErrors(err, actions, setGeneralError, loginErrors);
            if (!serverError) {
                setGeneralError(loginErrors['AUTH_ERROR' as keyof typeof loginErrors].msg);
            }
            actions.setSubmitting(false);
        });
    }

    return (
        <FormikForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            submitText="Sign in"
        >
            <div className="sm:mt-6 mt-3.5 flex flex-col gap-y-3">
                {generalError && <div className="text-red-800 text-center py-1.5 px-1 bg-red-200 rounded">{generalError}</div>}
                <SignInField name="email" type="email" label="Email" />
                <SignInField name="password" type="password" label="Password" />
                <FormCheckbox name="remember" label="Remember me" />
            </div>
        </FormikForm>
    );
};

const SignInField = ({ name, type, label, className }: SignInFieldProps) => {
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

interface SignInFieldProps {
    name: string;
    type: string;
    label: string;
    className?: string;
}

interface SignInFormProps {
    closeModal?: () => void;
    redirect?: string;
}