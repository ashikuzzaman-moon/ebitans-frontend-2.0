import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import Newsletter from "./components/newsletter";
import Link from "next/link";
import { imgUrl } from "@/site-settings/siteUrl";
import WhatsApp from "./components/whatsApp";

const FooterFour = ({ menu, headersetting, page, store_id }: any) => {
  const result = page.filter(
    (item: any) => !menu.find((menuItem: any) => menuItem.url === item.link)
  );

  return (
    <footer
      style={{ backgroundColor: "black" }}
      className="text-gray-500 body-font mb-12 lg:mb-0"
    >
      <div className="sm:container px-5 sm:py-10 py-5">
        <Newsletter headersetting={headersetting} store_id={store_id} />
        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-3 md:text-left text-center">
          <div className="sm:col-span-2 md:col-span-1 px-2 pb-4 flex sm:justify-center">
            <div className="flex flex-col sm:items-center space-y-4">
              {headersetting?.logo && (
                <Link href="/">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={imgUrl + headersetting?.logo}
                    alt=""
                  />
                </Link>
              )}
              {headersetting?.short_description && (
                <div className=" text-left sm:text-justify text-sm">
                  <p>{headersetting?.short_description}</p>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-1 px-2 flex sm:justify-center">
            <div className="flex flex-col">
              <h2
                className="title-font font-bold tracking-widest text-left text-lg mb-3  border-b-2 min-w-[200px]"
                style={{ color: "#fff", borderBottomColor: "#fff" }}
              >
                Pages
              </h2>
              <nav className="list-none text-sm text-left mb-10">
                {menu?.map((m: any) =>
                  m?.name !== "Category" ? (
                    <li key={m?.id}>
                      <Link
                        href={m?.url}
                        className="text-gray-500 hover:text-white"
                      >
                        {" "}
                        {m?.name}
                      </Link>
                    </li>
                  ) : null
                )}
                {result?.map((m: any) => (
                  <li key={m?.id}>
                    <Link
                      href={"/" + m?.link}
                      className="text-gray-500 hover:text-white"
                    >
                      {" "}
                      {m?.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          </div>

          <div className="col-span-1 px-2 flex sm:justify-center">
            <div className="flex flex-col">
              <h2
                className="title-font font-bold tracking-widest text-left text-lg mb-3 border-b-2 min-w-[200px"
                style={{ color: "#fff", borderBottomColor: "#fff" }}
              >
                Contact
              </h2>
              <nav className="list-none text-sm mb-10 text-left space-y-3">
                {headersetting?.phone && (
                  <li className="flex justify-start items-center gap-x-4 text-sm leading-6">
                    <div className="rounded-full border border-gray-700 p-1">
                      <IoCallOutline className="text-sm" />
                    </div>
                    <p className="text-gray-500 hover:text-white">
                      {headersetting?.phone}
                    </p>
                  </li>
                )}
                {headersetting?.address && (
                  <li className="flex justify-start items-center gap-x-4 text-sm leading-6">
                    <div className="rounded-full border border-gray-700 p-1">
                      <GoLocation className="text-sm" />
                    </div>
                    <p className="text-gray-500 hover:text-white">
                      {headersetting?.address}
                    </p>
                  </li>
                )}

                {headersetting?.email && (
                  <li className="flex justify-start items-center gap-x-4 text-sm leading-6">
                    <div className="rounded-full border border-gray-700 p-1">
                      <AiOutlineMail className="text-sm" />
                    </div>
                    <p className="text-gray-500 hover:text-white">
                      {headersetting?.email}
                    </p>
                  </li>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <Messenger /> */}
      <WhatsApp headersetting={headersetting}/>
    </footer>
  );
};

export default FooterFour;
