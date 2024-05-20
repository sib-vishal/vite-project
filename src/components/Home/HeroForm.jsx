
import React, { useState } from "react";
import Services from "./Services";
import axios from "axios";
import "./heroform.css";

const HeroForm = ({ oneline }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    companyName: "",
    websiteUrl: "",
    email: "",
    fromWhere: "Digital marketing services in dallas",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Response:", responseData);

      setFormData({
        name: "",
        companyName: "",
        websiteUrl: "",
        email: "",
        phoneNo: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div
        className={`w-[100%] bg-white rounded-2xl   ${
          oneline ? "py-12 " : "p-5"
        }`}
      >
        <h1 className="font-bold font-redhat text-[24px] md:text-[29px] text-center">
          Ready to get more leads
        </h1>
        <form
          className="Hero_form text-[#999] font-poppins"
          onSubmit={handleSubmit}
        >
          <div className={`grid   ${oneline ? "" : "grid-cols-2 gap-4 "}`}>
            <div class="user-box mt-[23px] ">
              <input
                className=""
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name" className="">
                Name
              </label>
            </div>
            <div class="user-box mt-[23px] ">
              <input
                className=""
                type="text"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
              <label htmlFor="phoneNo" className="">
                Phone No
              </label>
            </div>
          </div>
          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
            <label htmlFor="companyName" className="">
              Company Name
            </label>
          </div>

          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
            />
            <label htmlFor="websiteUrl" className="">
              Website Url
            </label>
          </div>

          <div class="user-box mt-[23px] ">
            <input
              className=""
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="">
              Email
            </label>
          </div>

          <button className="py-3 rounded-xl bg-[#e31a20] mt-5 w-full  font-poppins text-white text-[16px] md:text-xl ">
            SEND REQUEST
          </button>
        </form>
      </div>

      <div className="lg:hidden py-4 ">
        <Services />
      </div>
    </>
  );
};

export default HeroForm;
