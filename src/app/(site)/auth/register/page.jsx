"use client";
import React, { useState } from "react";
import "./Register.css";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { registerNewUser } from "../../../../services/register";
import { toast } from "react-hot-toast";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const RegisterPage = () => {
  const router = useRouter();
  const [reveal, setReveal] = useState(false);
  const toggleReveal = () => setReveal(!reveal);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (formData.password !== formData.confirmPassword) {
        setLoading(false);
        return toast.error("Password dont match");
      }
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setLoading(false);
        return toast.error("All inputs are required");
      }
      const newUser = await registerNewUser(formData);
      if (newUser.success === true) {
        toast.success("Registration successful");
      } else {
        toast.error(newUser.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 relative bg-black h-[100vh]">
      <div className="registerContent flex flex-col gap-10 items-center justify-center mt-20">
        <h1 className="text-3xl text-secondary font-semibold">
          REGISTER NEW ACCOUNT
        </h1>
        <div className="registerForm">
          <form className="w-[50%]" onSubmit={handleSubmit}>
            <div className="formControl flex flex-col items-start gap-2 w-full">
              <label className="text-primary text-[1.2rem]">Full Name : </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                name="name"
                value={formData.name}
                onChange={handleUserInput}
              />
            </div>
            <div className="formControl flex flex-col items-start gap-2 w-full mt-4">
              <label className="text-primary text-[1.2rem]">
                Email Addresas :{" "}
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                name="email"
                value={formData.email}
                onChange={handleUserInput}
              />
            </div>
            <div className="formControl relative flex flex-col items-start gap-2 w-full mt-4 text-white">
              <label className="text-primary text-[1.2rem]">Password : </label>
              <input
                type={reveal ? "text" : "password"}
                placeholder="Enter your Password"
                name="password"
                value={formData.password}
                onChange={handleUserInput}
              />
              <p
                className="text-white absolute right-4 bottom-5 cursor-pointer"
                onClick={toggleReveal}
              >
                {reveal ? <BsEyeSlash /> : <BsEye />}
              </p>
            </div>
            <div className="formControl relative flex flex-col items-start gap-2 w-full mt-4 text-white">
              <label className="text-primary text-[1.2rem]">
                Confirm Password :{" "}
              </label>
              <input
                type={reveal ? "text" : "password"}
                placeholder="Confirm your Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleUserInput}
              />
              <p
                className="text-white absolute right-4 bottom-5 cursor-pointer"
                onClick={toggleReveal}
              >
                {reveal ? <BsEyeSlash /> : <BsEye />}
              </p>
            </div>
            <button type="submit">
              {loading ? "REGISTERING ..." : "REGISTER"}
            </button>
          </form>
          <p className="text-white mt-8 ">
            Have an Account?{" "}
            <Link href={"/auth/login"} className="font-semibold text-secondary">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
