import React from "react";
import "./FeaturedProduct.css";
import featIMG from "../../../../public/assets/event.png";
import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = () => {
  return (
    <div className="featured">
      <h1 className="text-[2rem] font-semibold text-secondary text-center">
        Featured Posts
      </h1>
      <div className="cards">
        <div className="card">
          <Image src={featIMG} alt="featImage" />
          <p className="text-[1rem] text-gray-600 font-semibold">Foot Wears</p>
          <Link href={"/"} className="text-[1rem]">
            View Product
          </Link>
        </div>
        <div className="card">
          <Image src={featIMG} alt="featImage" />
          <p className="text-[1rem] text-gray-600 font-semibold">Male Outfits</p>
          <Link href={"/"} className="text-[1rem]">
            View Product
          </Link>
        </div>
        <div className="card">
          <Image src={featIMG} alt="featImage" />
          <p className="text-[1rem] text-gray-600 font-semibold">Femaile Outfits</p>
          <Link href={"/"} className="text-[1rem]">
            View Product
          </Link>
        </div>
        <div className="card">
          <Image src={featIMG} alt="featImage" />
          <p className="text-[1rem] text-gray-600 font-semibold">Accesories</p>
          <Link href={"/"} className="text-[1rem]">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
