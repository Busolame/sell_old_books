"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import LoginForm from "./forms/loginform";

const Home = () => {
  const router = useRouter();
  const [buttonLoading, setButtonLoading] = useState(false)

  const loginUser = async (values) => {
    setButtonLoading(true)

    const response = await fetch('/api/userlogin', {
      method: 'POST',
      body:  JSON.stringify(values)
    });
  
    const data = await response.json();
    console.log(data)
      router.push("pages/home")
      setButtonLoading(false)

  };


  return (
    <div className="flex h-screen flex-col items-center justify-center text-appindigo">
      <div style={{ borderTopLeftRadius: 40 }} className="bg-appyellow p-[40px]" >
        
        <p className="text-center font-bold my-2">Log In</p>
        <LoginForm buttonLoading={buttonLoading} loginUser={loginUser}/>

      </div>
    </div>
  );
};
export default Home;
