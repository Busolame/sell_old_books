"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppCard from "@/components/appcard";
import TopBar from "@/components/topbar";

const MarketPlace = () => {
  const router = useRouter();

  const [bookArray, setBookArray] = useState([
    {
      id: 0,
      amount: 2000,
      date: "January 23, 2024",
      genre: "Finance",
      image: "psycho_of_money.jpg",
      title: "Psychology of Money",
      year: 2023,
    },
    {
      id: 1,
      amount: 1000,
      date: "December 20, 2023",
      genre: "Influence",
      image: "thebook_thief.webp",
      title: "The Book Thief",
      year: 2003,
    },
    {
      id: 3,
      amount: 4500,
      date: "December 20, 2023",
      genre: "Motivation",
      image: "book_of_life.jpg",
      title: "The Bright Book of Life",
      year: 2003,
    },
  ]);

  const handlePay =(amount)=>{
    router.push(`paymentpage/${amount}`)

  }

  return (
    <div>
      <TopBar text={"Market Place"} />
      <div className=" my-3 grid md:grid-cols-4 grid-cols-2 gap-2">
        {bookArray.length > 0 ? (
          bookArray.map((b) => {
            return (
              <div key={b.id}>
                <AppCard
                  amount={b.amount}
                  date={b.date}
                  image={b.image}
                  genre={b.genre}
                  title={b.title}
                  year={b.year}
                  handlePay={()=>handlePay(b.amount)}
                />
              </div>
            );
          })
        ) : (
          <div>No book had been posted</div>
        )}
      </div>
    </div>
  );
};

export default MarketPlace;
