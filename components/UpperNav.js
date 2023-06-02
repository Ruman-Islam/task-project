import React from 'react';
import logo from '../assets/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import refresh from '../assets/refresh.svg'
import love from '../assets/love.svg'
import lock from '../assets/lock.svg'
import user from '../assets/user.svg'
import styles from '@/styles/navbar.module.css'
const UpperNav = () => {
    return (
        <div className={`flex items-center justify-between py-6 ${styles.uppernavCon} ${styles.navContainer}`}>
            <div>
                <Link  href={"/"}><Image src={logo} alt='logo of the page' width={151} height={36} /></Link>
            </div>
            <div className={`${styles.formController} border min-w-[517px]`}>
                <input type='text' placeholder='Search Product...'/>
                <select className='border-l text-gray-400' name="cars" id="cars">
                    <option defaultValue="volvo">All Categories</option>
                </select>
                <button>Search</button>
            </div>
            <div className={styles.iconContainer}>
                <div>
                    <Image src={refresh} alt='refrsh image' width={20} height={20} />
                    <span>2</span>
                </div>
                <div>
                    <Image src={love} alt='refrsh image' width={20} height={20} />
                    <span>1</span>
                </div>
                <div>
                    <Image src={lock} alt='refrsh image' width={18} height={18} />
                    <span>1</span>
                </div>
                <div>
                    <Image src={user} alt='refrsh image' width={20} height={20} />
                </div>
            </div>
        </div>
    );
};

export default UpperNav;