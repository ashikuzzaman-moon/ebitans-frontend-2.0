'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { useSelector } from 'react-redux';
import BlogSection from './blog/blog-section';

const Hero = dynamic(() => import('@/components/Hero'));
const Promo = dynamic(() => import('@/components/Promo'));
const PromoBottom = dynamic(() => import('@/components/PromoBottom'));
const NewArrival = dynamic(() => import('@/components/NewArrival'));
const BestSellProduct = dynamic(() => import('@/components/BestSellProduct'));
const FeatureProduct = dynamic(() => import('@/components/FeatureProduct'));
const Product = dynamic(() => import('@/components/Product'));
const FeaturedCategory = dynamic(() => import('@/components/FeaturedCategory'));
const Testimonial = dynamic(() => import('@/components/Testimonial'));

type ComponentType =
    | 'header'
    | 'hero_slider'
    | 'feature_category'
    | 'banner'
    | 'banner_bottom'
    | 'product'
    | 'new_arrival'
    | 'best_sell_product'
    | 'feature_product'
    | 'testimonial'
    | 'footer';

// data: {
//   headersetting?: any;
//   slider?: any;
//   category?: any;
//   banner?: any;
//   product?: any;
//   best_sell_product?: any;
//   feature_product?: any;
//   testimonials?: any;
//   design?: any;
//   store_id?: any;
//   brand?: any;
// };

interface RenderSectionProps {
    component: ComponentType;
}

const RenderSection = ({ component }: RenderSectionProps) => {
    const home = useSelector((state: any) => state?.home);
    const { design } = home || {};

    const storeData = useSelector((state: any) => state.appStore.store); // Access updated Redux state
    const store_id = storeData?.id || null;

    switch (component) {
        // Hero section
        case 'hero_slider':
            return <Hero design={design} />;
        // FeaturedCategory section
        case 'feature_category':
            return <FeaturedCategory design={design} store_id={store_id} />;
        // Promo section
        case 'banner':
            return <Promo design={design} store_id={store_id} />;
        // PromoBottom section
        case 'banner_bottom':
            return <PromoBottom design={design} />;
        // Product section
        case 'product':
            return <Product design={design} store_id={store_id} />;
        // NewArrival section
        case 'new_arrival':
            return <NewArrival design={design} store_id={store_id} />;
        // BestSellerProduct section
        case 'best_sell_product':
            return <BestSellProduct design={design} store_id={store_id} />;
        /// FeatureProduct section
        case 'feature_product':
            return <FeatureProduct design={design} store_id={store_id} />;
        // Testimonial section
        case 'testimonial':
            return (
                <>
                    <Suspense fallback={<p>Loading blog...</p>}>
                        <BlogSection />
                    </Suspense>
                    <Testimonial design={design} />
                </>
            );
        default:
            return null;
    }
};

RenderSection.displayName = 'RenderSection';
export default RenderSection;
