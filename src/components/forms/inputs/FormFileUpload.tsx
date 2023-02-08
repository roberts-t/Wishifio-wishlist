import React, { useRef, useState } from 'react';
import { useField } from 'formik';
import { MdOutlineCreate, MdClear } from 'react-icons/md';

export const FormFileUpload: React.FC<FileUploadProps> = (props) => {
    const [field, meta, helpers] = useField(props);
    // Extract the value from the field, value will be controlled manually
    const {value, ...fieldNoValue} = field;
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState('');

    const imageAcceptTypes = [
        'image/png',
        'image/jpeg',
        'image/jpg',
    ];

    const getAcceptedFileTypes = () => {
        if (props.acceptedFileTypes) {
            return props.acceptedFileTypes.join(',');
        } else if (props.image) {
            return imageAcceptTypes.join(',');
        }
        return '';
    }

    const handleFileInputClick = () => {
        if (hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
    }

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            if (!file) return;
            if (props.fileValidation) {
                const validation = props.fileValidation(file);
                if (validation !== true) {
                    helpers.setError(validation as string);
                    return;
                }
            }
            helpers.setValue(file);
            helpers.setError('');
            const reader = new FileReader();
            reader.onload = () => {
                setFile(reader.result as string);
            }
            reader.readAsDataURL(file);
        }
    }

    const handleRemoveFile = () => {
        setFile('');
        helpers.setError('');
        helpers.setValue('');
    }

    return (
        <div className={props.containerClassName}>
            <label
                className={props.labelClassName}
                htmlFor={props.name}
            >
                {props.label}
                {props.required && <span className="text-red-500 ml-0.5 text-sm">*</span>}
                {props.subLabel && <span className="block leading-none text-sm font-normal text-gray-500 mb-0.5">
                    {props.subLabel}
                </span>}
            </label>
            {props.customLook &&
                <>
                    <div
                        onClick={handleFileInputClick}
                        className={`cursor-pointer w-${props.customSize || "24"} h-${props.customSize || "24"} bg-gray-200 rounded-lg flex items-center justify-center relative hover:bg-gray-300 transition duration-200`}
                    >
                            {file && <img src={file} alt="preview" className={`w-${props.customSize || "24"} h-${props.customSize || "24"} rounded-lg object-cover`} />}
                            <MdOutlineCreate className={"text-gray-700 absolute "
                                + (!file ? "text-4xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                : "text-3xl top-1 right-1 bg-gray-200 rounded-full p-1 opacity-80")
                            } />

                    </div>
                    { file &&
                        <button onClick={handleRemoveFile} type="button" className="-mt-1.5 text-sm flex flex-row items-center">
                            <MdClear className="text-red-500" />
                            <span className="pb-0.5">Remove</span>
                        </button>
                    }
                </>
            }
            <input
                {...fieldNoValue}
                id={props.name}
                name={props.name}
                ref={hiddenFileInput}
                type="file"
                accept={getAcceptedFileTypes()}
                onChange={handleFileInputChange}
                className={props.customLook ? "hidden" : props.inputClassName + " " +
                    (meta.touched && meta.error ? " border-red-500 focus:border-red-500 focus:ring-red-500"
                        : " border-gray-400 focus:border-sky-500 focus:ring-sky-500")}
            />
            {meta.error &&
                <div className="text-red-500 text-sm">{meta.error}</div>
            }

        </div>
    );
};

interface FileUploadProps {
    name: string;
    label: string;
    subLabel?: string;
    labelClassName?: string;
    inputClassName?: string;
    containerClassName?: string;
    customLook?: boolean
    customSize?: string;
    required?: boolean;
    image?: boolean;
    acceptedFileTypes?: string[];
    fileValidation?: (file: File) => string | boolean;
}