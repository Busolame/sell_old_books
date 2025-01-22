import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    username: yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Username is required')
      .label("Username"),
    password: yup.string()
      .min(8, 'Too Short!')
      .required('Password is required')
      .label("Password"),
  });

  export const registerSchema = yup.object().shape({
    fullname: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Fullname is required')
      .label("Fullname"),
    email: yup.string()
      .required("Email is a required field")
      .matches(/@[^.]*\./, "Invalid email address")
      .email("Email must be valid")
      .label("Email"),
    username: yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Username is required')
      .label("Username"),
    password: yup.string().required().min(8).label("Password"),
    repeatpassword: yup.string()
        .required()
        .label("Repeat password")
        .oneOf([yup.ref("password"), null], "Password does not match"),
  });

  export const paymentSchema = yup.object().shape({
    fullname: yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Fullname is required')
      .label("Fullname"),
    email: yup.string()
      .required("Email is a required field")
      .matches(/@[^.]*\./, "Invalid email address")
      .email("Email must be valid")
      .label("Email"),
    mobile: yup.string()
      .min(11, 'Invalid!')
      .max(11, 'Invalid!')
      .required('mobile is required')
      .label("Mobile"),
  });


