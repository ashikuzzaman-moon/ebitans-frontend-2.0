"use client";

import { BsArrowRight } from "react-icons/bs";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { sliderImg } from "@/site-settings/siteUrl";
import "./hero-seven.css";

const HeroSeven = ({ slider, design }: any) => {
  let menu = [""];
  let isLoop = slider.length > 1

  const bgColor = design?.header_color;
  const textColor = design?.text_color;

  const pagination = {
    el: ".swiper-pagination-seven",
    clickable: true,
    bulletElement: `swiper-pagination-bullet`,

    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + menu + "</span>";
    },
  };

  const styleCss = `
      .swiper-pagination-seven .swiper-pagination-bullet {
        background:  ${textColor};
    }
    .swiper-pagination-seven .swiper-pagination-bullet-active {
        background: ${bgColor};

    }
      `;

  return (
    <div className="group z-0 mt-3 relative sm:container px-5 bg-white w-full">
      <style>{styleCss}</style>
      <div>
        <div className="swiper-pagination-seven hidden sm:block"></div>
      </div>
      <Swiper
        loop={isLoop}
        spaceBetween={30}
        pagination={pagination}
        autoplay={{
          delay: 5000,
        }}
        modules={[Pagination, Autoplay, Navigation, Controller]}
        className={`mySwiper renderBullet relative rounded-lg`}
      >
        {slider?.map((s: any,index:number) => (
          <SwiperSlide key={index}>
            <div className="absolute top-1/2 -translate-y-1/2 left-5 sm:left-[10%] max-w-[50%] xl:max-w-[40%]">
              <div style={{ color: s?.color }} className="">
                <h1 className="xl:text-4xl md:text-[24px] text-[14px] font-seven mb-1 md:mb-3 font-bold">
                  {s?.title}
                </h1>
                <p className="md:text-base text-xs font-seven">{s?.subtitle}</p>
              </div>
              {s?.link && (
                <a href={s?.link} target="_blank" rel="noopener noreferrer">
                  <h1 className="md:mt-10 mt-3 lg:px-5 px-2 lg:py-2 py-1 bg-black text-white font-seven lg:text-lg text-xs rounded-md w-max">
                    Go To Collection
                    <BsArrowRight className="inline lg:ml-3 ml-1 lg:text-2xl text-sm " />
                  </h1>
                </a>
              )}
            </div>

            <img
              className="rounded-lg h-auto min-w-full"
              src={sliderImg + s.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSeven;
