import React from "react";
import Subblog from "../Components/Subblog";

export default function Blog() {
  return (
    <>
      <div className="bg-[#111827]">
        <div className="w-custom mx-auto pb-10">
          <h1 className="text-4xl font-semibold font-Poppins text-white py-5">
            Blogs
          </h1>
          <div className="flex flex-col gap-5">
            <Subblog
              img="./public/image/blog1.jpeg"
              tital="Michael Bracewell to lead New Zealand in Pakistan T20I series"
              text="Michael Bracewell is back in the New Zealand side after a year away"
            />
            <Subblog
              img="./public/image/blog2.jpeg"
              tital="Michael Bracewell to lead New Zealand in Pakistan T20I series"
              text="Michael Bracewell is back in the New Zealand side after a year away"
            />
            <Subblog
              img="./public/image/blog3.jpeg"
              tital="Michael Bracewell to lead New Zealand in Pakistan T20I series"
              text="Michael Bracewell is back in the New Zealand side after a year away"
            />
          </div>
        </div>
      </div>
    </>
  );
}
