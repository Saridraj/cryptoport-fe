"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Footer = ({}) => {
  return (
    <>
      <footer className="flex justify-between items-center h-[450px] w-full bg-primary rounded-t-[48px]  shadow-black  shadow-[0_-15px_30px_-15px] p-[84px]  px-[108px]">
        <div className="w-[40%] h-full mx-1">
          <div>
            <Link href="http://localhost:3000">
              <Image
                src="https://kryptodian.com/wp-content/uploads/2022/03/Logo-white.svg"
                alt="Vercel Logo"
                width={250}
                height={35}
                priority
              />
            </Link>
          </div>

          <div className="my-[24px]">
            <p className="text-[16px]">
              © 2024 Kryptodian All Rights Reserved.
            </p>
          </div>
          <div className="text-white text-[16px]">
            <p>Kryptodian is the trading name of Gabriel NS Limited</p>
            <p>a company registered in Hong Kong No.2426209</p>
          </div>
        </div>
        <div className=" w-[40%]  h-full mx-1">
          <div className="text-white text-[16px]">
            <p>Gabriel NS limited</p>
            <p>4002A 40F Tower1 Lippo Centre, 89 Queensway, Admiralty, Hong Kong</p>
          </div>
          <div className="my-[24px] text-white text-[16px]">
            <p>hello@kryptodian.com</p>
          </div>
          <div className="text-white text-[14px] font-light">
            <p>Kryptodian is a digital asset custodian that provides all institutional participants in the space the proper safeguarding, protection, trade and investment of their cryptocurrencies. Custody service is one of the core infrastructure. We think speed and security can coexist and creating opportunity for clients is of most importance.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
