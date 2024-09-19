import React from "react";
import Banner from "../Components/Banner";
import Products from "../Components/Products"; 
export default function Foootball() {
  return (
    <>
          <div className="bg-shop bg-contain">
        <Banner
          img="/image/Football banner.png"
          title="Get your kits now"
          text={
            <>
              Score goals and turn heads. This soccer <br />
              shirt is all about precision and flair.
            </>
          }
        />
        <div className="">
          <div className="w-custom mx-auto ">
            <div className="">
              <h1 className="font-bold text-[40px] font-Poppins">
                Choose a product
              </h1>
              <div className="border-[#F4F4F4] border-[1px] px-5 py-10 bg-white mt-3 mb-10">
                <h1 className="text-right">Displaying 12 results</h1>
                <div className="flex gap-5 flex-wrap mt-3">
                <Products
                 img="/image/product1.png"
                 name="BASEBALL SHORTS 1"
                 price="$11.99 - $14.99"
                 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
