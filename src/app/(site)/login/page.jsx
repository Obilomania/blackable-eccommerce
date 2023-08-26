"use client";
import React, { useState } from "react";
import "./Login.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";

const LoginPage = () => {
  const [reveal, setReveal] = useState(false)
  const toggleReveal = () => setReveal(!reveal)
  return (
    <div className="pt-20 relative bg-black h-[100vh]">
      <div className="registerContent flex flex-col gap-10 items-center justify-center mt-20">
        <h1 className="text-3xl text-secondary font-semibold">LOGIN</h1>
        <div className="registerForm">
          <form className="w-[50%]">
            <div className="formControl flex flex-col items-start gap-2 w-full mt-4">
              <label className="text-primary text-[1.2rem]">
                Email Addresas :{" "}
              </label>
              <input type="text" placeholder="Enter your Email" />
            </div>
            <div className="formControl relative flex flex-col items-start gap-2 w-full mt-4">
              <label className="text-primary text-[1.2rem]">Password : </label>
              <input
                type={reveal ? "text" : "password"}
                placeholder="Enter your Password"
              />
              <p
                className="text-white absolute right-4 bottom-5 cursor-pointer"
                onClick={toggleReveal}
              >
                {reveal ? <BsEyeSlash /> : <BsEye />}
              </p>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="forgot flex items-center justify-between w-full mt-8">
            <p className="text-white">
              Forgot Password ?{" "}
              <Link href={"/forgot-password"} className="font-semibold text-secondary">
                Click Here{" "}
              </Link>
            </p>
            <p className="text-white ">
              New Customer ?{" "}
              <Link href={"/register"} className="font-semibold text-secondary">
                Register Here{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
