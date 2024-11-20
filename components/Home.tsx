'use client';

import dynamic from 'next/dynamic';

import { RootState } from '@/redux/store';
import { useGetLayoutQuery } from '@/redux/home/homeApi';

import HomeSkeleton from '@/components/loader/homeSkeleton';
const RenderSection = dynamic(
    () => import('@/components/_homepage/render-section')
);

const HomePage = () => {
    const {
        data: layoutData,
        isLoading,
        isError,
        isSuccess,
    } = useGetLayoutQuery({});
    const layout = layoutData?.data || [];

    if (isError) {
        return null;
    }

    if (isLoading && !isError) {
        return <HomeSkeleton text={'Loading layout...'} />;
    }

    let content = (
        <>
            {layout &&
                layout?.length > 0 &&
                layout?.map((item: any, index: number) => (
                    <RenderSection key={index} component={item} />
                ))}
        </>
    );

    if (!isLoading && isSuccess) {
        return content;
    }
};

export default HomePage;
