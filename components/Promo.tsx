import { DEFAULT } from '../consts';

import { banners } from '@/utils/dynamic-import/banner/banner';

import { useGetBannerQuery } from '@/redux/home/homeApi';

const Promo = ({ design, store_id }: any) => {
    const BannerComponent = banners[design?.banner] || banners[DEFAULT];

    const {
        data: bannerData,
        isLoading: bannerLoading,
        isSuccess: bannerSuccess,
    } = useGetBannerQuery({});
    const banner = bannerData?.data || [];

    return (
        <>
            {BannerComponent ? (
                <BannerComponent
                    banner={banner}
                    design={design}
                    store_id={store_id}
                />
            ) : (
                <p>Banner not found</p>
            )}
        </>
    );
};

export default Promo;
