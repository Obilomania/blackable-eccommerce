"use client";
import React, { useState } from "react";
import "./Register.css";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const RegisterPage = () => {
  const [reveal, setReveal] = useState(false);
  const toggleReveal = () => setReveal(!reveal);
  return (
    <div className="pt-20 relative bg-black h-[100vh]">
      <div className="registerContent flex flex-col gap-10 items-center justify-center mt-20">
        <h1 className="text-3xl text-secondary font-semibold">
          REGISTER NEW ACCOUNT
        </h1>
        <div className="registerForm">
          <form className="w-[50%]">
            <div className="formControl flex flex-col items-start gap-2 w-full">
              <label className="text-primary text-[1.2rem]">Full Name : </label>
              <input type="text" placeholder="Enter your Full Name" />
            </div>
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
            <button type="submit">Register</button>
          </form>
          <p className="text-white mt-8 ">
            Have an Account?{" "}
            <Link href={"/login"} className="font-semibold text-secondary">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
