import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavigationMenuDemo } from './navelinks'

const Navebar = () => {
    return (
        <div className="ml-4 mr-4 ">

            <div className="navbar bg-base-100 bg-mywhite">
                <div className='navbar-start'>
                    <Link href={"/Home"} className=" text-xl"><Image src={'/assest/logo_famz-01-01.png'} alt="logo" width={180} height={180} /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <NavigationMenuDemo />
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-end text-myblue">
                        <label tabIndex={0} className="p-0 text-2xl lg:hidden bg-myblack text-myblue">
                            <GiHamburgerMenu />
                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={"/home"}>Home</Link></li>
                            <li><Link href={"/Product&Services"}>PRODUCT & SERVICES</Link></li>
                            <li><Link href={"/About"}>About</Link></li>
                            <li><Link href={"/Management"}>MANAGEMENT</Link></li>
                            <li><Link href={"/contactus"}>Contact Us</Link></li>
                        </ul>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Navebar