import { DEFAULT } from '@/consts';
import { useGetSliderQuery } from '@/redux/home/homeApi';
import { banner_bottoms } from '@/utils/dynamic-import/BannerBottom/BannerBottom';
import { useSelector } from 'react-redux';

const PromoBottom = ({ design }: any) => {
    const BannerBottomComponent =
        banner_bottoms[design?.banner] || banner_bottoms[DEFAULT];

    const home = useSelector((state: any) => state?.home);
    const banner = home?.banner || {};

    const {
        data: brandData,
        isLoading: brandLoading,
        isSuccess: brandSuccess,
    } = useGetSliderQuery({});
    const brand = brandData?.data || [];

    return (
        <>
            {BannerBottomComponent ? (
                <BannerBottomComponent
                    design={design}
                    banner={banner}
                    brand={brand}
                />
            ) : (
                <p>Header not found</p>
            )}
        </>
    );

    // <PromoBottomDefault banner={banner} />;
};

export default PromoBottom;
