"use client";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Nav from "@/components/Layout/Nav";
import Footer from "@/components/Layout/Footer";
export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitSignIn = async (e: any) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data }: any = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/logIn`,
        { email: email, password: password },
        config
      );
      if (data.statusCode !== 404) {
        Cookies.set("token", data.token);
        Cookies.set("userData", JSON.stringify(data));
        router.push("/");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <main className="flex flex-col w-full h-screen font-body  bg-zinc-100">
      <Nav />
      <div className="flex justify-center items-center m-2 min-h-[580px] h-full mt-[80px] ">
        <div className="flex flex-col items-center justify-center w-[716px] h-[95%] drop-shadow-lg">
          <div className="w-[330px] md:w-[400px] h-fit bg-white rounded-[35px] p-[32px]">
            <div className="flex justify-center w-full">
              <p className="text-primary font-bold text-[32px] ">Sign In</p>
            </div>

            <div className="h-[250px]">
              <form onSubmit={(e) => SubmitSignIn(e)}>
                <div className="flex h-[20px] items-end justify-between mb-[15px]"></div>

                <div className="flex flex-col h-[48px] mb-[8px] border-[1px] border-[#97B2D5] rounded-[50px] p-[11px]">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[28px] focus:outline-none text-black"
                    placeholder="Email"
                  />
                </div>

                <div className="flex h-[48px] border-[1px] border-[#97B2D5] rounded-[50px] p-[11px] text-black mt-[20px]">
                  <div className="w-[260px]">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-[28px] w-full focus:outline-none "
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center mt-[20px]">
                  <button
                    className="bg-secondary h-[48px] w-full rounded-[50px] "
                    type="submit"
                  >
                    <p className="text-white text-[18px]  font-semibold">
                      Sign In
                    </p>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center text-black text-[12px]">
              <p className="mr-2">Need an account?</p>
              <a href="/signUp">
                <p className="font-bold text-blue-500 underline">
                  Create Account
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
