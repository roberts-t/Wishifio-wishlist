
export const processServerErrors = (err: any, actions: any, setGeneral: (msg: string) => void, errorObj: any) => {
    const errors = err?.response?.data?.errors;
    const errorCode = err?.response?.data?.errorCode;
    if (errors && errors.length > 0) {
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

