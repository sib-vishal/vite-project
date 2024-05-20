import { Link } from "react-router-dom";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

const FooterBar = () => {
  return (
    <div className="footerBar py-4">
      <div className="w-[90%]  flex justify-between items-center gap-4 mx-auto">
        <div>
          <Link
             target="_blank"
            href={"tel:+1 315 666 8001"}
            className=" flex group justify-center items-center border hover:border-white hover:bg-white text-white font-redhat hover:bg-opacity-0  transition-all duration-300  group   rounded-[10px] text-[14px] md:text-[16px] font-bold    gap-1 p-[10px_15px] lg:p-[10px_20px] uppercase"
          >
            <span className="p-2 peer  rounded-md">
              <FaPhoneAlt className="text-[14px] transition-all text-white  " />
            </span>
            <span>Speak With An Expert </span>
          </Link>
        </div>
        <div>
          <h4 class=" text-white text-[18px] text leading-tight md:text-[22px] font-redhat  font-bold">
            Best Digital Marketing Company in Dallas
          </h4>
        </div>
        <div>
          <Link
          target="_blank"
            href={"https://api.whatsapp.com/send?phone=918850525860&text=Hi "}
            className=" flex group justify-center items-center border  bg-green-500  hover:bg-opacity-[1]  text-white hover:border-green-500 hover:text-white font-redhat bg-opacity-0  transition-all duration-300  group   rounded-[10px] text-[14px] md:text-[16px] font-bold    gap-1 p-[10px_15px] lg:p-[10px_20px] uppercase"
          >
            <IoLogoWhatsapp className="text-2xl text-white transition-all  " />

            <span>Chat on Whatsapp </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
