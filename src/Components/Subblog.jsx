import React from "react";

export default function Subblog(props) {
  return (
    <>
      <div className="flex gap-10">
        <div className="w-[50%]">
          <img
            className="rounded-xl w-full h-[350px]"
            src={props.img}
            alt=""
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-3">
            <h1 className="font-Poppins text-sm text-[#3b82f6] uppercase">LATEST NEWS</h1>
            <h1 className="text-3xl font-semibold font-Poppins text-white hover:underline">{props.tital} </h1>
            <p className="text-sm font-Poppins text-[#d1d5db]">{props.text}</p>
            <div><button className="text-[#3b82f6] hover:text-[#60a5fa] font-Poppins underline">Read more</button></div>
        </div>
      </div>
    </>
  );
}
