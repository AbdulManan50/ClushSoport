import React from "react";
import Banner from "../Components/Banner";
import Imgs from "../Components/imgs";

export default function PhotoWall() {
  return (
    <>
      <div className="bg-shop bg-contain">
        <Banner
          img="./public/image/photowall.png"
          title="Boundary-Hitting Attire"
          text={
            <>
              From cover drives to reverse sweeps,
              <br /> this jersey lets you express your love for the <br /> game.
            </>
          }
        />
        <div className="">
          <div className="w-custom mx-auto ">
            <div className="">
              <h1 className="font-bold text-[40px] font-Poppins">
                Choose a product
              </h1>
              <div className="border-[#F4F4F4] border-[1px] px-5 py-3 bg-white mt-3 mb-10">
                <h1 className="text-right">Displaying 12 results</h1>
                <div className="flex gap-5 flex-wrap mt-3">
                  <Imgs img="./public/image/photowall.png" />
                  <Imgs img="./public/image/photowall.png" />
                  <Imgs img="./public/image/photowall.png" />
                  <Imgs img="./public/image/photowall.png" />
                  <Imgs img="./public/image/photowall.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
