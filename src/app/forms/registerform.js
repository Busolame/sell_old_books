import React from 'react';

import { Formik } from 'formik';
import Link from "next/link";

import { registerSchema } from '@/utils/validators';
import AppButton from '@/components/appbutton';
import AppCheckBox from '@/components/appcheckbox';

const RegisterForm = ({ buttonLoading, checked, handleCheck, registerUser }) => {
    
    return (
        <Formik
            initialValues={{ fullname: '', username: '', email: '', password: '', repeatpassword: ''}}
            validationSchema={registerSchema}
            onSubmit={values => registerUser(values)}
        >
       {({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
        <div>
            <div className='mb-2'>
                <div className="border rounded-s-lg border-appindigo p-[8px]">
                <input
                    name="fullname"
                    id="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="fullname"
                    className="placeholder:italic outline-none bg-appyellow"
                  />
                </div>
                {errors.fullname && touched.fullname ? (
                  <span className="text-[10px] text-lightred lowercase ms-2">
                    {errors.fullname}
                  </span>
                ) : null}
            </div>

            <div className='mb-2'>
                <div className="border rounded-s-lg border-appindigo p-[8px]">
                <input
                    name="username"
                    id="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="username"
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
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="email"
                    className="placeholder:italic outline-none bg-appyellow"
                  />
                </div>
                {errors.email && touched.email ? (
                  <span className="text-[10px] text-lightred lowercase ms-2">
                    {errors.email}
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
                    placeholder="password"
                    className="placeholder:italic outline-none bg-appyellow"
                  />
                </div>
                {errors.password && touched.password ? (
                  <span className="text-[10px] text-lightred lowercase ms-2">
                    {errors.password}
                  </span>
                ) : null}
            </div>

            <div className='mb-2'>
                <div className="border rounded-s-lg border-appindigo p-[8px]">
                <input
                    name="repeatpassword"
                    id="repeatpassword"
                    value={values.repeatpassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="repeat password"
                    className="placeholder:italic outline-none bg-appyellow"
                  />
                </div>
                {errors.repeatpassword && touched.repeatpassword ? (
                  <span className="text-[10px] text-lightred lowercase ms-2">
                    {errors.repeatpassword}
                  </span>
                ) : null}
            </div>

            <AppCheckBox
          checked={checked}
          handleCheck={handleCheck}
          text={
            <div>
              <span>I hereby agree to company&apos;s Terms and Condition</span>
              <br/>
              <span>and with the Privacy Policy</span>
            </div>
          }
        />
        <AppButton
          text={"register"} handleButton={handleSubmit} active={checked} buttonLoading={buttonLoading}
        />
        <div className="text-appindigo font-bold text-sm text-center">
          <Link href={"/"}>Registered? Log in</Link>
        </div>
        </div>
       )}
     </Formik>
    )
}

export default RegisterForm