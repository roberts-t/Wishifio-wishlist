import * as yup from "yup";

export const imageValidation = (file: File) => {
    if (!file || !file.size) return 'Uploaded image is not valid';
    else if (file.size > (1024 * 1024) * 4) return 'Image size cannot exceed 4MB';
    else if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
        return 'Image can only be of type png, jpeg or jpg';
    }
    return true;
}

export const wishValidationSchema = {
    name: yup
        .string()
        .required('Wish name is required')
        .max(50, 'Wish name must be at most 50 characters'),
    subtitle: yup
        .string()
        .max(200, 'Wish subtitle must be at most 200 characters'),
    url: yup
        .string()
        .url('Link must be a valid URL'),
    price: yup
        .string()
        .required('Price is required')
        .max(10, 'Price must be at most 10 characters'),
    note: yup
        .string()
        .max(500, 'Note must be at most 500 characters')
}

export const wishlistValidationSchema = {
    title: yup
        .string()
        .required('Title is required')
        .max(50, 'Title must be less than 50 characters')
        .min(1, 'Title must be at least 1 characters'),
    description: yup
        .string()
        .required('Description is required')
        .max(500, 'Description must be less than 500 characters')
        .min(1, 'Description must be at least 1 characters')
}