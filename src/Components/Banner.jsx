import React from "react";

export default function Banner(props) {
  return (
    <>
      <div className="h-[65vh] bg-cover bg-no-repeat">
        <div className="w-custom mx-auto">
          <div className="w-custom mx-auto relative">
            <div className="flex justify-end z-0">
              <img className="w-[50%] h-[315px]" src={props.img} alt="" />
            </div>
            <div className="w-[56%] bg-[#0572FF] h-[315px] z-30 absolute top-[45%] flex justify-center flex-col px-5 gap-2">
              <h1 className="font-bold text-[40px] text-white font-Poppins leading-10">
                {props.title}
              </h1>
              <p className="font-Poppins text-2xl text-white">{props.text}</p>
              <div>
                <button className="text-sm px-5 py-2 text-white font-Poppins border-[1px] border-white hover:bg-white hover:text-blue">
                  Open Our Custom Tool
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
