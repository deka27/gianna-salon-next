"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const slides = [
  {
    text: "Awesome service..i have been coming here for hair treatments,waxing and other saloon services .i am really thankful to Roli and Blesson for providing me all the services with great patience care and a friendly manner ...keep up the good work ✌️",
    author: "Komal Hariyani",
  },
  {
    text: "Amazing service! The salon is Affordable, hygienic and really helpful staff. Would recommend it to everyone in and around HSR. I’ve been to several walk in parlours, and Giana remains the top choice 😊",
    author: "Ayushi gaur",
  },
  {
    text: "Had visited and got it done facial, pedicure and manicure. The staffs were very well train and so professional. Highly recommend, must visit salon..👍",
    author: "Eddyaba duo",
  },
  {
    text: "Good salon, very professional, recently I have done hair color, satisfied with the service. 💇‍♀️",
    author: "Htoi San",
  },
  {
    text: "Life’s more beautiful when you meet the right hairdresser 😍 hair Smoothening done by Hapolo",
    author: "Thaikho Raveinai",
  },
];

export default function Reviews() {
  return (
    <div className="">
      <div>
        <div className="text-4xl font-bold text-center mb-8">Reviews</div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          // dynamicBullets: true,
          clickable: true,
          // el: ".swiper-pagination",
          // bulletClass: "custom-pagination-bullet",
        }}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="mt-10">
            <div className="flex flex-col justify-center items-center h-full ">
              <div className="text-center md:text-2xl mx-auto w-3/4">
                {slide.text}
              </div>
              <div className="text-center font-bold mt-10 mb-16 md:text-2xl">
                {slide.author}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
