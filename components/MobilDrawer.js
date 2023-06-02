import Image from 'next/image';
import React from 'react';
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import refresh from '../assets/refresh.svg'
import love from '../assets/love.svg'
import styles from '@/styles/navbar.module.css'
import game from '../assets/game.svg'
import { ImCross } from 'react-icons/im'
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
const MobilDrawer = ({ isNavOpen, toggleNavDrawer,setIsNavOpen }) => {
  const handleDrawer = ()  =>{
    setIsNavOpen((prevState) => !prevState);
  }
  return (
    <Drawer
      open={isNavOpen}
      onClose={toggleNavDrawer}
      direction="left"
      duration={300}
      overlayOpacity={0.7}
      lockBackgroundScroll
      size={300}
    >
      <div className='p-4'>
        <div className='flex justify-between items-center py-2'>
          <div className={styles.iconContainer}>
            <div className='flex items-center gap-2'>
              <div>
                <Image src={refresh} alt='refrsh image' width={20} height={20} />
                <span>2</span>
              </div>
              <div>
                <Image src={love} alt='refrsh image' width={20} height={20} />
                <span>1</span>
              </div>
            </div>
          </div>
          <span onClick={() => handleDrawer()} className='bg-red-600 p-2 rounded-full text-white font-bold'>
            <ImCross />
          </span>
        </div>
        <div className={`${styles.formController} my-4`}>
          <input type='text' placeholder='Search Product...' />
          <button>Search</button>
        </div>
        <div className='flex justify-between items-center py-2 px-8'>
          <h2>Category</h2>
          |
          <h2>Main Menu</h2>
        </div>

        <div className={`${styles.listContainer} ${styles.active}`}>
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

    </Drawer>
  );
};

export default MobilDrawer;