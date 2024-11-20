'use client';

import { DEFAULT } from '@/consts';
import { headers } from '@/utils/dynamic-import/header/header';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

const Header = ({ design }: any) => {
    const HeaderComponent = headers[design?.header];
    const HeaderDefault = headers[DEFAULT];

    const authStore = useSelector((state: any) => state?.auth);
    const cartStore = useSelector((state: any) => state?.cart);
    const home = useSelector((state: any) => state?.home);

    const menu = home?.menu || {};
    const headersetting = home?.header || {};

    const user = authStore?.user || {};
    const cartList = cartStore?.cartList || {};

    return (
        <>
            {/* <Suspense
                fallback={
                    <div className="mb-5 px-5 pt-5">
                        <div className="animate-pulse w-full bg-gray-300 h-20 rounded-lg flex justify-center items-center"></div>
                    </div>
                }
            >
            </Suspense> */}
            {design?.header && HeaderComponent ? (
                <HeaderComponent
                    design={design}
                    headersetting={headersetting}
                    menu={menu}
                    user={user}
                    cartList={cartList}
                />
            ) : null}
        </>
    );
};

export default Header;
