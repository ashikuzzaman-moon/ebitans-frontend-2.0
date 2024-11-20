import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import {
    AiFillLinkedin,
    AiFillYoutube,
    AiOutlineWhatsApp,
} from 'react-icons/ai';
import { RiInstagramLine } from 'react-icons/ri';
import Newsletter from './components/newsletter';
import { imgUrl } from '@/site-settings/siteUrl';
import {
    DevicePhoneMobileIcon,
    InboxIcon,
    MapPinIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import WhatsApp from './components/whatsApp';

const FooterEight = ({
    headersetting,
    menu,
    category,
    page,
    store_id,
}: any) => {
    const date = new Date().getFullYear();
    const result = page.filter(
        (item: any) => !menu.find((menuItem: any) => menuItem.url === item.link)
    );

    return (
        <div className="py-5 ">
            <div className="sm:container px-5">
                <Newsletter headersetting={headersetting} store_id={store_id} />
            </div>
            <div className="sm:container px-5 grid lg:grid-cols-4 grid-cols-2 space-y-8 ">
                <div className="col-span-1">
                    <img
                        className="w-auto h-20  sm:h-10"
                        src={imgUrl + headersetting?.logo}
                        alt=""
                    />
                    <p className="py-5 text-base font-light">
                        {headersetting?.short_description}
                    </p>

                    <div className="flex gap-2">
                        <MapPinIcon width={20} height={20} />
                        <p className="text-sm ">
                            Address : {headersetting?.address}
                        </p>
                    </div>
                    <br />
                    <div className="flex gap-2">
                        <DevicePhoneMobileIcon width={20} height={20} />
                        <p className="text-sm ">
                            Phone : {headersetting?.phone}
                        </p>
                    </div>
                    <br />
                    <div className="flex gap-2">
                        <InboxIcon width={20} height={20} />
                        <p className="text-sm ">
                            Email : {headersetting?.email}
                        </p>
                    </div>
                </div>
                <div className="col-span-1 justify-self-start lg:justify-self-center  ml-10 lg:ml-0">
                    <h2 className="font-bold">Category</h2>

                    <ul className="flex flex-col gap-2 mt-3">
                        {category?.slice(0, 6).map((item: any) => (
                            <Link key={item.id} href={'/category/' + item?.id}>
                                <li>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="col-span-1 lg:justify-self-center">
                    <h2 className="font-bold">Top Menu</h2>
                    <ul className="flex flex-col gap-2 mt-3">
                        {menu?.map((m: any) =>
                            m?.name !== 'Category' ? (
                                <p key={m?.id}>
                                    <Link href={m?.url} className="menu-hover">
                                        {' '}
                                        {m?.name}
                                    </Link>
                                </p>
                            ) : null
                        )}
                        {result?.map((m: any) => (
                            <p key={m?.id}>
                                <Link
                                    href={'/' + m?.link}
                                    className="menu-hover"
                                >
                                    {' '}
                                    {m?.name}
                                </Link>
                            </p>
                        ))}
                    </ul>
                </div>

                <div className="col-span-1 justify-self-start lg:justify-self-center ml-10 lg:ml-0">
                    <h2 className="font-bold">Your Account</h2>

                    <ul className="flex flex-col gap-2 mt-3">
                        <Link href="/login">
                            <li> Sign In</li>
                        </Link>
                        <Link href="/sign-up">
                            <li> Sign Up</li>
                        </Link>
                        <Link href="/profile">
                            <li>Profile</li>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className="sm:container px-5 pt-10 pb-4">
                <div className="flex flex-wrap items-center  justify-center md:justify-start gap-10">
                    <div className="flex gap-4 items-center">
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
                    <div className="">
                        <p className="">
                            © {date} All Rights Received{' '}
                            <Link
                                href="/"
                                className="font-semibold text-red-700 menu-hover"
                            >
                                {headersetting?.website_name}
                            </Link>{' '}
                            | Developed by{' '}
                            <a
                                href="https://ebitans.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-red-700 menu-hover"
                            >
                                eBitans
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            {/* <Messenger /> */}
            <WhatsApp headersetting={headersetting} />
        </div>
    );
};

export default FooterEight;
