"use client";

import Facial from "./facial/page";
import Hair from "./hair/page";
import Manipedi from "./manipedi/page";
import Bleach from "./bleach/page";
import Color from "./color/page";
import Hairwax from "./hairwax/page";
import Polish from "./polish/page";
import Spa from "./spa/page";
import Wax from "./wax/page";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function Services() {

  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="max-h-fit"
      >
        <SwiperSlide>
          <Hair />
        </SwiperSlide>
        <SwiperSlide>
          <Facial />
        </SwiperSlide>
        <SwiperSlide>
          <Manipedi />
        </SwiperSlide>
        <SwiperSlide>
          <Bleach />
        </SwiperSlide>
        <SwiperSlide>
          <Color />
        </SwiperSlide>
        <SwiperSlide>
          <Hairwax />
        </SwiperSlide>
        <SwiperSlide>
          <Polish />
        </SwiperSlide>
        <SwiperSlide>
          <Spa />
        </SwiperSlide>
        <SwiperSlide>
          <Wax />
        </SwiperSlide>
      </Swiper>


    </div>
  );
}
