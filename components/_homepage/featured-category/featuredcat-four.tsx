'use client';
import SectionHeading from '@/components/section-heading/section-heading';
import { iconImg } from '@/site-settings/siteUrl';
import useHeaderSettings from '@/utils/query/use-header-settings';
import Link from 'next/link';

const FeaturedFour = ({ category, design }: any) => {
    const { data, error } = useHeaderSettings();
    if (error) return <p>error from header-settings</p>;
    const cDesign = data?.data?.custom_design || {};
    const featureCategory = cDesign?.feature_category?.[0] || {};
    const { title, title_color } = featureCategory;

    if (category.length === 0) {
        return;
    }

    return (
        <div className="sm:container px-5 sm:py-10 py-5 bg-gray-50">
            <div className="">
                <SectionHeading
                    text={title || 'Featured Categories'}
                    design={design}
                    title_color={title_color}
                />
            </div>
            <div className="flex justify-center shadow-lg bg-white mt-4">
                <div className="flex  flex-wrap justify-center my-4  py-10 rounded-md  ">
                    {category?.slice(0, 4).map((c: any, id: any) => (
                        <Link
                            href={`/category/${c.id}`}
                            key={c.id}
                            className="flex items-center justify-between rounded-md border border-gray-300 p-3 my-2 mx-2 w-[280px]"
                        >
                            <span className="text-base font-semibold">
                                {c.name}
                            </span>
                            <img
                                src={iconImg + c.icon}
                                width={'40'}
                                height={'40'}
                                alt=""
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedFour;
