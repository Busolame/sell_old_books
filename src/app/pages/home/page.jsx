"use client";
import "../../globals.css";

import TopBar from "@/components/topbar";

const Profile = () => {

  return (
    <div className="backgroundHomeImage">
      <div className="p-3">
        <TopBar text={"Home"} />
      </div>

      <div className="relative text-appwhite font-bold h-[60vh] bg-appindigo rounded-t-[20px] pt-[131px] mt-[160px] text-center">
        <div className="absolute -top-[40px] w-[90vw]">
            <div className="flex justify-around">
                <img src="../assets/images/what_doesn't.jpg" width={100} height={100} className="rounded-tl-2xl" />
                <img src="../assets/images/themaid.jpg" width={100} height={100}  className="rounded-tl-2xl"/>
                <img src="../assets/images/intimacy.jpg" width={100} height={100} className="rounded-tl-2xl"/>
            </div>
        </div>
        
        <h1 style={{marginBottom: 30, fontSize: 40}}>Sell Your Old Books</h1>
        <span>You might be just the reason someone wants to read a book!</span>
     
      </div>
    </div>
  );
};
export default Profile;
