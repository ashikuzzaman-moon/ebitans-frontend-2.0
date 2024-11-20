'use client';

import { testimonialImg } from '@/site-settings/siteUrl';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialFive = ({ testimonials }: any) => {
    // const settings = {
    //   dots: true,
    //   infinite: false,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   pauseOnHover: true,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true,
    //       },
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //       },
    //     },
    //   ],
    //   // nextArrow: <Next/>,
    //   // prevArrow: <Previous />,
    // };

    return (
        <div className="sm:container px-5 sm:py-10 py-5">
            <div className="relative">
                <div className="flex items-center justify-between h-full w-full absolute z-0">
                    <div className="w-1/3 bg-white h-full" />
                    <div className="w-4/6 ml-16 bg-gray-100 h-full" />
                </div>

                <div className="relative z-[1]">
                    <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800 mb-6">
                        What our customers are
                        <br />
                        saying
                    </h1>
                    <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800 mb-6">
                        What our customers are saying
                    </h1>
                    <Swiper
                        loop={true}
                        spaceBetween={30}
                        //   slideActiveclassName="slide-active"
                        //   pagination={pagination}
                        autoplay={{
                            delay: 5000,
                        }}
                        // width={100}
                        // height={600}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                // spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                // spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 1,
                                // spaceBetween: 20,
                            },
                            1700: {
                                slidesPerView: 1,
                                // spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper slide-active"
                    >
                        {testimonials?.map((review: any) => (
                            <SwiperSlide key={review.id}>
                                <div className="flex">
                                    <div className="mt-14 md:flex w-full">
                                        <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                            <img
                                                src={
                                                    testimonialImg +
                                                    review?.image
                                                }
                                                alt=""
                                                className="min-w-full h-full object-fit object-cover shadow-lg rounded"
                                            />
                                            <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                                <img
                                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                                                    alt="commas"
                                                />
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    {review.feedback}
                                                </p>
                                            </div>
                                            <div className="md:mt-0 mt-8">
                                                <p className="text-base font-medium leading-4 text-gray-800">
                                                    {review.name}
                                                </p>
                                                <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                                                    {review.occupation}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TestimonialFive;
