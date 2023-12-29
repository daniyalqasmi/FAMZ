import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Ourcustomers = () => {
    return (
        <div id='Customers'>
            <div className="mb-[100px] mt-[100px]">
                <div className="text-center mb-15  ">
                    <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-myheading">
                        OUR CUSTOMERS
                    </h1>
                    <div className="flex mt-2 justify-center">
                        <div className="w-16 h-1 rounded-full bg-mysubheading inline-flex" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={require("../../public/assest/pak-air-01.jpg")}
                                alt="maincourse"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">PAK air force</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">pak air force</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={require("../../public/assest/Pak-Navy.jpg")}
                                alt="maincourse"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">PAK air force</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">pak air force</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={require("../../public/assest/KRL-01.jpg")}
                                alt="maincourse"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">KRL Hospital, Islamabad</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">KRL Hospital, Islamabad</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={require("../../public/assest/brookes-01.jpg")}
                                alt="maincourse"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">Brooks Pharma</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">Brooks Pharma</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={require("../../public/assest/cardiology-01.jpg")}
                                alt="maincourse"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">AFIC</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">AFIC</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={require("../../public/assest/urology.jpg")}
                                alt="maincourse"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">AFIU</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-2xl font-extrabold tracking-tight   text-center text-myheading bg-mytext rounded-md w-full">
                                <h1 className="uppercase">AFIU</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourcustomers
