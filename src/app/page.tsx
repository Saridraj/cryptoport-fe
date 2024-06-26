"use client";
import Image from "next/image";
import Nav from "@/components/Layout/Nav";
import Footer from "@/components/Layout/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { parseCookies } from "nookies";
import Portfolios from "@/components/Portfolio";
import { useRouter } from "next/navigation";

export default function Home() {
  let userId: string = "";
  let y: string[] = [];

  if (typeof window !== "undefined") {
    const x = localStorage.getItem("portfolio");
    if (x) {
      y = JSON.parse(x);
    }
    const cookies: any = parseCookies();
    const userData = cookies?.userData ? JSON.parse(cookies.userData) : "";
    userId = userData.id;
  }
  const [portfolio, setPortfolio] = useState<string[]>(y);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  console.log(portfolio.length);

  if (userId == "") {
    router.push("/signIn");
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  };

  const getPortfolio = async () => {
    const portfolio = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/portfolio/${userId}`,
      config
    );
    if (portfolio.status == 200) {
      setLoader(true);
    }
    return portfolio;
  };

  useEffect(() => {
    const { userData } = parseCookies();
    if (userData) {
      setLoggedIn(true);
    } else {
      router.push("/signIn");
      setLoggedIn(false);
    }
    const fetchData = async () => {
      try {
        const [portfolioResponse] = await Promise.all([getPortfolio()]);

        if (portfolioResponse.data !== "") {
          localStorage.setItem(
            "portfolio",
            JSON.stringify(portfolioResponse.data)
          );
        }

        const x = localStorage.getItem("portfolio");
        if (x) {
          setPortfolio(JSON.parse(x));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="flex flex-col  w-full min-h-screen font-body  ">
      <Nav />
      <div className="flex justify-center items-center bg-zinc-100  min-h-[80vh] w-full mt-[80px] py-[50px] ">
        {loggedIn ? (
          <>
            <div className="flex flex-col items-center w-[330px] md:w-[650px] lg:w-[850px]  h-fit  rounded-[28px] p-4 bg-white">
              <div className="bg-white ">
                <h1 className="text-primary text-[32px] font-bold drop-shadow-lg">
                  Portfolio
                </h1>
              </div>
              {!loader ? (
                <>
                  <div className="flex flex-col items-center  w-[330px] md:w-full md:min-w-[600px]   h-[400px]  bg-white rounded-[28px] p-4">
                    <div className="flex justify-center items-center p-[32px] w-[310px] md:w-[750px] md:min-w-[600px] h-[300px] rounded-[24px] drop-shadow-md my-1 ">
                      <p className="text-primary">Data Loading...</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-center px-2 md:p-[32px]  w-[310px] md:w-[650px] lg:w-[850px] h-[80px] rounded-[24px] drop-shadow-md my-1">
                    <div className="hidden md:flex w-[50px] h-[50px] rounded-[50px] overflow-hidden drop-shadow-lg ">
                      <p className="text-[16px] text-primary font-semibold truncate"></p>
                    </div>
                    <div className="flex justify-center  w-[90px] md:w-[170px] ">
                      <p className="text-[16px] text-primary font-semibold truncate">
                        Name
                      </p>
                    </div>
                    <div className="flex justify-center w-[100px] md:w-[170px] ">
                      <p className="truncate text-gray-400 font-semibold text-primary">
                        Price(BTC)
                      </p>
                    </div>
                    <div className="flex justify-start  w-[80px] font-semibold text-primary">
                      P/L(24h)
                    </div>
                  </div>
                  <Portfolios portfolios={portfolio} />
                </>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      <Footer />
    </main>
  );
}
