import React from 'react';
import CopyrightAll from './components/copyrightall';
import WhatsApp from './components/whatsApp';

const FooterTwentySeven = ({ headersetting }: any) => {
    return (
        <div className="pb-24 lg:pb-5 pt-5 text-center bg-[#131522]">
            <div className="sm:container px-5 text-[13px] font-light text-[#fff]">
                <CopyrightAll headersetting={headersetting} />
            </div>
            {/* <Messenger /> */}
            <WhatsApp headersetting={headersetting} />
        </div>
    );
};

export default FooterTwentySeven;
