import * as Yup from 'yup';


export const signUpSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .matches(/^[a-zA-Z_ ]*$/, 'No special characters allowed.')
        .min(4, 'Name must be between 4 and 16 characters.')
        .max(16, 'Name must be between 4 and 16 characters.'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    status: Yup.string()
        .max(64, 'Status must be less than 64 characters.'),
    password: Yup.string()
        .required("Password is required.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            "Password must contain atleast 6 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character."
        ),

})