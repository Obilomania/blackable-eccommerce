"use client";
import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "../../../../services/login";
import { toast } from "react-hot-toast";
import { GlobalContext } from "../../../../context";
import Cookies from "js-cookie";

const initialState = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const router = useRouter();
  const [reveal, setReveal] = useState(false);
  const toggleReveal = () => setReveal(!reveal);
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { isAuthUser, setIsAuthUser, user, setUser } =
    useContext(GlobalContext);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!formData.email || !formData.password) {
        setLoading(false);
        return toast.error("All inputs are required");
      }
      const loggedInUser = await loginUser(formData);
      const userRole = loggedInUser.finalData.user.role;
      if (loggedInUser.success === true) {
        toast.success("Login successful");
        if (userRole === "user") {
          router.push("/");
        } else {
          router.push("/admin");
        }
      } else {
        toast.error(loggedInUser.message);
      }
      if (loggedInUser.success) {
        setIsAuthUser(true);
        setUser(loggedInUser?.finalData?.user);
        Cookies.set("token", loggedInUser.finalData.token);
        localStorage.setItem(
          "user",
          JSON.stringify(loggedInUser?.finalData?.user)
        );
        setLoading(false);
      } else {
        setIsAuthUser(false);
        setLoading(false);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (isAuthUser === true) {
  //     router.push("/");
  //   }
  // }, [isAuthUser, router]);
  return (
    <div className="pt-20 relative bg-black h-[100vh]">
      <div className="registerContent flex flex-col gap-10 items-center justify-center mt-20">
        <h1 className="text-3xl text-secondary font-semibold">LOGIN</h1>
        <div className="registerForm">
          <form className="w-[50%]" onSubmit={handleSubmit}>
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
            <div className="formControl relative flex flex-col items-start gap-2 w-full mt-4">
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
            <button type="submit">LOGIN</button>
          </form>
          <div className="forgot flex items-center justify-between w-full mt-8">
            <p className="text-white">
              Forgot Password ?{" "}
              <Link
                href={"/auth/forgot-password"}
                className="font-semibold text-secondary"
              >
                Click Here{" "}
              </Link>
            </p>
            <p className="text-white ">
              New Customer ?{" "}
              <Link
                href={"/auth/register"}
                className="font-semibold text-secondary"
              >
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
