"use client";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Layout/Nav";
import Footer from "@/components/Layout/Footer";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [firstname, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const SubmitSignUp = async (e: any) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (password !== repassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { data }: any = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        },
        config
      );

      if (data.id) {
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setRepassword("");
        router.push("/signIn");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <main className="flex flex-col w-full h-screen font-body  bg-zinc-100">
      <Nav />
      <div className="flex justify-center items-center m-2 min-h-[680px] h-full mt-[80px]">
        <div className="flex flex-col items-center justify-center w-[716px] h-[95%]">
          <div className="w-[330px] md:w-[400px] h-[600px] bg-white rounded-[35px] p-[32px]">
            <p className="text-black font-bold text-[32px]">Sign Up</p>
            <div className="h-[450px]">
              <form
                // onKeyPress={(e) => checkSubmit(e)}
                onSubmit={(e) => SubmitSignUp(e)}
              >
                <div className="flex h-[20px] items-end justify-between mb-[15px]"></div>

                <div className="flex flex-col h-[48px] mb-[15px] border-[1px] border-[#97B2D5]  rounded-[50px] p-[11px]">
                  <input
                    value={firstname}
                    onChange={(e) => setName(e.target.value)}
                    className="h-[28px] focus:outline-none text-black"
                    placeholder="Name"
                  />
                </div>

                <div className="flex flex-col h-[48px] mb-[15px] border-[1px] border-[#97B2D5]  rounded-[50px] p-[11px] mt-[20px]">
                  <input
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    className="h-[28px] focus:outline-none text-black"
                    placeholder="Lastname"
                  />
                </div>

                <div className="flex flex-col h-[48px] mb-[15px] border-[1px] border-[#97B2D5]  rounded-[50px] p-[11px] mt-[20px]">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[28px] focus:outline-none text-black"
                    placeholder="Email"
                  />
                </div>

                <div className="flex h-[48px] border-[1px] mb-[15px] border-[#97B2D5]  rounded-[50px] p-[11px] text-black mt-[20px]">
                  <div className="w-[260px]">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-[28px]  w-full  focus:outline-none "
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex h-[48px] border-[1px] border-[#97B2D5]  rounded-[50px] p-[11px] text-black mt-[20px]">
                  <div className="w-[260px]">
                    <input
                      type="password"
                      value={repassword}
                      onChange={(e) => setRepassword(e.target.value)}
                      className="h-[28px]  w-full  focus:outline-none "
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center mt-[20px]">
                  <button
                    className="bg-secondary h-[48px] w-full  rounded-[50px]"
                    type="submit"
                  >
                    <p className="text-white text-[18px]">Sign Up</p>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center ">
              <p className="mr-2 text-black">Already have an account?</p>
              <a href="/signIn">
                {" "}
                <p className="font-bold text-blue-500 underline">Sign in</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
