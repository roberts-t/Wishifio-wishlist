import React from 'react';
import { useField } from 'formik';

export const FormInput: React.FC<TextInputProps> = (props) => {
    const CustomInput: any = props.tag || 'input';
    const [field, meta] = useField(props);

    return (
        <div className={props.containerClassName}>
            {props.label &&
                <label
                    className={props.labelClassName}
                    htmlFor={props.id || props.name}
                >
                    {props.label}
                    {props.required && <span className="text-red-500 ml-0.5 text-sm">*</span>}
                </label>
            }
            <CustomInput
                {...field}
                id={props.id || props.name}
                name={props.name || props.id}
                placeholder={props.placeholder}
                type={props.type || "text"}
                className={props.inputClassName + " " + (meta.touched && meta.error ? " border-red-500 focus:border-red-500 focus:ring-red-500" : ((props.borderClassName) || " border-gray-400") + " focus:border-sky-500 focus:ring-sky-500")}
            />
            {meta.touched && meta.error &&
                <div className="text-red-500 text-sm">{meta.error}</div>
            }
        </div>
    );
};

interface TextInputProps {
    id?: string;
    tag?: string;
    name: string;
    type?: string;
    placeholder?: string;
    label?: string;
    containerClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    required?: boolean;
    borderClassName?: string;
}