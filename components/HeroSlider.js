// components/HeroSlider.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const slides = [
  "/demo1.jpg","/demo2.jpg","/demo3.jpg",
  "/demo4.jpg","/demo5.jpg","/demo6.jpg",
  "/demo7.jpg","/demo8.jpg",
];

export default function HeroSlider() {
  return (
    <div style={{ width: "100vw", height: "60vh", position: "relative", background: "#000" }}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((src) => (
          <SwiperSlide key={src}>
            <div style={{ position: "relative", width: "100vw", height: "60vh" }}>
              <Image
                src={src}
                alt="Slider image"
                fill
                priority
                style={{ objectFit: "contain" }} // shows entire image, no crop
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
