import React from "react";

export default function Imgs(props) {
  return (
    <>
      <div className="border-[#F4F4F4] border-[1px] h-[200px] w-[330px] flex flex-col group">
        <div className="mx-3 mt-3">
          <img className="w-[100%]" src={props.img} alt="" />
        </div>
        <button className="py-2 bg-Green text-white font-Poppins mx-4 -mt-5 opacity-0 group-hover:opacity-100">
          SELECT NOW
        </button>
      </div>
    </>
  );
}
