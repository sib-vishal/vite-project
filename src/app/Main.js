"use client";
import Model from "../components/Home/Model";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/sidebar/SideBar";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosPaperPlane } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "react-router-dom";

import FooterBar from "../components/Footer/FooterBar";

const Main = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <main className="min-h-screen relative">
        {children}
        <SideBar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>
      <Footer />
      <Model isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* <Link
        href={"https://api.whatsapp.com/send?phone=918850525860&text=Hi"}
        className="z-[2] max-lg:hidden fixed bottom-4 w-fit  right-2  text-white   "
      >
        <Image width={50} height={50} src={"/whatsapp.png"} alt="whatsapp" />
      </Link> */}
      <div className="z-[2] max-lg:hidden sticky bottom-0 ">
        <FooterBar />
      </div>
      <div className="z-[2] sticky bottom-0 lg:hidden grid grid-cols-3  text-white   ">
        <div className="py-3   bg-[#3979F8] text-white tooltip">
          <span class="tooltiptext">Call</span>
          <Link    target="_blank" href={"tel:+1 315 666 8001"}>
            <FaPhoneAlt className="text-[25px] mx-auto block " />
          </Link>
        </div>
        <div className="py-3  bg-[#E31A20] tooltip">
          <span class="tooltiptext">Request a Quote</span>
          <Link href={"#contact"}>
            <IoIosPaperPlane className="text-3xl mx-auto block " />
          </Link>
        </div>
        <div className="py-3  bg-[#55cd6c] tooltip">
          <span class="tooltiptext">Whatsapp</span>
          <Link
             target="_blank"
            href={"https://api.whatsapp.com/send?phone=918850525860&text=Hi"}
          >
            <IoLogoWhatsapp className="text-3xl mx-auto block " />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
