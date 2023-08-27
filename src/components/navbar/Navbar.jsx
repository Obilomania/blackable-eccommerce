"use client";
import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import Link from "next/link";
import { BsCartCheck } from "react-icons/bs";
import { GlobalContext } from "../../context/index";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { user, isAuthUser, setIsAuthUser, setUser } =
    useContext(GlobalContext);
  const handleLogout = () => {
    localStorage.clear();
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    router.push("/");
  };
  return (
    <>
      <nav>
        <div className="logo font-bold ">
          <Link href={"/"}>
            BLACK<span className="text-secondary">ABLE</span>
          </Link>
        </div>
        <div className="navigation">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Product</Link>
          <Link href={"/"} className="flex items-center gap-2">
            Cart{" "}
            <p className="flex items-center relative text-secondary">
              <span className="">
                <BsCartCheck />
              </span>
              0
            </p>
          </Link>
          {/* {user?.role === "user" && <Link href={"/auth/login"}>User</Link>} */}
          {isAuthUser === true ? (
            <>
              <Link href={"/"}>
                Hello <span className="text-secondary font-semibold">{user?.name}</span>
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link href={"/auth/login"}>Login</Link>
              <Link href={"/auth/register"} className="reg">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
