import React from 'react';
import { useField } from 'formik';

export const FormCheckbox: React.FC<CheckboxInputProps> = (props) => {
    const [field, meta] = useField(props);

    return (
        <div className={props.containerClassName}>
            <div className="flex items-center">
                <input
                    {...field}
                    id={props.name}
                    name={props.name}
                    type="checkbox"
                    className={"w-4 h-4 text-sky-500 bg-gray-100 border-gray-300 hover:bg-sky-600 transition rounded focus:ring-sky-600 focus:outline-none focus:ring-2"}
                />
                <label
                    className={props.labelClassName || "ml-2"}
                    htmlFor={props.name}
                >
                    {props.label}
                </label>
            </div>
            {meta.touched && meta.error &&
                <div className="text-red-500 text-sm">{meta.error}</div>
            }
        </div>
    );
};

interface CheckboxInputProps {
    name: string;
    label?: string;
    containerClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
}