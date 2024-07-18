import React from "react";

export default function Superdesgin() {
  return (
    <>
      <div className="w-custom mx-auto py-5">
        <h1 className="text-2xl font-bold font-Poppins ">Super Design</h1>
        <p className="text-base font-Poppins opacity-70 pt-3">
          Please fill these fields to submit the super design
        </p>
      </div>
      <hr />
      <div className="w-custom mx-auto pb-10">
        <form>
          <div className="flex gap-5">
            <div className="mb-4 flex flex-col gap-2 mt-4 w-[33%]">
              <label
                htmlFor="firstName"
                className="font-Poppins text-sm font-bold"
              >
                TEAM NAME
              </label>
              <input
                className="border-[1px] border-gray-300 px-2 py-2 text-base font-medium focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200 font-Poppins"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter Your team name"
                required
              />
            </div>
            <div className="mb-4 flex flex-col gap-2 mt-4 w-[33%]">
              <label
                htmlFor="lastName"
                className="font-Poppins text-sm font-bold"
              >
                QUANTITY
              </label>
              <input
                type="Number"
                id="lastName"
                name="lastName"
                required
                className="border-[1px] border-gray-300 px-2 py-2 text-base font-medium focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200 font-Poppins"
                placeholder="Enter Your Quality"
              />
            </div>
            <div className="mb-4 flex flex-col gap-2 mt-4 w-[33%]">
              <label
                htmlFor="options"
                className="font-Poppins text-sm font-bold"
              >
                SPORT
              </label>
              <select
                id="options"
                name="option"
                className="border-[1px] border-gray-300 px-2 py-2 text-base font-medium focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200 font-Poppins"
              >
                <option value="option1">Select Your Option</option>
                <option value="option1">Basket Ball</option>
                <option value="option2">BaseBall</option>
                <option value="option3">Football</option>
                <option value="option3">Cricket</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 flex flex-col gap-2 mt-4 w-full">
              <label
                htmlFor="options"
                className="font-Poppins text-sm font-bold"
              >
                CHOOSE COLORS- SET FOR THE DESIGN OPTOMIZATION
              </label>
              <select
                id="options"
                name="option"
                className="border-[1px] border-gray-300 px-2 py-2 text-base font-medium focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200 font-Poppins"
              >
                <option value="option1">Please Select</option>
                <option value="option1">Red</option>
                <option value="option1">Green</option>
                <option value="option1">Blue</option>
                <option value="option1">Yellow</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 flex flex-col gap-2 mt-4 w-full">
              <label
                htmlFor="firstName"
                className="font-Poppins text-sm font-bold"
              >
                PRODUCT DETAILS
              </label>
              <textarea
                name=""
                className="border-[1px] h-40 border-gray-300 px-2 py-2 text-base font-medium focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200 font-Poppins "
                placeholder="Describe Product Details"
                id=""
              ></textarea>
            </div>
          </div>
          {/* <div className="flex gap-5">
            <div className="mb-4 flex flex-col gap-2 mt-4 w-full">
              <label
                htmlFor="firstName"
                className="font-Poppins text-sm font-bold"
              >
                TEAM NAME
              </label>
              <input
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600
                "
                type=""
                id="firstName"
                name="firstName"
                required
              />
              <div>

              </div>
            </div>
          </div> */}
          <div className="flex gap-5">
            <div className="mb-4 flex flex-col gap-2 mt-4 w-1/2">
              <label
                htmlFor="firstName"
                className="font-Poppins text-sm font-bold"
              >
                FULL NAME
              </label>
              <input
                className="border-[1px] border-gray-300 px-2 py-2 text-base font-medium focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200 font-Poppins"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="mb-4 flex flex-col gap-2 mt-4 w-1/2">
              <label
                htmlFor="options"
                className="font-Poppins text-sm font-bold"
              >
                COUNTRY
              </label>
              <select
                id="options"
                name="option"
                className="border-[1px] border-gray-300 px-2 py-2 text-base font-medium focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200 font-Poppins"
              >
                <option value="option1">Please Select</option>
                <option value="option1">Pakistan</option>
                <option value="option1">United State</option>
              </select>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="mb-4 flex flex-col gap-2 mt-4 w-1/2">
              <label
                htmlFor="firstName"
                className="font-Poppins text-sm font-bold"
              >
                FULL NAME
              </label>
              <input
                className="border-[1px] border-gray-300 px-2 py-2 text-base font-medium focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200 font-Poppins"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="mb-4 flex flex-col gap-2 mt-4 w-1/2">
              <label
                htmlFor="firstName"
                className="font-Poppins text-sm font-bold"
              >
                FULL NAME
              </label>
              <input
                className="border-[1px] border-gray-300 px-2 py-2 text-base font-medium focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200 font-Poppins"
                type="email"
                id="firstName"
                name="firstName"
                placeholder="Enter Your Email"
                required
              />
            </div>
          </div>
          <div>
              <button className="font-medium font-Poppins px-10 py-3 bg-Green hover:bg-blue text-white">Send</button>
            </div>
        </form>
      </div>
    </>
  );
}
