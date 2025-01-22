import React from 'react';

import { Formik } from 'formik';

import { paymentSchema } from '@/utils/validators';
import AppButton from '@/components/appbutton';

const PaymentForm = ({ amount, makePayment }) => {
    
    return (
        <Formik
        initialValues={{ fullname: '', email: '', mobile: '', amount}}
        validationSchema={paymentSchema}
        onSubmit={values => makePayment(values)}
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
                    placeholder='fullname'
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
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='email'
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
                    name="mobile"
                    id="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='mobile'
                    className="placeholder:italic outline-none bg-appyellow"
                  />
                </div>
                {errors.mobile && touched.mobile ? (
                  <span className="text-[10px] text-lightred lowercase ms-2">
                    {errors.mobile}
                  </span>
                ) : null}
            </div>

            <div className='mb-2'>
                <div className="border rounded-s-lg border-appindigo p-[8px]">
                <input
                    name="amount"
                    id="amount"
                    value={values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='amount'
                    readOnly
                    className="placeholder:italic outline-none bg-appyellow"
                  />
                </div>
                {errors.amount && touched.amount ? (
                  <span className="text-[10px] text-lightred lowercase ms-2">
                    {errors.amount}
                  </span>
                ) : null}
            </div>

            <AppButton text={"pay"} handleButton={handleSubmit}/>
        </div>
       )}
     </Formik>
    )
}

export default PaymentForm