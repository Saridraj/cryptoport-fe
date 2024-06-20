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

  // console.log("userId: ",user.data.id)
  function handleMenuClick() {
    setMenuClick(!menuClick);
    console.log(menuClick);
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
      console.log(JSON.parse(userData));
      setUser(JSON.parse(userData));
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  // useEffect(() => {
  //     const handleAutoSignOut = () => {
  //         const { userData, token } = parseCookies();
  //         if (!userData || !token) {
  //             handleLogoutButton();
  //         }
  //     };
  //     handleAutoSignOut();
  // }, []);

  // let userData: any
  // if (typeof window != 'undefined') {
  //     const cookies: any = parseCookies()
  //userData = cookies?.userData ? JSON.parse(cookies.userData) : "";
  //userData = cookies.userData? JSON.parse(cookies.userData): "";
  //     console.log("userData", userData)
  // }

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
            <div className="flex">
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
          </>
        ) : (
          <>
           {/* <button
                className="hidden xl:flex justify-center items-center bg-secondary w-[135px] h-[40px] rounded-[50px] drop-shadow-lg"
                onClick={handleSignInButton}
              >
                <p className="text-[16px] text-white font-semibold">Sign In</p>
              </button> */}
          </>
        )}

        <div className="xl:hidden flex flex-col items-end  w-[300px] h-fit text-primary bg-red-200">
          <span onClick={handleMenuClick} className="material-symbols-outlined">
            menu
          </span>
          {menuClick ? (
            <>
              <div className="w-[200px] h-[300px] bg-tertiary top-0 absolute mt-[78px] ">
                sx
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
