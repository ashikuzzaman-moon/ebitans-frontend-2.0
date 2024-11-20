'use client';
import SectionHeadingSeven from '@/components/section-heading/section-heading-seven';
import DefaultSlider from '@/components/slider/default-slider';
import { iconImg } from '@/site-settings/siteUrl';
import Arrow from '@/utils/arrow';
import useHeaderSettings from '@/utils/query/use-header-settings';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

const FeaturedEight = ({ category, design }: any) => {
    const prev1 = 'shop_best_seller_Prev1';
    const next1 = 'shop_best_seller_Next1';
    const customCss = `
    .hoverBorder:hover{
        border:1px solid ${design?.header_color}
    }
    `;
    const { data, error } = useHeaderSettings();
    if (error) return <p>error from header-settings</p>;
    const cDesign = data?.data?.custom_design || {};
    const featureCategory = cDesign?.feature_category?.[0] || {};
    const { title, title_color } = featureCategory;

    return (
        <div className="sm:container px-5 sm:py-10 py-5">
            <style>{customCss}</style>
            <div className="h-[40px]">
                <SectionHeadingSeven
                    titleColor={title_color}
                    title={title || 'Shop by Categories '}
                    subtitle={''}
                />
            </div>
            <div className=" pb-4 pt-4 h-[50px]">
                <Arrow prevEl={prev1} nextEl={next1}></Arrow>
            </div>
            <div>
                <DefaultSlider
                    prevEl={prev1}
                    nextEl={next1}
                    breakpoints={{
                        350: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 8,
                            spaceBetween: 40,
                        },
                        1920: {
                            slidesPerView: 10,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {category?.map((item: any) => (
                        <SwiperSlide key={item?.id} className="mt-3">
                            <Link href={'/category/' + item?.id}>
                                <div className="group bg-gray-200 hover:bg-white  rounded-lg  hoverBorder border min-h-[170px] text-center">
                                    <div className="group:hover:drop-shadow-xl ">
                                        <div className="rounded-lg">
                                            <div className="p-2">
                                                <div className="flex justify-center h-28">
                                                    <img
                                                        className="w-16 h-16 my-auto"
                                                        src={
                                                            iconImg + item?.icon
                                                        }
                                                        alt="Mountain"
                                                    />
                                                </div>
                                                <div className="flex justify-center mt-3">
                                                    <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[100px]">
                                                        {item?.name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </DefaultSlider>
            </div>
        </div>
    );
};

export default FeaturedEight;
