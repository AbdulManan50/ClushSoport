import React from "react";

export default function Products(props) {
  return (
    <>
      <div className="border-[#F4F4F4] border-[1px] h-[350px] w-[330px] flex flex-col group">
        <div>
          <img
            className="w-[60%] mx-auto"
            src={props.img}
            alt=""
          />
        </div>
        <button className="py-2 bg-Green text-white font-Poppins mx-4 -mt-5 opacity-0 group-hover:opacity-100">
          SELECT NOW
        </button>
        <h1 className="text-sm font-Poppins mx-auto pt-4 uppercase">{props.name}</h1>
        <h1 className="font-Poppins text-xl font-bold mx-auto pt-2">{props.price}</h1>
      </div>
    </>
  );
}
