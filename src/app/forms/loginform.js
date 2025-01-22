import React from 'react';

import { Formik } from 'formik';
import Link from "next/link";

import { loginSchema } from '@/utils/validators';
import AppButton from '@/components/appbutton';

const LoginForm = ({ buttonLoading, loginUser }) => {
    return (
        <Formik
        initialValues={{ username: '', password: ''}}
        validationSchema={loginSchema}
        onSubmit={values => loginUser(values)}
        >
       {({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
        <div>
            <div className='mb-2'>
                <div className="border rounded-s-lg border-appindigo p-[8px]">
                <input
                    name="username"
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='username'
                    className="placeholder:italic outline-none bg-appyellow"
                  />
                </div>
                {errors.username && touched.username ? (
                  <span className="text-[10px] text-lightred lowercase ms-2">
                    {errors.username}
                  </span>
                ) : null}
            </div>

            <div className='mb-2'>
                <div className="border rounded-s-lg border-appindigo p-[8px]">
                <input
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='password'
                    className="placeholder:italic outline-none bg-appyellow"
                  />
                </div>
                {errors.password && touched.password ? (
                  <span className="text-[10px] text-lightred lowercase ms-2">
                    {errors.password}
                  </span>
                ) : null}
            </div>

            <AppButton text={"log in"} handleButton={handleSubmit} buttonLoading={buttonLoading}/>
            <div className="text-appindigo font-bold text-sm text-center">
                <Link href={"register"}>Yet to register? Register</Link>
            </div>
        </div>
       )}
     </Formik>
    )
}

export default LoginForm