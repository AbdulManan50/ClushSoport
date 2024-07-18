import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" bg-[#393939] h-[55vh]">
        <div className="w-[1440px] mx-auto pt-10 ">
          <div className="flex justify-between">
            <div>
              <h1 className="text-white font-bold text-2xl font-Poppins">
                DESIGN
              </h1>
              <ul className="text-white font-Poppins mt-5">
                <li>Super Design</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-2xl font-Poppins">
                SPORTS
              </h1>
              <ul className="text-white font-Poppins mt-5 flex flex-col gap-2">
                <li>Cricket</li>
                <li>Football</li>
                <li>Basketball</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-2xl font-Poppins">
                KEY LINKS
              </h1>
              <ul className="text-white font-Poppins mt-5 flex flex-col gap-2">
                <li>Free Size Sample</li>
                <li>Color Swatches</li>
                <li>Logo/Artwork</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-2xl font-Poppins">
                ABOUT
              </h1>
              <ul className="text-white font-Poppins mt-5 flex flex-col gap-2">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Security Policy</li>
                <li>Shipping Policy</li>
                <li>Our Company</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-2xl font-Poppins">
                CONTACT
              </h1>
              <ul className="text-white font-Poppins mt-5 flex flex-col gap-2">
                <li>+1 (896) 837-7677</li>
                <li>info@clush.com</li>
                <li>748 Nobel Avenue</li>
                <li>Stowmarket, Suffolk, IP14 5AH</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between bg-[#2F2F2F] p-4 mt-10">
            <h1 className="text-sm font-Poppins text-white">
              © ClushSports 2024. All Rights Reserved.
            </h1>
            <h1 className="text-sm font-Poppins text-white">
              Designed By <span className="font-semibold">Websouls</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
