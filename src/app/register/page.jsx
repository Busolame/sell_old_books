"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RegisterForm from "../forms/registerform";

const Register = () => {
  
  const [buttonLoading, setButtonLoading] = useState(false)
  const [checked, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!checked);
  };

  const registerUser = async (values) => {
       setButtonLoading(true)

      const response = await fetch('/api/registeruser', {
        method: 'POST',
        body:  JSON.stringify(values)
      });
    
      const data = await response.json();
      console.log(data)
        router.push("/")
        setButtonLoading(false)
    
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center text-appindigo">
      <div style={{ borderTopLeftRadius: 40 }} className="bg-appyellow p-[30px]" >
        <p className="text-center font-bold my-2">Welcome... Register!</p>

        <RegisterForm buttonLoading={buttonLoading} checked={checked} handleCheck={handleCheck} registerUser={registerUser}/>

      </div>
    </div>
  );
};

export default Register;
