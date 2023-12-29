import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="ml-4 mr-4">
            <footer className="text-myred body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="scroll-m-20 text-2xl font-extrabold  tracking-tight text-myheading mb-3">
                                QUICK LINKS
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/Home"} className="text-mysubheading hover:text-myhover scroll-m-20 text-lg font-semibold  tracking-tight mb-2">Home</Link>
                                </li>
                                <li>
                                    <Link href={"/About"} className="text-mysubheading hover:text-myhover scroll-m-20 text-lg font-semibold  tracking-tight mb-2">About</Link>
                                </li>
                                <li>
                                    <Link href={"/contactus"} className="text-mysubheading hover:text-myhover scroll-m-20 text-lg font-semibold  tracking-tight mb-2">Contact Us</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-2xl font-extrabold  tracking-tight text-myheading mb-3">
                               MAIN PAGE LINKS
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"#Products"} className="text-mysubheading hover:text-myhover scroll-m-20 text-lg font-semibold  tracking-tight mb-2">OUR PRODUCTS</Link>
                                </li>
                                <li>
                                    <Link href={"#Customers"} className="text-mysubheading hover:text-myhover scroll-m-20 text-lg font-semibold  tracking-tight mb-2">OUR CUSTOMERS</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-2xl font-extrabold  tracking-tight text-myheading mb-3">
                                CONTACT US
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/"} className="text-mysubheading scroll-m-20 text-lg font-bold  tracking-tight"><span className="capitalize font-bold mb-2 ">telephone:- </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-mytext scroll-m-20 text-md font-semibold  tracking-tight">+92 300 8227 012<br />
                                    +92 331 2788 903</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-mysubheading  scroll-m-20 text-lg font-semibold  tracking-tight"><span className="capitalize font-bold mr-4 ">E-Mail </span>

                                    </Link>
                                </li>

                                <li>
                                    <Link href={"/"} className="text-mytext  scroll-m-20 text-md font-semibold  tracking-tight">info@famz.net.pk</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-mytext  scroll-m-20 text-md font-semibold  tracking-tight">adeel@famz.net.pk</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-mysubheading  scroll-m-20 text-lg font-semibold  tracking-tight"><span className="capitalize font-bold mr-4 ">Web:- </span>

                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-mytext  scroll-m-20 text-md font-semibold  tracking-tight">www.famz.net.com</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <Link href={"/Home"} className="flex title-font font-medium items-center md:justify-start justify-center text-myheading ">
                                <Image src={'/assest/logo_famz-01-01.png'} alt="logo" width={200} height={200} />

                            </Link>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <Link href={"/Home"} className="flex title-font font-medium items-center md:justify-start justify-center text-myheading">
                            <Image src={'/assest/logo_famz-01-01.png'} alt="logo" width={150} height={150} />

                        </Link>
                        <p className="text-md text-mytext sm:ml-6 sm:mt-0 mt-4 font-semibold">
                            © 2023 FAMZ | Powered by<span className="ml-3 text-md font-bold text-myheading">FAMZ</span>
                        </p>
                        
                    </div>
                </div>
            </footer >

        </div >
    )
}