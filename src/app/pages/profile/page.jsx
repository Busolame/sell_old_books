"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import AppModal from "@/components/appmodal";
import TopBar from "@/components/topbar";

import { FaCircleUser } from "react-icons/fa6";

const Profile = () => {
  const router = useRouter();
  const [image, setImage] = useState(" ");
  const [show, setShow] = useState(false);

  const handleModal = (value) => {
    value == "show" ? setShow(true) : setShow(false);
  };
  return (
    <div>
      <div className="p-3">
        <TopBar
          text={"Profile"}
          activeProfile={true}
          showOption={handleModal}
        />
        {show && <AppModal handleShow={handleModal} />}
      </div>

      <div className=" relative text-appwhite bg-appindigo rounded-t-[20px] p-[30px] pt-[160px] mt-[80px]">
        <div className="flex flex-col items-center">
          <div className="absolute -top-[40px] flex flex-col items-center">
            {image ? (
              <img
                src="../assets/images/avatar.avif"
                className="rounded-full border-appindigo border-[5px] h-[110px] w-[110px]"
              />
            ) : (
              <FaCircleUser color="#F5F5F5" className="h-[100px] w-[100px]" />
            )}
            <h4 className="font-bold mb-1 mt-3">John Doe</h4>
            <div
              onClick={() => router.push("sellabook")}
              className="cursor-pointer uppercase rounded-[7px] bg-appyellow text-center text-sm font-bold text-appindigo p-[10px]"
            >
              Sell a book
            </div>
          </div>
        </div>
        <div className="mb-4">
          <p>Full Name</p>
          <span className="text-appgray font-bold">John Doe</span>
        </div>
        <div className="mb-4">
          <p>User Name</p>
          <span className="text-appgray font-bold">@johndee</span>
        </div>
        <div className="mb-4">
          <p>Phone Number</p>
          <span className="text-appgray font-bold">+234 708 789 789 78</span>
        </div>
        <div className="mb-4">
          <p>Email</p>
          <span className="text-appgray font-bold">bee@gmail.com</span>
        </div>
        <div className="mb-4">
          <p>Address</p>
          <span className="text-appgray font-bold">LouisVille, Birmingham - United Kingdom</span>
        </div>
      </div>
    </div>
  );
};
export default Profile;
