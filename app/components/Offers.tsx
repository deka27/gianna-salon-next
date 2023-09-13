"use client";

import Image from "next/image";
import bg1 from "@/public/assets/promo/promo1.jpg";
import bg2 from "@/public/assets/promo/promo2.jpg";
import bg3 from "@/public/assets/promo/promo3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const images = [bg3, bg2, bg1];

export default function Offers() {
  return (
    <div className="my-36 bg-red-800">
      <div className="mx-auto my-6 p-8">
        <div className="text-4xl font-bold text-center my-6 text-white dark:text-black">Offers</div>
        <div className="mx-auto text-center text-sm md:text-xl w-4/6 text-white dark:text-black">
          Exciting news! We are offering special discounts on our salon
          services. Treat yourself or a loved one to a day of pampering without
          breaking the bank. Book now and enjoy our fantastic offers!
        </div>
      </div>
      <div className="mx-auto my-6 p-6 md:p-12 mb-8">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mb-8"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="bg-red-800">
              <div className="w-[100%] md:w-[70%] mx-auto">
                <Image
                  src={image}
                  alt="Promo"
                  className="rounded-xl object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
