"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
//import { useRouter, usePathname } from 'next/navigation'
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import Cookies from "js-cookie";

const Nav = ({}) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [user, setUser] = useState<[]>([]);

  function handleMenuClick() {
    setMenuClick(!menuClick);
  }
  const handleSignInButton = async (e: any) => {
    router.push("/signIn");
  };

  const handleSignOutButton = () => {
    Cookies.remove("userData");
    Cookies.remove("token");
    setLoggedIn(false);
    router.push("/signIn");
  };

  const pageReload = () => {
    router.refresh();
  };

  useEffect(() => {
    const { userData } = parseCookies();
    if (userData) {
      setUser(JSON.parse(userData));
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <>
      <nav className=" z-10 fixed flex items-center justify-between h-[78.05px] w-full bg-primary px-[26px] shadow-zinc-500 shadow-lg">
        <Link href="/">
          <Image
            src="https://kryptodian.com/wp-content/uploads/2022/03/Logo-white.svg"
            alt="Vercel Logo"
            width={250}
            height={35}
            priority
          />
        </Link>

        {loggedIn ? (
          <>
            <div className=" hidden xl:flex ">
              <div className="flex justify-center items-center w-[200px] h-[40px] bg-primary rounded-[50px] text-white ">
                <p className="truncate text-[16px] font-semibold">
                  {Object(user).firstname}
                </p>
              </div>
              <div className="w-[2px] h-[50px] bg-zinc-500 mx-3"></div>
              <button
                onClick={handleSignOutButton}
                className="flex justify-center items-center w-[100px] h-[40px] bg-primary rounded-[50px] "
              >
                <p className="text-[14px] text-zinc-400">Sign Out</p>
              </button>
            </div>
            <div className="flex xl:hidden justify-end w-[140px] ">
              <span
                onClick={handleMenuClick}
                className="material-symbols-outlined text-[30px]"
              >
                menu
              </span>
            </div>
            {menuClick ? (
              <>
                <div className="flex justify-end xl:hidden w-[94vw] h-[300px] top-0 absolute mt-[78.05px] ">
                  <div className="w-[300px] h-[100px] bg-primary">
                    <div className=" ">
                      <div className="flex justify-center items-center w-full h-[40px] bg-primary rounded-[50px] text-white ">
                        <p className="truncate text-[16px] font-semibold">
                          {Object(user).firstname}
                        </p>
                      </div>
                      <div className="w-[250px] h-[2px] bg-zinc-500 mx-3"></div>
                      <button
                        onClick={handleSignOutButton} 
                        className="flex justify-center items-center w-full h-[40px] bg-primary rounded-[50px] "
                      >
                        <p className="text-[14px] text-zinc-400">Sign Out</p>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
};

export default Nav;
