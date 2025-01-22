"use client";
import { useRouter } from "next/navigation";

import { FaXmark } from "react-icons/fa6";

const AppModal = ({ handleShow }) => {
  const router = useRouter();
  return (
    <div
      style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
      }}
      className="bg-appwhite shadow-2xl rounded-md w-fit z-10 p-2 -top-[2px] fixed right-1"
    >
      <div onClick={() => handleShow("hide")} className="flex justify-end">
        <FaXmark />
      </div>
      <h3 className="cursor-pointer" onClick={() => router.push("editprofile")}>
        Edit
      </h3>
      <h3>Add account</h3>
      <h3 className="text-[#F21137]">Log out</h3>
    </div>
  );
};

export default AppModal;
