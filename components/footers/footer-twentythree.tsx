"use client";
import { imgUrl } from "@/site-settings/siteUrl";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram, GrYoutube } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import CategoryList from "./components/category-list";
import MenuList from "./components/menu-list";
import MyAccount from "./components/myaccount";
import Newsletter from "./components/newsletter";
import WhatsApp from "./components/whatsApp";

const FooterTwentyThree = ({
  headersetting,
  store_id,
  page,
  menu,
  category,
}: any) => {
  const [heading, setHeading] = useState("");
  const date = new Date().getFullYear();

  const cls = "text-gray-400 capitalize hover:text-white";

  return (
    <div className="bg-gray-800 pt-10 pb-24 lg:pb-3">
      <div className="sm:container px-5 pb-10">
        <Newsletter headersetting={headersetting} store_id={store_id} />
        {/* footer top section  */}
        <div className="grid lg2:grid-cols-5 md:grid-cols-3 grid-cols-1 sm:gap-y-10 gap-y-2  text-white ">
          <div className="flex flex-col gap-5 lg2:col-span-2 md:col-span-2 col-span-1 mb-5 sm:mb-0">
            <div>
              <h1 className="text-xl uppercase font-bold">ABOUT US</h1>
              <p className="text-base pt-5 text-gray-400">
                {headersetting?.short_description}
              </p>
            </div>
            <div className="flex gap-x-4 ">
              {headersetting?.facebook_link && (
                <a
                  href={headersetting?.facebook_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-10 w-10 rounded-full border border-transparent hover:border-black duration-300 text-black hover:text-[#f1593a] bg-white flex justify-center items-center">
                    <FaFacebook className="text-lg " />
                  </div>
                </a>
              )}

              {headersetting?.whatsapp_phone && (
                <a
                  href={
                    "https://api.whatsapp.com/send?phone=" +
                    headersetting?.whatsapp_phone
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-10 w-10 rounded-full border border-transparent duration-300 hover:border-black text-black hover:text-[#f1593a] bg-white flex justify-center items-center">
                    <IoLogoWhatsapp className="text-lg " />
                  </div>
                </a>
              )}

              {headersetting?.instagram_link && (
                <a
                  href={headersetting?.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-10 w-10 rounded-full border border-transparent duration-300 hover:border-black text-black hover:text-[#f1593a] bg-white flex justify-center items-center">
                    <GrInstagram className="text-lg " />
                  </div>
                </a>
              )}

              {headersetting?.youtube_link && (
                <a
                  href={headersetting?.youtube_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-10 w-10 rounded-full border border-transparent duration-300 hover:border-black text-black hover:text-[#f1593a] bg-white flex justify-center items-center">
                    <GrYoutube className="text-lg " />
                  </div>
                </a>
              )}
              {headersetting?.lined_in_link && (
                <a
                  href={headersetting?.lined_in_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-10 w-10 rounded-full border border-transparent duration-300 hover:border-black text-black hover:text-[#f1593a] bg-white flex justify-center items-center">
                    <AiFillLinkedin className="text-lg " />
                  </div>
                </a>
              )}
            </div>
          </div>

          <div className="lg2:justify-self-center md:block hidden">
            <h1 className="sm:text-xl uppercase font-bold pb-5">MY ACCOUNT</h1>
            <MyAccount cls={cls} />
          </div>

          <div className="lg2:justify-self-center md:col-span-2 lg2:col-span-1 md:block hidden">
            <div>
              <h1 className="sm:text-xl uppercase font-bold pb-5">MENU</h1>
              <MenuList cls={cls} page={page} menu={menu} />
            </div>
          </div>

          <div className="lg2:justify-self-center md:block hidden">
            <h1 className="sm:text-xl uppercase font-bold pb-5">CATEGORY</h1>
            <CategoryList cls={cls} category={category} />
          </div>

          {/* responsive for small device  */}
          <div className="lg2:justify-self-center md:hidden block">
            <div
              onClick={() => setHeading(heading !== "account" ? "account" : "")}
              className="flex justify-between items-center"
            >
              <h1 className="sm:text-xl uppercase font-bold">MY ACCOUNT</h1>
              {heading === "account" ? (
                <MinusIcon className="h-4 w-4 text-white" />
              ) : (
                <PlusIcon className="h-4 w-4 text-white" />
              )}
            </div>
            {heading === "account" && (
              <div className="flex flex-col gap-2 text-base text-gray-400 mt-1">
                <MyAccount cls={cls} />
              </div>
            )}
          </div>
          <div className="lg2:justify-self-center md:hidden block">
            <div>
              <div
                onClick={() =>
                  setHeading(heading !== "resource" ? "resource" : "")
                }
                className="flex justify-between items-center"
              >
                <h1 className="sm:text-xl uppercase font-bold ">RESOURCES</h1>
                {heading === "resource" ? (
                  <MinusIcon className="h-4 w-4 text-white" />
                ) : (
                  <PlusIcon className="h-4 w-4 text-white" />
                )}
              </div>
              {heading === "resource" && (
                <div className="flex flex-col gap-2 mt-1">
                  <MenuList cls={cls} />
                </div>
              )}
            </div>
          </div>
          <div className="lg2:justify-self-center md:hidden block">
            <div
              onClick={() => setHeading(heading !== "find" ? "find" : "")}
              className="flex justify-between items-center"
            >
              <h1 className="sm:text-xl uppercase font-bold">FIND IT FAST</h1>
              {heading === "find" ? (
                <MinusIcon className="h-4 w-4 text-white" />
              ) : (
                <PlusIcon className="h-4 w-4 text-white" />
              )}
            </div>
            {heading === "find" && (
              <div className="flex flex-col gap-2 text-base text-gray-400 mt-1">
                <CategoryList cls={cls} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-gray-600 h-[1px] w-full"></div>

      {/* bottom section  */}
      <div className="sm:container px-5 pt-5 flex flex-col md:flex-row gap-5 items-center md:justify-between text-white">
        <div>
          {headersetting?.logo === null ? (
            <Link href="/">
              <p className="text-xl uppercase">{headersetting?.website_name}</p>
            </Link>
          ) : (
            <Link href="/">
              <img
                className="h-[45px] w-auto overflow-hidden"
                src={imgUrl + headersetting?.logo}
                alt="logo"
              />
            </Link>
          )}
        </div>
        <div className="text-center">
          <p className="">
            © {date} All Rights Received{" "}
            <Link href="/" className="font-semibold text-red-700 menu-hover">
              {headersetting?.website_name}
            </Link>{" "}
            | Developed by{" "}
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
      {/* <Messenger /> */}
      <WhatsApp headersetting={headersetting}/>
    </div>
  );
};

export default FooterTwentyThree;
