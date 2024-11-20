'use client';

import { DEFAULT } from '../consts';
import { footers } from '@/utils/dynamic-import/footer/footer';

import { useSelector } from 'react-redux';
import { useGetPageQuery } from '@/redux/page/pageApi';

const Footer = ({ design }: any) => {
    const FooterComponent = footers[design?.footer];
    const FooterDefault = footers[DEFAULT];

    const { data: pageData } = useGetPageQuery({});
    const page = pageData?.data || [];

    const categoryStore = useSelector((state: any) => state?.category);
    const category = categoryStore?.categories || [];

    const home = useSelector((state: any) => state?.home);
    const headersetting = home?.header || {};
    const menu = home?.menu || {};

    const storeData = useSelector((state: any) => state.appStore.store); // Access updated Redux state
    const store_id = storeData?.id || null;

    return (
        <>
            {FooterComponent ? (
                <FooterComponent
                    design={design}
                    category={category}
                    headersetting={headersetting}
                    store_id={store_id}
                    menu={menu}
                    page={page}
                />
            ) : null}
        </>
    );
};

export default Footer;

// <div className='mt-5 px-5 pb-5'>
//     <div className="animate-pulse w-full bg-gray-300 h-28 rounded-lg flex justify-center items-center"></div>
// </div>
