import React from "react";
import CustomerReview from "../Components/CustomerReview";
import Slider from "../Components/Slider";
import Freeslider from "../Components/Freeslider";

export default function Home() {
  return (
    <>
      <div className="backgroung-banner h-[84vh] bg-cover">
        <div className="w-[1440px] mx-auto justify-between flex items-center">
          <div className="w-[40%] relative">
            <h1 className="text-Green font-extrabold text-[64px]  font-poppins -mb-8">
              GET YOUR
            </h1>
            <h1 className="text-blue font-Poppins font-black text-9xl ">
              GAME
            </h1>
            <p className=" text-[22px] font-Poppins font-medium pb-4">
              With team wear that matches not just your club <br /> colors, but
              also your sports spirit
            </p>
            <div>
              <button className=" font-Poppins text-xl px-7 py-3 text-white bg-blue hover:bg-Green">
                Customize Your Kit
              </button>
              <span className="px-6 py-6 bg-Green animate-pulse text-strok-1 text-white text-[5vw] rounded-full absolute top-0 right-0 font-Poppins">
                ON
              </span>
            </div>
          </div>
          <div className="w-[50%] relative flex justify-center">
            <div className="z-[99] absolutes">
              <img
                className="w-[50%] mx-auto"
                src="./public/image/banner-shirt.png"
                alt=""
              />
            </div>
            <div className="backgroung-banner-gradient absolute rounded-full h-[76vh] w-[40vw] top-10 z-10"></div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] mx-auto flex gap-10 mb-20 -mt-14 ">
        <div className="w-1/2 border-[3px] h-[80vh]  border-Green bg-white">
          <div className="relative flex justify-center items-center h-[80%] group">
            <div className="absolute top-1/2 left-[73%] transform -translate-x-1/2 -translate-y-1/2 z-30 group-hover:pr-8 transition-all duration-300">
              <img src="./public/image/sidebarimg.png" alt="" />
            </div>
            <div className="absolute top-[50%] left-[47%] transform -translate-x-1/2 -translate-y-1/2 z-20 group-hover:pl-4 transition-all duration-300">
              <img src="./public/image/custondesgin.png" alt="" />
            </div>
            <div className="absolute top-[30%] left-[47%] transform -translate-x-1/2 -translate-y-1/2 z-10">
              <img src="./public/image/leftright.png" alt="" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:pt-4 transition-all duration-300">
              <img
                className="w-[85%]"
                src="./public/image/backgroundborder.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-Green font-bold text-4xl font-Poppins text-center">
            custom design <br /> your sports gear
            </h1>
          </div>
        </div>
        <div className="w-1/2 border-[3px] h-[80vh] border-blue text bg-white z-20">
          <div className="flex justify-center items-center relative w-full h-[80%] group  bg-no-repeat bg-center  bg-[url('./public/image/emoji.png')] ">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <img src="./public/image/shirt.png" alt="Shirt" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 group-hover:pb-16 transition-all duration-300">
              <img src="./public/image/star.png" alt="Star" />
            </div>
          </div>
          <div>
            <h1 className="text-blue font-bold text-4xl font-Poppins text-center">
              share your own <br /> design with us!
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[url('./public/image/homebg.png')] h-[85vh] bg-center bg-contain">
        <div className="w-[1440px] mx-auto pt-20">
          <h1 className="font-bold text-6xl font-Poppins text-center">
            Featured Product
          </h1>
          <p className="font-Poppins font-medium text-xl text-center pt-2">
            WE MAKE HIGH PERFORMANCE ON AND OFF-FIELD SPORTSWEAR FOR CLUBS,
            SCHOOLS AND BUSINESSES RIGHT <br /> ACROSS UNITED KINGDOM.
          </p>
        </div>
        <div className="pb-16">
          <Slider />
        </div>
      </div>
      <div className="bg-[url('./public/image/dotimg.png')] bg-no-repeat bg-contains my-10">
        <div className="w-[1540px] mx-auto flex items-center ">
          <div className="w-[60%] flex flex-col gap-10">
            <h1 className=" font-Poppins font-bold text-6xl">
              Easy As 1, 2 & 3
            </h1>
            <div className="flex px-5 py-7 border-[1px] border-black items-center relative w-[80%]">
              <div>
                <img
                  className="w-[100%]"
                  src="./public/image/dotshirt.png"
                  alt=""
                />
              </div>
              <div className="flex ">
                <h1 className="font-Poppins text-2xl font-bold">
                  We Provide You With All The Tools <br /> You Need For
                  Customization
                </h1>
                <p className="text-[250px] font-extrabold text-[#F2F2F2] absolute right-2 font-Poppins -bottom-24">
                  1
                </p>
              </div>
            </div>
            <div className="flex px-5 py-7 border-[1px] border-black items-center relative w-[80%] translate-x-32">
              <div>
                <img
                  className="w-[100%]"
                  src="./public/image/dotshirt.png"
                  alt=""
                />
              </div>
              <div className="flex ">
                <h1 className="font-Poppins text-2xl font-bold">
                  Your Idea Takes Shape In Our <br /> Laboratories
                </h1>
                <p className="text-[250px] font-extrabold text-[#F2F2F2] absolute right-2 font-Poppins -bottom-24">
                  2
                </p>
              </div>
            </div>
            <div className="flex px-5 py-7 border-[1px] border-black items-center relative w-[80%] translate-x-64 z-50 bg-white">
              <div>
                <img
                  className="w-[100%]"
                  src="./public/image/dotshirt.png"
                  alt=""
                />
              </div>
              <div className="flex ">
                <h1 className="font-Poppins text-2xl font-bold">
                  Your Custom Design Arrives <br />s Within Weeks
                </h1>
                <p className="text-[250px] font-extrabold text-[#F2F2F2] absolute right-2 font-Poppins -bottom-24">
                  3
                </p>
              </div>
            </div>
          </div>
          <div className="w-[35%] bg-[url('./public/image/backgroundimg.png')] bg-no-repeat bg-center relative group ">
            <div className="flex justify-center items-center">
              <img
                className="absolute w-[100%] group-hover:p-5 transition-all duration-200 "
                src="./public/image/step-dash-bg.png"
                alt=""
              />
              <img
                className="absolute w-[80%] group-hover:p-5 transition-all duration-200"
                src="./public/image/minordash.png"
                alt=""
              />
              <img
                className="absolute w-[70%] group-hover:p-6 transition-all duration-200"
                src="./public/image/step-shirt.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80vh] relative">
        <div className="h-full flex flex-col justify-end w-full absolute z-0 home-sample-bg ">
          <div></div>
          <div>
            <h1 className="font-bold font-Poppins text-[200px] uppercase text-center text-white leading-none">
              Sample
            </h1>
          </div>
          <div>
            <p className="font-bold font-Poppins text-[260px] uppercase text-center leading-none -mb-8">
              <span className="font-bold font-Poppins text-6xl uppercase"> Order</span><span className=""> Sample</span><span className="font-bold font-Poppins text-6xl uppercase">Shirt</span>
            </p>
          </div>
        </div>
        <div className="h-full w-full absolute bg-[#11377edb] z-10 py-10">
          <h1 className="text-8xl font-bold font-Poppins text-white text-center">
            See, Feel, Believe
          </h1>
          <p className="text-4xl font-bold font-Poppins text-white text-center pt-3">
            Order your FREE Sample now
          </p>
          <Freeslider />
        </div>
      </div>
      <div className="bg-Green">
        <div className="w-custom mx-auto pt-14">
          <h1 className="font-Poppins text-6xl text-white font-bold">
            Built On Trust
          </h1>
          <p className="text-2xl text-white pt-2 font-Poppins">
            Don't Just Take Our Word For It – Hear From The Athletes Who Have
            Experienced The Difference!
          </p>
          <div className=" pt-10">
            <CustomerReview />
          </div>
        </div>
        <div className="flex justify-end pt-10">
          <img className="" src="./public/image/trust-bg.png" alt="" />
        </div>
      </div>
      <div className="w-custom mx-auto pt-20 mb-20">
        <h1 className="font-Poppins text-6xl font-bold text-center">
          Latest on clush sports
        </h1>
        <p className="text-2xl font-Poppins text-center pt-5">
          Discover, Learn, And Excel With Clush Sports!
        </p>
        <div className="flex gap-10 pt-12">
          <div className="bg-blog-img w-1/2 bg-no-repeat  h-[70vh]">
            <div className="border-[1px] border-black flex">
              <div className="w-1/2">
                <img
                  className="min-h-[440px]"
                  src="./public/image/Blog20image.jpeg"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-10 flex flex-col gap-5 justify-center bg-[#ffffffc8]">
                <h1 className="text-2xl font-medium font-Poppins">
                  Michael Bracewell to lead New Zealand in Pakistan T20I series
                </h1>
                <p className="font-Poppins font-medium">
                  Michael Bracewell Is Back In The New Zealand Side After A Year
                  Away
                </p>
                <div>
                  <button className="px-5 py-2 bg-Green font-Poppins">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blog-img w-1/2 bg-no-repeat  h-[70vh]">
            <div className="border-[1px] border-black flex">
              <div className="w-1/2">
                <img
                  className="min-h-[440px]"
                  src="./public/image/Soccer-Blogs.webp"
                  alt=""
                />
              </div>
              <div className="w-1/2 p-10 flex flex-col gap-5 justify-center bg-[#ffffffc8]">
                <h1 className="text-2xl font-medium font-Poppins">
                  Michael Bracewell to lead New Zealand in Pakistan T20I series
                </h1>
                <p className="font-Poppins font-medium">
                  Michael Bracewell Is Back In The New Zealand Side After A Year
                  Away
                </p>
                <div>
                  <button className="px-5 py-2 bg-Green font-Poppins">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
