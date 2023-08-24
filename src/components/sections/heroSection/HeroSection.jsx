import React from "react";
import LandingBG from "../../../../public/assets/heroBG.jpg";
import Image from "next/image";
import "./Hero.css";
import Link from "next/link";
import {BiStore} from 'react-icons/bi'
import { LuContact } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="relative top-0 left-0 w-full heroSection">
      <div className="landingBG ">
        <Image src={LandingBG} alt="landingBG" />
        <div className="overlay"></div>
      </div>
      <div className="content flex flex-col items-center w-full">
        <h1 className="text-[10rem]  text-primary font-[400]">
          BLACK{" "}
          <span className="text-secondary font-bold ml-[-1rem]">ABLE</span>
        </h1>
        {/* <div className="writeUp mt-[-3rem]">
          <p className="text-[3rem] font-semibold text-primary">STORE</p>
        </div> */}
        <div className="CAL mt-[1rem] flex items-center gap-[2rem] text-white">
          <Link href={"/"}>
            VIEW PRODUCTS <BiStore />
          </Link>
          <Link href={"/"}>
            CONTACT US
            <LuContact color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
