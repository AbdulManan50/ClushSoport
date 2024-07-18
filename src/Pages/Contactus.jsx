import React from "react";

export default function Contactus() {
  return (
    <>
      <div className="relative">
        <div>
          <iframe
            className="w-full h-[100vh]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13603.565979762488!2d74.3235534966322!3d31.52713995568804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905c2ca072aa1%3A0xbec1fa2e73d6b2ae!2sHafeez%20Centre%20Online%20Store!5e0!3m2!1sen!2s!4v1720795425708!5m2!1sen!2s"
            allowfullscreen="" loading="lazy"referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="h-[100vh] w-custom mx-auto flex justify-end items-center bg-transparent absolute top-0">
            <div className="w-[480px] bg-white p-7 rounded-lg">
            <form className="contact-form flex flex-col">
            <h2 className="font-Poppins text-lg font-medium mb-1">Feedback</h2>
            <p className="text-base text-[#4b5563] font-Poppins">Your game, your gear. How did we score? Share your thoughts!</p>
            <div className="mb-4 flex flex-col gap-2 mt-4">
            <label htmlFor="name" className="text-sm font-Poppins text-[#4b5563]">Full Name</label>
            <input type="text" id="name" name="name" className="border-[1px] border-gray-300 px-2 py-1 text-xl rounded-md focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200"  required />
            </div>

             <div className="mb-4 flex flex-col gap-2">
             <label htmlFor="email" className="text-sm font-Poppins text-[#4b5563]">Email</label>
             <input type="email" id="email" name="email" className="border-[1px] border-gray-300 px-2 py-1 text-xl rounded-md focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200"  required />
             </div>

             <div className="mb-4 flex flex-col gap-2">
             <label htmlFor="number" className="text-sm font-Poppins text-[#4b5563]" >Contact Number</label>
             <input type="tel" id="number" name="number" className="border-[1px] border-gray-300 px-2 py-1 text-xl rounded-md focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200"   required />
             </div>

             <div className="mb-4 flex flex-col gap-2">
             <label htmlFor="message" className="text-sm font-Poppins text-[#4b5563]" >Message</label>
             <textarea id="message" name="message" rows="4" className="border-[1px] border-gray-300 px-2 py-1 text-xl rounded-md focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue-200"  required></textarea>
             </div>

            <button type="submit" className="text-lg font-Poppins bg-[#6366F1] text-white py-2 rounded-md">Submit</button>
          </form>
            </div>
        </div>
      </div>
    </>
  );
}
