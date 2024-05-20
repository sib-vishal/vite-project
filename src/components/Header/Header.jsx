"use client";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { openSideBar } from "../sidebar/SideBar";
import { IoMdMail } from "react-icons/io";

const Header = ({ setIsModalOpen }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`pagezContainer mx-auto  z-[20] sticky top-0 ${
        isSticky ? "bg-white shadow-[0_0.5rem_1rem_#00000026]" : "bg-opacity-0"
      }`}
    >
      <div className="relative">
        <div className="bg-transparent  w-[90%] mx-auto flex items-center justify-between py-2 ">
          <div className="flex items-center gap-4 ">
            <div className="max-lg:hidden">
              <IoMenu
                className={`text-3xl  cursor-pointer ${
                  isSticky ? "text-black z-[20]" : "text-white"
                }`}
                onClick={openSideBar}
              />
            </div>
            <div className="max-md:w-[190px]">
              {isSticky ? (
                <img
                  className=""
                  width={256}
                  height={71}
                  quality={100}
                  src={"/header/logo.webp"}
                  alt="logo"
                />
              ) : (
                <img
                  className=""
                  width={256}
                  height={71}
                  quality={100}
                  src={"/header/logo.png"}
                  alt="logo"
                />
              )}
            </div>
          </div>
          <div className="max-lg:hidden flex gap-12 items-center">
            <div className="uppercase font-redhat text-[18px] p-[4px]  font-bold bg-[#3979f8]">
              <p className="py-[6px] px-[16px] border-white border text-white ">
                save 2x cost
              </p>
            </div>

            <div
              className=" rounded overflow-hidden bg-white "
              style={{
                boxShadow: "0 .5rem 1rem rgba(0, 0, 0, .15)",
              }}
            >
              <p className="bg-[#3979f8] py-1 px-4  text-white text-center font-[14px] font-poppins">
                Premier Partner
              </p>
              <div className="py-2 flex bg-white">
                <img
                  className="m-auto pt-1"
                  width={80}
                  height={25}
                  quality={100}
                  src={"/header/google-logo-new.webp"}
                  alt="google logo"
                />
              </div>
            </div>
          </div>
          <div className=" max-lg:hidden font-redhat flex items-center gap-4 text-white ">
            <Link
              href="tel:+1 (315) 666-8001"
              className={`flex  text-[20px] items-center gap-2 font-bold hover:text-blue-500  ${
                isSticky ? "text- z-[20] text-[#E31A20]" : "text-white"
              }`}
            >
              <FaPhoneAlt className="text-2xl" />
              <span>+1 (315) 666-8001</span>
            </Link>
            <button
              className={`uppercase  bg-opacity-0  font-redhat transition-all duration-300  group  border rounded-[10px] text-[16px] font-bold flex  items-center gap-1 p-[10px_15px] ${
                isSticky
                  ? "text-[#222] z-[20] border-black hover hover:text-[#E31A20] hover:border-[#E31A20]  "
                  : " hover:bg-white  bg-white hover:text-[#E31A20] text-white"
              }`}
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              {" "}
              <span>Request a Quote</span>
              <FaSquareArrowUpRight className="text-2xl   group-hover:text-[#E31A20] " />
            </button>
          </div>

          <div className="lg:hidden">
            <div className="flex items-center gap-3  ">
              <Link
                href="mailto:contact@sibinfotech.com"
                className={` relative z-[1]   ${
                  isSticky ? "text-[#E31A20] " : " text-[#3979f8]  "
                }`}
              >
                <IoMdMail className="text-2xl md:text-3xl   cursor-pointer" />
              </Link>
              <IoMenu
                className={`text-2xl md:text-3xl  cursor-pointer  ${
                  isSticky ? "text-[#222] " : " text-white  "
                }`}
                onClick={openSideBar}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
