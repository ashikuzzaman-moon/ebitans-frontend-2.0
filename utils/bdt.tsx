'use client';

import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const BDT = ({ price }: any) => {
    const home = useSelector((state: RootState) => state.home); // Access updated Redux state
    const { currency } = home?.header || {};

    return (
        <>
            {currency? currency?.code : 'BDT' } {price}
        </>
    );
};

export default BDT;
