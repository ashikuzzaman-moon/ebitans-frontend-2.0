"use client";
import { SwiperSlide } from "swiper/react";

import hot from "@/assets/bg-image/hot-deal-logo.gif";
import Card58 from "@/components/card/card58";
import DefaultSlider from "@/components/slider/default-slider";
import useHeaderSettings from "@/utils/query/use-header-settings";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const FeatureProductTwentyEight = ({
  feature_product,
  design,
  store_id,
}: any) => {
  const prevEl = "new-product-prev";
  const nextEl = "new-product-next";

  const styleCss = `
   
    .new-product-prev {
        color:  ${design?.header_color};
        border: 1px solid ${design?.header_color};
    }
      .new-product-next{
          color:  ${design?.header_color};
          border: 1px solid ${design?.header_color};
    }
      .new-product-prev:hover {
        color:  ${design?.text_color};
        background: ${design?.header_color};
    }
      .new-product-next:hover {
        color:  ${design?.text_color};
        background: ${design?.header_color};
    }
    .arrow-hov:hover .arrow {
      opacity:1;
      background: white;
    }
 `;

  const { data, error } = useHeaderSettings();
  if (error) return <p>error from header-settings</p>;
  const cDesign = data?.data?.custom_design || {};
  const featuredProduct = cDesign?.feature_product?.[0] || {};
  const { title = "Default Title", title_color = "#000" } = featuredProduct;

  if (!featuredProduct || featuredProduct.length === 0) {
    return null;
  }

  return (
    <div className="sm:py-10 py-5">
      <style>{styleCss}</style>
      <div className="sm:container py-5 px-5 relative arrow-hov bg-[#FFEFCF]">
        <div className="mb-5 flex justify-between items-center">
          <img src={hot.src} alt="" className="h-10" />
          <Link href="/shop">
            <p
              style={{ color: title_color }}
              className="text-xl text-orange-600 cursor-pointer flex items-center"
            >
              {title}
              <IoIosArrowForward className="inline" />
            </p>
          </Link>
        </div>

        <DefaultSlider
          prevEl={prevEl}
          nextEl={nextEl}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {feature_product?.slice(0, 10).map((item: any) => (
            <SwiperSlide key={item?.id}>
              <Card58 item={item} design={design} store_id={store_id} />
            </SwiperSlide>
          ))}
        </DefaultSlider>
      </div>
    </div>
  );
};

export default FeatureProductTwentyEight;
