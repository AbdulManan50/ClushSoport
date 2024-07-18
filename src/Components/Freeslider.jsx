import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  // Array of image paths (replace with your actual image paths)
  const images = [
    "./public/image/shirt1.png",
    "./public/image/shirt2.png",
    "./public/image/shirt3.png",
    "./public/image/shirt4.png",
    "./public/image/shirt5.png",
    "./public/image/shirt6.png",
    "./public/image/shirt7.png",
    "./public/image/shirt8.png",
    "./public/image/shirt9.png",
    "./public/image/shirt10.png",
  ];

  const centerIndex = (activeIndex + 2) % images.length;

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={100}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="slider mt-9">
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt=""
                style={{
                  transform: index === centerIndex ? "scale(1.5)" : "scale(1)",
                  height: index === centerIndex ? "280px" : "auto",
                  transition: "transform 0.5s, height 0.5s",
                }}
              />
              {index === centerIndex && (
                <div>
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-center py-4 overflow-hidden text-white bg-blue group -top-10"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green rounded-full group-hover:w-72 group-hover:h-60"></span>
                    <span className="relative font-poppins text-xl font-bold px-14">
                      Customize Now
                    </span>
                  </a>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
