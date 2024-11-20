'use client';
import { useRouter } from 'next/navigation';
import {
    A11y,
    Autoplay,
    Controller,
    EffectFade,
    Grid,
    Navigation,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import SectionHeadingSeventeen from '@/components/section-heading/section-heading-seventeen';
import { iconImg } from '@/site-settings/siteUrl';
import useHeaderSettings from '@/utils/query/use-header-settings';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturedEleven = ({ category, design, store_id }: any) => {
    const navigationPrevRef = useRef<any>(null);
    const navigationNextRef = useRef<any>(null);
    const router = useRouter();
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
        <div className="sm:container px-5 sm:py-10 py-5 group">
            <style>{customCss}</style>
            <div className="flex justify-between items-center">
                <div>
                    <SectionHeadingSeventeen
                        title_color={title_color}
                        title={title || 'Shop by Categories'}
                        subtitle={''}
                    />
                </div>
                <div className="lg:cursor-pointer flex items-center gap-3">
                    <div
                        ref={navigationPrevRef}
                        className={`h-8 w-8 rounded-full flex justify-center items-center bg-white transition-all duration-500 ease-linear z-[5] `}
                    >
                        <ChevronLeftIcon className="h-6 text-2xl font-serif font-bold" />
                    </div>
                    <div
                        ref={navigationNextRef}
                        className={`bg-white h-8 w-8 flex justify-center items-center rounded-full transition-all duration-500 ease-linear z-[5] `}
                    >
                        <ChevronRightIcon className="h-6 text-2xl font-serif font-bold" />
                    </div>
                </div>
            </div>
            <Swiper
                autoplay={{ delay: 2500 }}
                speed={1000}
                // loop={true}
                modules={[Autoplay, EffectFade, Navigation, Controller]}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onSwiper={(swiper) => {
                    // Delay execution for the refs to be defined
                    setTimeout(() => {
                        // Override prevEl & nextEl now that refs are defined
                        if (
                            swiper?.params?.navigation &&
                            typeof swiper?.params?.navigation !== 'boolean'
                        ) {
                            swiper.params.navigation.prevEl =
                                navigationPrevRef.current;
                            swiper.params.navigation.nextEl =
                                navigationNextRef.current;
                        }
                        // swiper.params.navigation.prevEl = navigationPrevRef?.current;
                        // swiper.params.navigation.nextEl = navigationNextRef.current;
                        // Re-init navigation
                        swiper.navigation?.destroy();
                        swiper.navigation?.init();
                        swiper.navigation?.update();
                    });
                }}
                className="hidden sm:block"
                breakpoints={{
                    350: {
                        slidesPerView: 4,
                        spaceBetween: 3,
                    },
                    480: {
                        slidesPerView: 4,
                        spaceBetween: 3,
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
                    <SwiperSlide key={item?.id} className="">
                        <Link href={'/category/' + item?.id}>
                            <div
                                className={`group ${
                                    store_id === 2109
                                        ? 'bg-[#d5b5f8]'
                                        : 'bg-gray-200'
                                }  hover:bg-white hover:drop-shadow-xl rounded-lg hoverBorder border text-center`}
                            >
                                <div className="p-2">
                                    <div className="flex justify-center p-1">
                                        <img
                                            className="w-16 h-auto"
                                            src={iconImg + item?.icon}
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
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedEleven;
