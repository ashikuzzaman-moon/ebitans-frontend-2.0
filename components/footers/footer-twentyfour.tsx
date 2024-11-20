import {
    AiFillLinkedin,
    AiFillYoutube,
    AiOutlineWhatsApp,
} from 'react-icons/ai';

import services1 from '@/assets/img/icons/services1.svg';
import services2 from '@/assets/img/icons/services2.svg';
import services3 from '@/assets/img/icons/services3.svg';
import services4 from '@/assets/img/icons/services4.svg';

import { imgUrl } from '@/site-settings/siteUrl';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';
import CopyrightAll from './components/copyrightall';
import Newsletter from './components/newsletter';
import WhatsApp from './components/whatsApp';

const FooterTwentyFour = ({
    headersetting,
    menu,
    category,
    design,
    store_id,
}: any) => {
    const customDesign = `
    .bg-hover-footer:hover{
        color:${design?.text_color};
        background: ${design?.header_color};
        border: 1px solid ${design?.header_color};
    }
    .footer-icon:hover .footer-icon-hover {
        transform: rotateY(180deg);
    }
    `;

    return (
        <div className="bg-[#e0cdbc] relative lg:mr-10">
            <style>{customDesign}</style>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between justify-items-start sm:container px-5 py-10 pb-14 gap-5 overflow-hidden items-center text-gray-900 text-xl font-medium">
                <div className="flex flex-col gap-5 items-start ">
                    <div>
                        <img src={services1} alt="" className="h-12" />
                    </div>
                    <div>
                        <h1 className="">Fast & Free Delivery</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start ">
                    <div>
                        <img src={services2} alt="" className="h-12" />
                    </div>
                    <div>
                        <h1 className="">Secure Payment</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start ">
                    <div>
                        <img src={services3} alt="" className="h-12" />
                    </div>
                    <div>
                        <h1 className="">Money Back Guarantee</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start ">
                    <div>
                        <img src={services4} alt="" className="h-12" />
                    </div>
                    <div>
                        <h1 className="">Online Support</h1>
                    </div>
                </div>
            </div>

            <div className="mt-10 bg-[#1D2547] w-full pt-20 lg:ml-10">
                <div className="container px-5">
                    <Newsletter
                        headersetting={headersetting}
                        store_id={store_id}
                    />
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 py-6 gap-5 sm:container px-5">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/">
                            <img
                                className="h-14"
                                src={imgUrl + headersetting?.logo}
                                alt=""
                            />
                        </Link>
                        <p className="text-gray-400 text-sm pt-4">
                            {headersetting?.short_description}
                        </p>
                        <div className="flex gap-3 text-gray-500  text-base mt-5 ">
                            {headersetting?.facebook_link && (
                                <div className="border-2 rounded-full p-2">
                                    <a
                                        href={`${headersetting?.facebook_link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {' '}
                                        <FaFacebookF className="text-2xl footerColor  " />
                                    </a>
                                </div>
                            )}
                            {headersetting?.youtube_link && (
                                <div className="border-2 rounded-full p-2">
                                    <a
                                        href={`${headersetting?.youtube_link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {' '}
                                        <AiFillYoutube className="text-2xl footerColor" />
                                    </a>
                                </div>
                            )}
                            {headersetting?.instagram_link && (
                                <div className="border-2 rounded-full p-2">
                                    <a
                                        href={`${headersetting?.instagram_link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {' '}
                                        <RiInstagramLine className="text-2xl footerColor" />
                                    </a>
                                </div>
                            )}
                            {headersetting?.whatsapp_phone && (
                                <div className="border-2 rounded-full p-2">
                                    <a
                                        href={
                                            'https://api.whatsapp.com/send?phone=' +
                                            headersetting?.whatsapp_phone
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {' '}
                                        <AiOutlineWhatsApp className="text-2xl footerColor" />
                                    </a>
                                </div>
                            )}
                            {headersetting?.lined_in_link && (
                                <div className="border-2 rounded-full p-2">
                                    <a
                                        href={headersetting?.instagram_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {' '}
                                        <AiFillLinkedin className="text-2xl footerColor" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 col-span-2 md:col-span-1 lg:justify-self-center">
                        <div>
                            <h1 className="text-lg text-white font-semibold ">
                                Contact Info
                            </h1>
                        </div>
                        <div className="flex flex-col gap-3 text-gray-400 text-sm ">
                            <p className="menu-hover hover:underline">
                                {headersetting?.email}
                            </p>
                            <p className="menu-hover hover:underline">
                                Call Us: {headersetting?.phone}
                            </p>
                            <p className="menu-hover hover:underline">
                                Address: {headersetting?.address}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:justify-self-center">
                        <div>
                            <h1 className="text-lg text-white font-semibold ">
                                Shop Category
                            </h1>
                        </div>
                        <div className="flex flex-col gap-3 text-gray-400 text-sm ">
                            {category?.slice(0, 6).map((item: any) => (
                                <div key={item.id} className="">
                                    <li className="list-none w-max menu-hover hover:underline">
                                        <Link href={'/category/' + item?.id}>
                                            <h1>{item.name}</h1>
                                        </Link>
                                    </li>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:justify-self-end">
                        <div>
                            <h1 className="text-lg text-white font-semibold capitalize">
                                Top Menu
                            </h1>
                        </div>
                        <div className="flex flex-col gap-3 text-gray-400 text-sm ">
                            {menu.slice(0, 6).map((item: any) => (
                                <div key={item.id} className="">
                                    <li className="list-none w-max menu-hover hover:underline">
                                        <Link href={item.url}>
                                            <h1>{item.name}</h1>
                                        </Link>
                                    </li>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col md:justify-center items-center sm:container px-5 pt-10 pb-20 ">
                    <div>
                        <div className="text-base font-light text-gray-400">
                            <CopyrightAll headersetting={headersetting} />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/* <Messenger /> */}
            <WhatsApp headersetting={headersetting} />
        </div>
    );
};

export default FooterTwentyFour;
