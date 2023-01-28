import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { ObjectShape } from 'yup/lib/object';
import { CgSpinner } from 'react-icons/cg';

export const FormikForm: React.FC<FormikFormProps> = (props) => {
    return (
        <Formik
            initialValues={props.initialValues}
            validationSchema={yup.object().shape(props.validationSchema)}
            onSubmit={props.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({ isSubmitting }) => (
                <Form className={props.className}>
                    {props.children}
                    <button
                        className={props.submitClassName || "mt-3 cursor-pointer bg-sky-500 mx-auto block text-white font-semibold w-full py-2 rounded-md hover:bg-sky-600 transition duration-200 focus:border-sky-600 focus:ring-sky-600 focus:outline-none focus:ring-2"}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? <span className="flex justify-center"><CgSpinner className="animate-spin text-xl inline-block mx-4 my-0.5" /></span> : props.submitText}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

interface FormikFormProps {
    initialValues: object;
    validationSchema: ObjectShape;
    onSubmit: (values: any, actions?: any) => void;
    children: React.ReactNode;
    submitText: string;
    submitClassName?: string;
    className?: string;
}
