"use client";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";

import SectionHeadingTwelve from "@/components/section-heading/section-heading-twelve";
import SliderFive from "@/components/slider/slider-five";
import { iconImg } from "@/site-settings/siteUrl";
import useHeaderSettings from "@/utils/query/use-header-settings";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const FeaturedTwelve = ({ category, design }: any) => {
  const prevEl = "feature-category-prev";
  const nextEl = "feature-category-next";

  const styleCss = `
    .feature-category-prev:hover {
      color:  ${design?.text_color};
      background: ${design?.header_color};
  }
    .feature-category-next:hover {
      color:  ${design?.text_color};
      background: ${design?.header_color};
  }
 
    `;

  const { data, error } = useHeaderSettings();
  if (error) return <p>error from header-settings</p>;
  const cDesign = data?.data?.custom_design || {};
  const featureCategory = cDesign?.feature_category?.[0] || {};
  const { title, title_color } = featureCategory;

  return (
    <div className="sm:container px-5 sm:py-10 py-5 bg-white relative group ">
      <style>{styleCss}</style>
      <SectionHeadingTwelve
        title_color={title_color}
        title={title || "Feature Categories"}
      />
      <div className="relative">
        <div className=" gap-2 lg:cursor-pointer group-hover:block hidden">
          <div
            className={`${prevEl} bg-gray-400 text-white  rounded-full transition-all duration-500  ease-linear absolute -left-4  top-28 z-10 `}
          >
            <ChevronLeftIcon className="h-8 text-2xl font-serif font-bold" />
          </div>
          <div
            className={`${nextEl} bg-gray-400 text-white rounded-full transition-all duration-500  ease-linear absolute -right-4 top-28 z-10 `}
          >
            <ChevronRightIcon className="h-8 text-2xl font-serif font-bold" />
          </div>
        </div>
      </div>

      <SliderFive prevEl={prevEl} nextEl={nextEl}>
        {category?.map((productData: any) => (
          <SwiperSlide key={productData.id}>
            <Card item={productData} />
          </SwiperSlide>
        ))}
      </SliderFive>
    </div>
  );
};

export default FeaturedTwelve;

const Card = ({ item }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 overflow-hidden h-60  ml-6">
        <div className="" onClick={() => setOpen(!open)}>
          <img
            src={iconImg + item.icon}
            alt="Mountain"
            className="h-28 w-28 hover:scale-105 duration-500"
          />
        </div>

        <div className="text-center font-twelve">
          <p className="uppercase text-sm font-semibold text-gray-800 mb-4">
            {" "}
            {item.name}
          </p>
          <Link href={"/category/" + item.id}>
            <p className="text-[12px] text-blue-400">VIEW ALL</p>
          </Link>
        </div>
      </div>
    </>
  );
};
