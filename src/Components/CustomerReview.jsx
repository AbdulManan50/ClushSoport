import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CustomerReview(props) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
      >
        <SwiperSlide className="review-slider">
          <div className=" bg-white p-5 flex flex-col gap-3 review-slide">
            <div>
              <img src="./public/image/Star5.png" alt="" />
            </div>
            <p className="font-Poppins">The service at Clush Sports was exceptional from start to finish. They truly understand what teams need and deliver it with excellence. Our custom kits have been a game-changer on and off the field!</p>
            <h1 className=" text-xl text-Green font-Poppins">Shanwar Butt</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="review-slider">
          <div className=" bg-white p-5 flex flex-col gap-3">
            <div>
              <img src="./public/image/Star5.png" alt="" />
            </div>
            <p className="font-Poppins">The service at Clush Sports was exceptional from start to finish. They truly understand what teams need and deliver it with excellence. Our custom kits have been a game-changer on and off the field!</p>
            <h1 className=" text-xl text-Green font-Poppins">Shanwar Butt</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="review-slider">
          <div className=" bg-white p-5 flex flex-col gap-3">
            <div>
              <img src="./public/image/Star5.png" alt="" />
            </div>
            <p className="font-Poppins">The service at Clush Sports was exceptional from start to finish. They truly understand what teams need and deliver it with excellence. Our custom kits have been a game-changer on and off the field!</p>
            <h1 className=" text-xl text-Green font-Poppins">Shanwar Butt</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
