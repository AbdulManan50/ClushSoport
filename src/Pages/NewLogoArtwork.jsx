import React from "react";
import Banner from "../Components/Banner";
import Products from "../Components/Products"; 
export default function NewLogoArtwork() {
  return (
    <>
          <div className="bg-shop bg-contain">
        <Banner
          img="/image/NewLogoArtwork.png"
          title=
          {
            <>
            Explore our range of size <br /> samplese
            </>
          }
          text={
            <>
            Our size samples are designed to simplify <br /> the selection process.
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
                <Products
                 img="/image/product2.png"
                 name="BASEBALL SHORTS 1"
                 price="$11.99 - $14.99"
                 />
                <Products
                 img="/image/product3.png"
                 name="BASEBALL SHORTS 1"
                 price="$11.99 - $14.99"
                 />
                <Products
                 img="/image/product4.png"
                 name="BASEBALL SHORTS 1"
                 price="$11.99 - $14.99"
                 />
                <Products
                 img="/image/product5.png"
                 name="BASEBALL SHORTS 1"
                 price="$11.99 - $14.99"
                 />
                <Products
                 img="/image/product6.png"
                 name="BASEBALL SHORTS 1"
                 price="$11.99 - $14.99"
                 />
                <Products
                 img="/image/product7.png"
                 name="BASEBALL SHORTS 1"
                 price="$11.99 - $14.99"
                 />
                <Products
                 img="/image/product8.png"
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
