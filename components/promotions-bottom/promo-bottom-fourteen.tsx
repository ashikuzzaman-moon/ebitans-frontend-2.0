import { bannerImg } from '@/site-settings/siteUrl';

const PromoBottomFourteen = ({ banner }: any) => {
    return (
        <>
            {banner[5] && (
                <div className="sm:container px-5 sm:py-10 py-5">
                    <div className="relative group">
                        <img
                            src={bannerImg + banner[5]?.image}
                            alt=""
                            className="min-w-full object-cover h-auto object-center rounded-md"
                        />
                        {banner[5]?.link && (
                            <a
                                href={banner[5]?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute z-[1] left-1/2 -translate-x-1/2 bottom-[10%] font-bold bg-black text-white px-10 py-2 text-sm rounded-sm border-2 duration-500 border-black hover:bg-white hover:text-black w-max"
                            >
                                Go To Collection
                            </a>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default PromoBottomFourteen;
