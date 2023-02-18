
export const processServerErrors = (err: any, actions: any, setGeneral: (msg: string) => void, errorObj: any) => {
    const errors = err?.response?.data?.errors;
    const errorCode = err?.response?.data?.errorCode;
    if (actions !== undefined && errors && errors.length > 0) {
        console.log(errors);
        errors.forEach((error: any) => {
            const serverError = errorObj[error.msg as keyof typeof signupErrors];
            actions.setFieldError(serverError.field, serverError.msg);
        });
    } else if (errorCode) {
        const serverError = errorObj[errorCode as keyof typeof signupErrors];
        if (serverError) {
            if (serverError.field === 'general') {
                setGeneral(serverError.msg);
            } else {
                actions.setFieldError(serverError.field, serverError.msg);
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
    return true;
}

export const processGenericServerError = (err: any) => {
    const error = err?.response?.data?.errorCode;
    if (error == "NO_PERMISSION") {
        window.location.href = "/";
    }
}

export const signupErrors = {
    'EMAIL_REQ': {
        field: 'email',
        msg: 'Email is required'
    },
    'EMAIL_INVALID': {
        field: 'email',
        msg: 'Email must be a valid email address'
    },
    'PASSWORD_REQ': {
        field: 'password',
        msg: 'Password is required'
    },
    'PASSWORD_MIN': {
        field: 'password',
        msg: 'Password must be at least 6 characters'
    },
    'USERNAME_REQ': {
        field: 'username',
        msg: 'Username is required'
    },
    'USERNAME_LEN': {
        field: 'username',
        msg: 'Username must be between 3 and 20 characters'
    },
    'C_PASSWORD_REQ': {
        field: 'confirmPassword',
        msg: 'Passwords must match'
    },
    'PASSWORD_MATCH': {
        field: 'confirmPassword',
        msg: 'Passwords must match'
    },
    'USER_EXISTS': {
        field: 'email',
        msg: 'User already exists'
    },
    'REGISTER_ERROR': {
        field: 'general',
        msg: 'Something went wrong, please try again'
    },
}

export const loginErrors = {
    'AUTH_ERROR': {
        field: 'general',
        msg: 'Something went wrong, please try again'
    },
    'AUTH_INCORRECT': {
        field: 'general',
        msg: 'Invalid username or password'
    }
}

export const createWishlistErrors = {
    'TITLE_REQ': {
        field: 'title',
        msg: 'Title is required'
    },
    'TITLE_LEN': {
        field: 'title',
        msg: 'Title must be no more than 50 characters'
    },
    'DESCRIPTION_REQ': {
        field: 'description',
        msg: 'Description is required'
    },
    'DESCRIPTION_LEN': {
        field: 'description',
        msg: 'Description must be no more than 500 characters'
    },
    'NOT_IMAGE': {
        field: 'image',
        msg: 'Image must be a valid image file'
    },
    'IMAGE_COUNT': {
        field: 'image',
        msg: 'You can only upload 1 image'
    },
    'IMAGE_SIZE': {
        field: 'image',
        msg: 'Image must be no more than 4MB'
    },
    'IMAGE_FORMAT': {
        field: 'image',
        msg: 'Image can only be of type png, jpeg or jpg'
    },
    'WISHLIST_ERROR': {
        field: 'general',
        msg: 'Something went wrong, please try again'
    }
}

export const createItemErrors = {
    'WISHLIST_HASH_REQ': {
        field: 'general',
        msg: 'Something went wrong, please try again'
    },
    'NAME_REQ': {
        field: 'name',
        msg: 'Wish name is required'
    },
    'NAME_LEN': {
        field: 'name',
        msg: 'Wish name must be at most 50 characters'
    },
    'SUBTITLE_LEN': {
        field: 'subtitle',
        msg: 'Subtitle must be at most 200 characters'
    },
    'PRICE_REQ': {
        field: 'price',
        msg: 'Price is required'
    },
    'PRICE_LEN': {
        field: 'price',
        msg: 'Price must be at most 10 characters'
    },
    'URL_INVALID': {
        field: 'link',
        msg: 'Link must be a valid URL'
    },
    'NOTES_LEN': {
        field: 'note',
        msg: 'Notes must be at most 500 characters'
    },
    'NOT_IMAGE': {
        field: 'image',
        msg: 'Image must be a valid image file'
    },
    'IMAGE_COUNT': {
        field: 'image',
        msg: 'You can only upload 1 image'
    },
    'IMAGE_SIZE': {
        field: 'image',
        msg: 'Image must be no more than 4MB'
    },
    'IMAGE_FORMAT': {
        field: 'image',
        msg: 'Image can only be of type png, jpeg or jpg'
    },
    'ITEM_ERROR': {
        field: 'general',
        msg: 'Something went wrong, please try again'
    },
    'WISHLIST_NOT_FOUND': {
        field: 'general',
        msg: 'Something went wrong, please try again'
    },
    'IMAGE_UPLOAD_ERROR': {
        field: 'general',
        msg: 'Something went wrong, please try again'
    }
}

export const deleteWishlistErrors = {
    'ITEM_NOT_FOUND': {
        field: 'general',
        msg: 'Wishlist item was not found'
    },
    'ITEM_ERROR': {
        field: 'general',
        msg: 'Something went wrong, please try again'
    }
}

