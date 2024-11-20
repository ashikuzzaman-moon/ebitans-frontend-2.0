'use client';

import {
    useGetDesignQuery,
    useGetHeaderSettingsQuery,
    useGetMenuQuery,
} from '@/redux/home/homeApi';
import { useGetFeatureProductQuery } from '@/redux/products/productApi';

import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const Header = dynamic(() => import('@/components/Header'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useGetDesignQuery({});
    useGetHeaderSettingsQuery({});
    useGetMenuQuery({});
    // need to remove if ---
    // useGetFeatureProductQuery({})

    const home = useSelector((state: any) => state?.home);
    const { design } = home || {};

    return (
        <>
            <Header design={design} />
            {children}
            <Footer design={design} />
        </>
    );
}
