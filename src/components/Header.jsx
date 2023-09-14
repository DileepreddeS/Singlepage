"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import  Text  from "@nextui-org/react/text";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };



  return (
    <div className="mb-4 z-50">
      <header
        className={`w-full bg-white py-6 z-50 p-5  ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        {/* Your header content */}

        <div className="justify-end flex">
          {/* Your navigation links */}
          <a href="#" className="mr-4 text-black">
            Home
          </a>
          <a href="#" className="mr-4 text-black">
            Services
          </a>
          <a href="#" className="text-black">
            Contact
          </a>
        </div>
      </header>
      <div className=" ml-5 flex rounded-lg float scroll-py-5">
        <Image className=""
          src="https://www.webopedia.com/wp-content/uploads/1997/02/Webo.OracleProfile-1024x1024.png"
          alt="Logo"
          width={70}
          height={70}
        />
      </div>
      <div className="py-4 ml-5 flex">
        <h3 className="ml-5" >{"ORACLE"}</h3>
      </div>
    </div>
  );
}

export default Header;
