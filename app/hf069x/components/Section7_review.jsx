"use client";
import React, { useState } from "react";
import { ReviewData } from "../libs/reviewData";

const Section7_review = () => {
  const [limit, setLimit] = useState(5);

  // const formatDate = () => {
  //   const start = new Date(2024, 0, 1); // Start date
  //   const end = new Date(); // Current date
  //   const randomDate = new Date(
  //     start.getTime() + Math.random() * (end.getTime() - start.getTime())
  //   );
  //   return randomDate.toLocaleDateString("en-IN", {
  //     day: "2-digit",
  //     month: "short",
  //     year: "numeric",
  //   });
  // };
  // const newData = ReviewData.map((item, index) => ({
  //   ...item,
  //   starimg: "/ratting.png",
  //   // img: "/verified.png",
  //   date: formatDate(index), // Add the date property based on the index
  // }));

  const increaseHandle = () => {
    if (limit === ReviewData.length - 1) {
      setLimit(5);
    } else {
      setLimit((pre) => pre + 3);
    }
  };

  return (
    <section>
      <div className="bg-zinc-600 py-5">
        <h1 className="text-center text-3xl md:text-5xl text-white">
          Costomer Review
        </h1>
      </div>
      <div className="max-w-7xl m-auto flex flex-col justify-center items-center px-3">
        <ul className="md:w-1/2 space-y-5 mt-6 ">
          {ReviewData.slice(0, limit).map((review, i) => (
            <li
              key={i}
              className="flex flex-col  p-3 rounded-xl bg-white gap-x-4 shadow-sm border"
            >
              <div className="flex items-center">
                <div className="w-16 h-16 overflow-hidden rounded-full flex-none">
                  <img
                    src={review.profile_photo}
                    alt={review.name}
                    className="w-[100%] h-[100%] bg-cover"
                    loading="lazy"
                  />
                </div>
                <div className="ml-2">
                  <h1 className="text-xl font-semibold">{review.name}</h1>
                  <p className="text-sm text-gray-400 mt-1">{review.date}</p>
                </div>
              </div>
              <div className="pt-3">
                <p className="text-sm">{review.comment}</p>
                {review.image && <img src={review.image} alt="sdfsdf" width={200} loading="lazy" />}
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center md:w-auto w-full items-center mt-5 py-7">
          <button
            className="bg-blue-400 p-4 w-full md:px-20  text-white text-xl "
            onClick={increaseHandle}
          >
            {limit === ReviewData.length - 1 ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section7_review;
