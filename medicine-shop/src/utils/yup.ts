import * as Validate from "yup"

export const registerSchema =Validate.object(
    {
        username: Validate.string().min(6,"your username/name must be 6 characters long").required("username is required"),
        email: Validate.string().email("email is invalid").required("email is required"),
        password: Validate.string()
        .min(8,"password must be 8 char")
        .matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/,"need one special Character")
        .required("password required")
    }
)



export const validationSchema = Validate.object({
    email: Validate.string().email('Invalid email format').required('Email is required'),
    password: Validate.string().required('Password is required'),
  });
