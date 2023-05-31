import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import logo from "../assets/logo.svg";
import paymentLogo from "../assets/payment-getways.png";
import { AiOutlineMail, AiFillYoutube } from "react-icons/ai";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";

const links = [
  { title: "About Us", href: "/" },
  { title: "Terms Condition", href: "/" },
  { title: "Best Products", href: "/" },
  { title: "Blog", href: "/" },
  { title: "Tracking Order", href: "/" },
  { title: "Become Seller", href: "/" },
  { title: "Flash Sale", href: "/" },
  { title: "FAQ", href: "/" },
  { title: "Support", href: "/" },
];

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <footer>
      <div
        className={`${styles.footerBanner} flex justify-center items-center`}
      >
        <div>
          <div data-aos="fade-up" className="text-center">
            <h1 className="sm:text-3xl text-xl font-semibold mb-2">
              Get <span className="text-[#FFBB38]">20%</span> Off Discount
              Coupon
            </h1>
            <p className="sm:text-[18px] text-sm font-400">
              by Subscribe our Newsletter
            </p>
          </div>
          <div
            data-aos="fade-right"
            className="sm:w-[543px] w-[300px] h-[54px] flex mt-8"
          >
            <div className="flex-1 bg-white pl-4 flex space-x-2 items-center h-full focus-within:text-[#FFBB38] text-black">
              <AiOutlineMail />
              <input
                type="email"
                name="email"
                className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-black text-black font-400 tracking-wider"
                placeholder="EMAIL ADDRESS"
              />
            </div>
            <button
              type="button"
              className="sm:w-[158px] w-[80px]  h-full bg-[#FFBB38] text-sm font-600"
            >
              Get the Coupon
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 m-p-0 bg-white print:hidden">
        <div className="max-w-[1168px] block mx-auto pt-[56px]">
          <div className="w-full flex flex-col items-center mb-[50px]">
            <div className="mb-[40px]">
              <a href="#">
                <Image width="152" height="36" src={logo} alt="logo" />
              </a>
            </div>
            <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
          </div>

          <div className="lg:flex justify-between mb-[50px]">
            <div className="lg:w-[424px]  ml-0 w-full mb-10 lg:mb-0">
              <h1 className="text-[18] font-500 text-[#2F2F2F] mb-5">About Us</h1>
              <p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]">
                We know there are a lot of threa developers our but we pride
                into a firm in the industry.
              </p>
            </div>
            <div className="flex-1 lg:flex">
              <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">Feature</h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4">
                    {links.slice(0, 3).map((link) => {
                      return (
                        <li key={link.title}>
                          <a href={link.href}>
                            <span className="text-[#9A9A9A] text-[15px] hover:text-black border-b border-transparent hover:border-black cursor-pointer capitalize">
                              {link?.title}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0 ">
                <div>
                  <div className="mb-5">
                    <h6 className="text-[18] font-500 text-[#2F2F2F]">
                      General Links
                    </h6>
                  </div>
                  <div>
                    <ul className="flex flex-col space-y-4">
                      {links.slice(3, 6).map((link) => {
                        return (
                          <li key={link.title}>
                            <a href={link.href}>
                              <span className="text-[#9A9A9A] text-[15px] hover:text-black border-b border-transparent hover:border-black cursor-pointer capitalize">
                                {link?.title}
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
                <div>
                  <div className="mb-5">
                    <h6 className="text-[18] font-500 text-[#2F2F2F]">Helpful</h6>
                  </div>
                  <div>
                    <ul className="flex flex-col space-y-4">
                      {links.slice(6, 9).map((link) => {
                        return (
                          <li key={link.title}>
                            <a href={link.href}>
                              <span className="text-[#9A9A9A] text-[15px] hover:text-black border-b border-transparent hover:border-black cursor-pointer capitalize">
                                {link?.title}
                              </span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-bar border-t lg:h-[82px] lg:flex justify-between items-center">
            <div className="flex lg:space-x-5 justify-between items-center mb-3 text-gray-500">
              <div className="flex space-x-5 items-center">
                <a href="#">
                  <RiInstagramLine />
                </a>
                <a href="#">
                  <RiFacebookFill />
                </a>
                <a href="#">
                  <AiFillYoutube />
                </a>
              </div>
              <span className="sm:text-base text-[10px] text-qgray font-300">
                ©2022
                <a
                  href="https://quomodosoft.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-500 text-black mx-1"
                >
                  Quomodosoft
                </a>
                All rights reserved
              </span>
            </div>
            <div>
              <a href="#">
                <Image
                  width="318"
                  height="28"
                  src={paymentLogo}
                  alt="payment-getways"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
