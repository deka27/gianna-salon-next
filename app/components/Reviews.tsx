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
    text: "I've been searching for the perfect salon for a while, and I finally found it. The team here is passionate about what they do, and it shows. My stylist took the time to consult with me and ensure I got the exact haircut and color I wanted. The end result exceeded my expectations. I appreciate the attention to detail and the warm, friendly atmosphere. I can't wait to return for my next appointment!",
    author: "John Doe",
  },
  {
    text: "I had my first visit to a new salon last week, and I was blown away by the experience. The ambiance was luxurious, and the staff was incredibly professional. My stylist was a true expert. They not only gave me a stunning haircut but also shared valuable tips for maintaining my hair's health. I felt pampered and refreshed by the end of my visit. I'll definitely be a regular customer now!",
    author: "Jane Smith",
  },
  {
    text: "I've been a loyal customer of this salon for years, and they never disappoint. The salon offers a wide range of services, and the quality is consistently top-notch. Whether it's a haircut, color, or spa treatment, they always exceed my expectations. The staff is knowledgeable, and they take the time to understand my preferences. I highly recommend this salon for all your beauty needs.",
    author: "James Johnson",
  },
  {
    text: "I can't say enough good things about the salon I visited. Every visit is a treat. The salon is always clean and stylish, and the staff is professional and friendly. My stylist is a true artist. They transformed my hair into a work of art. I leave the salon feeling confident and beautiful every time.",
    author: "Kirk Boor",
  },
  {
    text: "I recently had a fantastic experience at a salon. The staff was incredibly welcoming and attentive from the moment I walked in. My stylist did an amazing job with my hair. They listened to my preferences and gave me the perfect haircut and color. The salon had a relaxing atmosphere, and I left feeling like a million bucks. I'll definitely be back!",
    author: "Santo Barr",
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
        effect={"fade"}
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
          <SwiperSlide key={index} className="mt-10 bg-[#121212]">
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
