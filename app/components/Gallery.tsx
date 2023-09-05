"use client";

import Image from "next/image";
import bg1 from "@/public/assets/gallery/a.jpg";
import bg2 from "@/public/assets/gallery/b.jpg";
import bg3 from "@/public/assets/gallery/c.jpg";
import bg4 from "@/public/assets/gallery/d.jpg";
import bg5 from "@/public/assets/gallery/e.jpg";
import bg6 from "@/public/assets/gallery/f.jpg";
import bg7 from "@/public/assets/gallery/g.jpg";
import bg8 from "@/public/assets/gallery/h.jpg";
import bg9 from "@/public/assets/gallery/i.jpg";


import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const images = [
  bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9
];

export default function Gallery() {
  return (
    <div className="relative mx-auto">
      <div>
        <div className="text-4xl font-bold text-center mb-24">Gallery</div>
      </div>
      <Swiper
        spaceBetween={2}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 0,
          stretch: 60,
          depth: 100,
          modifier: 1.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
          <div className="w-full h-64 md:h-[560px]">
            <Image
              src={image}
              alt="Background Home"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}
