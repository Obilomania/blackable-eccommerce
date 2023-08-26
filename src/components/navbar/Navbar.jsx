import React from "react";
import "./navbar.css";
import Link from "next/link";
import { BsCartCheck } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link href={"/"}>
            Black<span className="text-secondary">able</span>
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
          <Link href={"/"}>Account</Link>
          <Link href={"/"}>Login</Link>
          <Link href={"/register"} className="reg">
            Register
          </Link>
          <button>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
