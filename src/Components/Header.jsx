import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="bg-darkBlue">
        <div className="w-[1440px] mx-auto flex justify-end items-center gap-5">
          <div className="flex items-center gap-2 bg-Green p-2 ">
            <div>
              <h1 className="font-Poppins font-bold text-white">
                Track Your Order
              </h1>
            </div>
            <div>
              <img className="" src="./public/image/delivery.svg" alt="" />
            </div>
          </div>
          <div>
            <img className="" src="./public/image/user.svg" alt="" />
          </div>
          <div>
            <img className="" src="./public/image/cart.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-[1440px] mx-auto flex justify-between items-center py-2">
        <div>
          <NavLink to="/">
            <img src="./public/image/logo.webp" alt="" />
          </NavLink>
        </div>
        <div className="flex gap-10 items-center">
          <div>
            <ul className="flex font-Poppins text-[#051e5b] font-semibold gap-10">
              <li>
                {" "}
                <NavLink to="shop">Shop</NavLink>
              </li>
              <ul className="flex space-x-4 z-50">
                <li className="relative group">
                  <NavLink className="px-4 py-2">SPORTS</NavLink>
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <li className="px-2 py-2 hover:text-Green font-normal hover:mr-5">
                      <NavLink to="football">Football</NavLink>
                    </li>
                    <li className="px-2 py-2 hover:text-Green font-normal hover:mr-5">
                      <NavLink to="baseball">Baseball</NavLink>
                    </li>
                    <li className="px-2 py-2 hover:text-Green font-normal hover:mr-5">
                      <NavLink to="cricket">Cricket</NavLink>
                    </li>
                  </ul>
                </li>
                {/* Add other menu items here */}
              </ul>
              <ul className="flex space-x-4 z-50">
                <li className="relative group">
                  <NavLink className="px-4 py-2">PRODUCT ADDONS</NavLink>
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <li className="px-2 py-2 hover:text-Green font-normal hover:mr-5">
                      <NavLink to="New-Logo-Artwork">New Logo Artwork</NavLink>
                    </li>
                    <li className="px-2 py-2 hover:text-Green font-normal hover:mr-5">
                      <NavLink to="Free-Size-Sample">Free Size Sample</NavLink>
                    </li>
                    <li className="px-2 py-2 hover:text-Green font-normal hover:mr-5">
                      <NavLink to="Color-Swatches">Color Swatches</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
              <li>
                {" "}
                <NavLink to="PHOTO-WALL">PHOTO WALL</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="blogs">BLOGS</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="contactus">CONTACT US</NavLink>
              </li>
            </ul>
          </div>
          <div>
            {/* <button className="px-7 py-3 bg-[#0572ff] font-poppins text-white font-bold">
              SUPER DESGIN
            </button> */}
            <NavLink to="Super-Desgin" >
              <a
               
                class="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden  text-white bg-blue group"
              >
                <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-Green rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span class="relative font-Poppins text-base font-semibold">
                  SUPER DESGIN
                </span>
              </a>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
