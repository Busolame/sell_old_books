"use client";
import { useState } from "react";
import TopBar from "@/components/topbar";
import { TbClick } from "react-icons/tb";
import { CldImage, CldUploadWidget } from 'next-cloudinary';

import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

const SellABook = () => {
  const [bookdata, setData] = useState({});
  const [imageUrl, setImageUrl] = useState(null);



  const handleInput = (e, value) => {
    let newBookData = { ...bookdata };
    value === "title"
      ? setData({ ...newBookData, title: e })
      : value === "author"
      ? setData({ ...newBookData, author: e })
      : value === "amount"
      ? setData({ ...newBookData, amount: e })
      : value === "genre"
      ? setData({ ...newBookData, genre: e })
      : setData({ ...newBookData, description: e });
  };
  const handlePosting = () => {
    console.log("Ready to post");
  };
  const handlePreview = () => {
    console.log("Ready to Preview");
    console.log(bookdata);
  };

  return (
    <div>
      <TopBar text={"Book sale"} />
      <div className="h-[180px] my-3 w-full flex justify-center items-center">
        {imageUrl != null ?
          <CldImage
            width="130"
            height="130"
            src={imageUrl}
            // src={"https://res.cloudinary.com/doz05sjtw/image/upload/v1737472263/psycho_of_money_smd0pj.jpg"}
            alt="book image"
            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
          />
          :
          <CldUploadWidget
            uploadPreset="ml_default" 
            options={{ sources: ['local', 'url', 'camera'] }}
            onSuccess={(result) => {
              setImageUrl(result.info.secure_url)
            }}
          >
          {({ open }) =><MdOutlinePhotoSizeSelectActual
              onClick={() => open()}
              color="#F5F5F5"
              className="h-[50px] w-[50px]"
            />
            }
          </CldUploadWidget>
        }        
      </div>

      <div className="px-5">
        <input
          onChange={(e) => handleInput(e.target.value, "title")}
          className="h-[45px] border rounded-e-[10px] outline-none bg-appyellow p-[10px] w-full mb-4"
          placeholder="Title"
        />
        <input
          onChange={(e) => handleInput(e.target.value, "author")}
          className="h-[45px] border rounded-s-[10px] outline-none bg-appyellow p-[10px] w-full mb-4"
          placeholder="Author"
        />
        <div className="flex h-[45px] border rounded-e-[10px] bg-appyellow p-[10px] w-full mb-4">
          &#8358;
          <input
            onChange={(e) => handleInput(e.target.value, "amount")}
            className="bg-appyellow outline-none ml-1"
            placeholder="Amount"
          />
        </div>
        <input
          onChange={(e) => handleInput(e.target.value, "genre")}
          className="h-[45px] border rounded-s-[10px] outline-none bg-appyellow p-[10px] w-full mb-4"
          placeholder="Genre e.g Comedy, Romance"
        />

        <textarea
          onChange={(e) => handleInput(e.target.value, "description")}
          rows="5"
          className="border rounded-t-[10px] outline-none bg-appyellow p-[10px] w-full mb-[8px]"
          placeholder="Description"
        />

      </div>
      <div className="flex justify-around">
        <div
          onClick={handlePreview}
          className=" uppercase cursor-pointer rounded-s-[10px] px-[15px] py-[10px] text-center text-appindigo border-2 bg-appwhite font-bold border-appindigo mb-[25px] mt-[15px]"
        >
          Preview
        </div>
        <div
          onClick={handlePosting}
          className="flex items-center uppercase cursor-pointer rounded-s-[10px] px-[15px] py-[10px] text-center text-appwhite font-bold bg-appindigo mb-[25px] mt-[15px]"
        >
          <TbClick className="h-6 w-6 mr-1" />
          Post
        </div>
      </div>
    </div>
  );
};
export default SellABook;
