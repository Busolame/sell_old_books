"use client"
import { useState } from "react";

import TopBar from "@/components/topbar";
import PaymentForm from "@/app/forms/paymentform";
import { usePaystackPayment} from 'react-paystack';


const AppPayment = ({ params }) => {

  const { amount } = params
  
  const config = {
    reference: (new Date()).getTime().toString(),
    email: '',
    amount: amount * 100,
    publicKey: 'pk_test_152804acb2f9a9725f9128408e83bb236de76632',
  };

  const onSuccess = (reference) => {
    console.log(reference, "successful");
  };

  const onClose = () => {
    console.log('closed')
  }

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment({...config, email: 'johndoe@gmail.com'});

  const makePayment = (values) => {
    initializePayment(onSuccess, onClose);
  };
    
  //   const makePayment = (values) => {
  //     const initializePayment = usePaystackPayment({...config, email: values.email});
      
  //     initializePayment(onSuccess, onClose)

  // }

    return (
      <div>
        <PaymentForm amount={amount} makePayment={makePayment}/>
      </div>
    );
};



  return (
    <div>
      <TopBar text={"Payment Page"} />

      <div className="h-[85vh] flex flex-col justify-center items-center">
        <div style={{ borderTopLeftRadius: 40 }} className="bg-appyellow p-[40px]" >

          <p className="text-center font-bold my-2">Pay for book</p>

          <PaystackHookExample/>
              
        </div>
      </div>

      
    </div>
  );
};

export default AppPayment;
