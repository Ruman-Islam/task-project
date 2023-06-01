import Image from 'next/image';
import {IoIosArrowDown} from 'react-icons/io'
import unitedLogo from '../assets/united.png'
import Nav from './Nav';
const Navbar = () => {
    return (
        <>
            <div className="px-8 bg-white text-black">
                <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                    <div className="flex items-center gap-2">
                        <span>Account</span>
                        <span>Track Order</span>
                        <span>Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="m-1 flex items-center gap-1 cursor-pointer"> <Image src={unitedLogo} width={15} height={15} alt='image of united states'/> <span>United States</span> <IoIosArrowDown/></label>
                            <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-white border rounded-box w-52">
                                <li><a>United States</a></li>
                                <li><a>Bangladesh</a></li>
                                <li><a>India</a></li>
                            </ul>   
                        </div>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="m-1 flex items-center gap-1 cursor-pointer"><span>USD</span> <IoIosArrowDown/></label>
                            <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-white border rounded-box w-52">
                                <li><a>USD</a></li>
                                <li><a>BDT</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <label tabIndex={0} className="m-1 flex items-center gap-1 cursor-pointer"><span>Bangla</span> <IoIosArrowDown/></label>
                            <ul tabIndex={0} className="dropdown-content menu p-1 shadow bg-white border rounded-box w-52">
                                <li><a>Bangla</a></li>
                                <li><a>English</a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
            <hr/>
            <Nav/>
        </>
    );
};

export default Navbar;