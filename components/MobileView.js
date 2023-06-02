import Image from 'next/image';
import React from 'react';
import lock from '../assets/lock.svg'
import styles from '@/styles/navbar.module.css'
import { AiOutlineBars } from 'react-icons/ai';
import logo from '../assets/logo.svg'
import Link from 'next/link';
const MobileView = ({toggleNavDrawer}) => {
    return (
        <div className='lg:hidden flex items-center justify-between mt-4 px-2'>
            <AiOutlineBars onClick={toggleNavDrawer}/>
            <Link href={"/"}><Image src={logo} alt='logo of the page' width={151} height={36} /></Link>
            <div className={styles.iconContainer}>
                <div>
                    <Image src={lock} alt='refrsh image' width={20} height={20} />
                    <span>15</span>
                </div>
            </div>
        </div>
    );
};

export default MobileView;