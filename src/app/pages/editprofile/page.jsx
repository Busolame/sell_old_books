"use client";

import { useState } from "react";
import TopBar from "@/components/topbar";
import AppButton from "@/components/appbutton";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";

import { FaCircleUser } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

const EditProfile = () => {
  const [image, setImage] = useState("bb");
  const [userData, setUserData] = useState({
    fullname: "John Doe",
    username: "johndee",
    mobile: "07035676890",
    address: "Manchester United, United Kingdom",
  });

  const editData = (state, value) => {
    let cloneData = { ...userData };

    state === "fullname"
      ? setUserData({ ...cloneData, fullname: value })
      : setUserData({ ...cloneData, username: value });
    console.log(state);
  };

  function getImageFileObject(imageFile) {
    console.log({ imageFile });
  }

  function runAfterImageDelete(file) {
    console.log({ file });
  }

  return (
    <div>
      <div className="p-3">
        <TopBar text={"Edit Profile"} />
      </div>

      <div className="p-[25px]">
        <div className="flex flex-col items-center">
          {image ? (
            <img
              src="../assets/images/avatar.avif"
              className="rounded-full h-[100px] w-[100px] border-appindigo border-[5px]"
            />
          ) : (
            <div>
              <FaCircleUser color="#f5f5f5" className="h-[80px] w-[80px]" />
            </div>
          )}
          <div className="text-appyellow font-bold flex items-center p-2">
            <ImageUploader
              style={{
                height: 50,
                width: 50,
                background: "#F2EBE5",
                display: "none",
              }}
              onFileAdded={(img) => getImageFileObject(img)}
              onFileRemoved={(img) => runAfterImageDelete(img)}
            />
            <FaRegEdit className="h-5 w-5" />
            Change Image
          </div>
        </div>
        <div className="my-[12px]">
          <div className="mb-3">
            <p>Full Name</p>
            <div>
              <input
                onChange={(e) => editData("fullname", e.target.value)}
                value={userData.fullname}
                className="h-[35px] placeholder:italic rounded-lg outline-none bg-appyellow p-[20px] border border-appindigo w-full my-1"
              />
            </div>
          </div>
          <div className="mb-3">
            <p>Phone Number</p>
            <input
              onChange={(e) => editData("mobile", e.target.value)}
              value={userData.mobile}
              className="h-[35px] placeholder:italic rounded-lg outline-none bg-appyellow p-[20px] border border-appindigo w-full my-1"
            />
          </div>
          <div className="mb-3">
            <p>Username</p>
            <div className="flex items-center h-[35px] rounded-lg bg-appyellow p-[20px] border border-appindigo w-full">
              @
              <input
                onChange={(e) => editData("username", e.target.value)}
                value={userData.username}
                className=" placeholder:italic outline-none bg-appyellow "
              />
            </div>
          </div>
          <div>
            <p>Address</p>
            <textarea
              onChange={(e) => editData("address", e.target.value)}
              rows="3"
              className="border border-appindigo rounded-lg outline-none bg-appyellow p-[10px] w-full"
              placeholder="No 1, ABC Street..."
            />
          </div>
        </div>
        <AppButton text={"Update Profile"} />
      </div>
    </div>
  );
};
export default EditProfile;
