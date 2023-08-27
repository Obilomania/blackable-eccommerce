import React from "react";
import "./Hero.css";
import Image from "next/image";
import HeroIMG from "../../../../public/assets/heroBG.jpg";

const HeroSection = () => {
  return (
    <div className="relative top-0 left-0 w-full min-h-[100vh] overflow-hidden heroSection bg-black">
      <div className="heroContent flex items-center justify-between gap-[4%]">
        <div className="left text-white w-[72%] flex flex-col items-start gap-5 justify-start">
          <h1 className="text-[4.5rem] font-bold">Best Fashion Collection</h1>
          <p className="text-2xl text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque
            quas sed eligendi expedita! Praesentium blanditiis alias at
            repudiandae quasi. Lorem ipsum dolor sit amet consectetur
          </p>
          <button>EXPLORE</button>
        </div>
        <div className="right">
          <Image src={HeroIMG} alt="Hero-Img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
