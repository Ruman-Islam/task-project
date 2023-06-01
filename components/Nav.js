import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/logo.svg";
import Image from "next/image";
import menuThum from "../assets/mega-menu-thumb.jpg";
const Nav = ({ toggleNavDrawer }) => {
  const menuList = (
    <>
      <li tabIndex={0}>
        <Link href={"#"} className="justify-between">
          Homepage
          <IoIosArrowDown />
        </Link>
        <ul className="p-2 bg-base-100 rounded-none">
          <li>
            <Link href={"#"}>Home one</Link>
          </li>
          <li>
            <Link href={"#"}>Home two</Link>
          </li>
          <li>
            <Link href={"#"}>Home three</Link>
          </li>
          <li>
            <Link href={"#"}>Home four</Link>
          </li>
        </ul>
      </li>

      <li tabIndex={0}>
        <Link href={"#"} className="justify-between">
          Shop
          <IoIosArrowDown />
        </Link>
        <ul className="p-2 bg-base-100 rounded-none relative ">
          <div className="bg-white shadow grid grid-cols-4 w-[90vw] absolute top-0 left-[-40vw]">
            <div>
              <h2>Shop List</h2>
              <li>
                <Link href={"#"}>Shop Sidebar</Link>
              </li>
              <li>
                <Link href={"#"}>Shop Fullwidth</Link>
              </li>
              <li>
                <Link href={"#"}>Shop Category Icon</Link>
              </li>
              <li>
                <Link href={"#"}>Shop List View</Link>
              </li>
            </div>
            <div>
              <h2>PRODUCT LAYOUTS</h2>
              <li>
                <Link href={"#"}>Horizonral Thumbnail</Link>
              </li>
              <li>
                <Link href={"#"}>Vertical Thumbnail</Link>
              </li>
              <li>
                <Link href={"#"}>Gallery Thumbnail</Link>
              </li>
              <li>
                <Link href={"#"}>Sticky Summary</Link>
              </li>
            </div>
            <div>
              <h2>POLULAR CATEGORY</h2>
              <li>
                <Link href={"#"}>Phone & Tablet</Link>
              </li>
              <li>
                <Link href={"#"}>Gaming & Sports</Link>
              </li>
              <li>
                <Link href={"#"}>Home Appliance</Link>
              </li>
              <li>
                <Link href={"#"}>Fashion Clothes</Link>
              </li>
            </div>
            <div>
              <Image
                src={menuThum}
                alt="mennu thumm"
                width={500}
                height={400}
              />
            </div>
          </div>
        </ul>
      </li>

      <li tabIndex={0}>
        <Link href={"#"} className="justify-between">
          Pages
          <IoIosArrowDown />
        </Link>
        <ul className="p-2 bg-base-100 rounded-none">
          <li>
            <Link href={"#"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"#"}>Terms & Conditions</Link>
          </li>
          <li>
            <Link href={"#"}>FAQ</Link>
          </li>
          <li>
            <Link href={"#"}>Shop Category Icon</Link>
          </li>
          <li>
            <Link href={"#"}>Shop List View</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href={"#"}>About</Link>
      </li>
      <li>
        <Link href={"#"}>Blog</Link>
      </li>
      <li>
        <Link href={"#"}>Contact</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar px-8 py-2 bg-[#ffbb38]">
        <div className="navbar-start">
          <div className="dropdown">
            <label onClick={toggleNavDrawer} tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuList}
            </ul>
          </div>
          <Link href={"#"}>
            <Image
              src={logo}
              alt="this is logo of the website"
              width={150}
              height={36}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuList}</ul>
        </div>
        <div className="navbar-end">
          <Link href={"#"} className="btn">
            Became a Seller{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
