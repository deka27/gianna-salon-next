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

import { useState, useEffect } from "react";
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
  bg3, bg2, bg8, bg4, bg5, bg6, bg7, bg1, bg9
];

export default function Gallery() {

  const [slidesPerView, setSlidesPerView] = useState(3); // Default value

  useEffect(() => {
    // Function to determine the appropriate number of slidesPerView
    const calculateSlidesPerView = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    // Add an event listener to update slidesPerView when the window is resized
    window.addEventListener('resize', calculateSlidesPerView);

    // Call the function initially to set the initial value
    calculateSlidesPerView();

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', calculateSlidesPerView);
    };
  }, []);

  return (
    <div className="relative mx-auto">
      <div>
        <div className="text-4xl font-bold text-center mb-24">Gallery</div>
      </div>
      <Swiper
        spaceBetween={2}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
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
          <div className="md:w-full h-72 md:h-[450px] lg:h-[650px]">
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
