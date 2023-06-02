import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { AiOutlineBars } from 'react-icons/ai'
import Image from "next/image";
import menuThum from "../assets/mega-menu-thumb.jpg";
import styles from '@/styles/navbar.module.css'
import game from '../assets/game.svg'
const Nav = ({ toggleNavDrawer }) => {
  const [openMenu, setOpenMenu] = useState(false)


  const handleCat = () => {
    setOpenMenu(!openMenu)
  }

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
          <div className="bg-white shadow grid grid-cols-4 w-[1168px] absolute top-1 left-[-40vw]">
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
                height={500}
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
    <div className="bg-[#ffbb38]">
      <div className={`navbar px-8 py-2  ${styles.navContainer}`}>
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
          <div className={`${styles.categoryContainer}`}>
            <button onClick={() => handleCat()} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[52px] rounded">
              <div className="flex gap-3 items-center">
                <AiOutlineBars />
                <span>All Categories</span>
              </div>
              <IoIosArrowDown />

            </button>
            <div className={`${styles.listContainer} ${openMenu ? styles.active : ''}`}>
              <ul>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Mobile & Laptops</span>
                    </div>
                    <IoIosArrowForward />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Gaming Entertainment</span>
                    </div>
                    <IoIosArrowForward />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Image & Video</span>
                    </div>
                    <IoIosArrowForward />
                  </Link>
                </li><li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Vehicles</span>
                    </div>
                    <IoIosArrowForward />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Furnitures</span>
                    </div>
                    <IoIosArrowForward />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Sport</span>
                    </div>
                    <IoIosArrowForward />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Food & Drinks</span>
                    </div>
                    <IoIosArrowForward />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Fashion Accessories</span>
                    </div>
                    <IoIosArrowForward />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Toilet & Sanitation</span>
                    </div>
                    <IoIosArrowForward />
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Makeup Corner</span>
                    </div>
                    <IoIosArrowForward /> 
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="flex justify-between items-center flex p-2 bg-white w-[270px] h-[40px]">
                    <div className="flex gap-3 items-center">
                      <Image src={game} alt="img" width={12} height={16} />
                      <span className="text-[12px]">Baby Items</span>
                    </div>
                    <IoIosArrowForward /> 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuList}</ul>
        </div>
        <div className="navbar-end">
          <Link href={"#"} className={styles.sellerBtn}>
           <span> Became a Seller</span>
            <IoIosArrowForward/> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
