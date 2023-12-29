import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            <div>
                <h1 className="text-myheading text-3xl title-font font-bold mb-4 text-center mt-5">
                    Our Product & Services
                </h1>
                <div className="flex mt-2 justify-center ">
                    <div className="w-64 h-1 rounded-full bg-mysubheading inline-flex mb-5 " />
                </div>
            </div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-3 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

                            <div>
                                <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-mysubheading uppercase'>fire & safety</h1>
                                <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>hydrant & sprinkler system</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Fire Alarm, Detection & Aspiration System</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '> Water Mist System </li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '> Fire Fighting Vehicles</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Foam Suppression System</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Gaseous Suppression System</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Gas Detection System</li></Link>
                                </ol>

                            </div>

                        </div>
                        <Image src={'/assest/FIRE.jpg'} alt="logo" width={480} height={180} className='rounded-xl' />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-3 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

                            <div>

                                <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-mysubheading uppercase'>PIPE & FITTINGS</h1>
                                <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>uPVC Drainage—Pressure Pipes & Fittings</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>uPVC Pipes & Fittings</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>PPR Pipes & Fittings</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>PE-Polyethylene Pipes & Fittings</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>GRP Pipes & Fittings</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>ABS Pipes & Fittings</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>G.I. Pipes & Fittings</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>M.S Pipes & Fittings</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Stainless Steel Pipes & Fittings</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Special Alloy Pipes & Fittings</li></Link>
                                </ol>
                            </div>

                        </div>
                        <Image src={'/assest/PIPE.jpg'} alt="logo" width={485} height={80} className='rounded-xl' />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-3 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

                            <div>
                                <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-mysubheading uppercase'>WATER & WASTE WATER TREATMENT PLANT </h1>
                                <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>R.O Plants</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '> Filtration / Ultra Filtration Plants </li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Waste Water Treatment Plants </li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '> Membrane Biological Reactors</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Sequential Batch Reactor</li></Link>
                                </ol>
                            </div>

                        </div>
                        <Image src={'/assest/water.jpg'} alt="logo" width={485} height={80} />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-3 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

                            <div>
                                <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-mysubheading uppercase'>VALVES </h1>
                                <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>All Types Of Valves& Accessories</li></Link>
                                </ol>
                            </div>

                        </div>
                        <Image src={'/assest/valves.jpg'} alt="logo" width={485} height={80} className='rounded-xl' />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-3 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

                            <div>
                                <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-mysubheading uppercase'>HVAC</h1>
                                <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Sheet metal duct work</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '> Chilled water piping & installation</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Duct work insulation
                                        Air devices, diffusers, dampers & etc</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '> Split units, copper piping & insulation</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Air handling unit, fan coil unit & VRF chillers, cooling towers, pumps, valves etc</li></Link>
                                    <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '> Fresh & exhaust air fans, smoke fans, ventilation fans, ventilation fans Building management system</li></Link>
                                </ol>
                            </div>

                        </div>
                        <Image src={'/assest/HVAC.jpg'} alt="logo" width={485} height={80} className='rounded-xl' />
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-myheading capitalize">
                           electro medical equipment
                        </h1>
                        <div className="flex mt-2 justify-center ">
                            <div className="w-64 h-1 rounded-full bg-mysubheading inline-flex mb-5 " />
                        </div>

                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-myheading border-opacity-60">
                            <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>ICU Beds</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Orthopedic Beds</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Pediatric Beds</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Manual Beds</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Dialysis Chair</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Transfusion Chair</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Dental Unit Chair</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Examination Couch</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>OT Table</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Delivery Table</li></Link>

                            </ol>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-myheading border-opacity-60">
                            <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>OT Light</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>ENT Unit</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Short Wave Diathermy</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Surgical Diathermy</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Patient Monitor</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Infant Incubatorr</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Transport Incubator</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Suction Machine</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>ECG Machine</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Medical Graded LCDs / LEDs</li></Link>


                            </ol>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-myheading border-opacity-60">
                            <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Fetus Doppler</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>ETT Machine</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Infant Warmer</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Ventilator</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Video Nasopharyngoscope</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Neuro Drill</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>EEG</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Steam Sterilizer</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Autoclave</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Surgical Diathermy</li></Link>

                            </ol>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-myheading border-opacity-60">
                            <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>CSSD System</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Laundry System </li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Spirometer</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>DLCO Unit</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Plethysmograph</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>FENO</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>RESMON</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Ergocard (CPET/CPX)</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Incinerator</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Aviation Refueling</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Equipment</li></Link>

                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-myheading capitalize">
                            other products & services
                        </h1>
                        <div className="flex mt-2 justify-center ">
                            <div className="w-64 h-1 rounded-full bg-mysubheading inline-flex mb-5 " />
                        </div>

                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-myheading border-opacity-60">
                            <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Air Compressor </li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Boiler </li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Gas Burners</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Corrosion Control System</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Catalyst</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 '>Centrifugal Pumps</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Cranes & Materials Handling Equipment</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Cooling Towers</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Internal Floating Roof</li></Link>
                            </ol>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-myheading border-opacity-60">
                            <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Furnaces</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Gas Chromatographers</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Graphite Packing</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Heat Exchangers</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Heaters</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Instrument Cable</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Industrial Power System</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Loading Arms</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Dished Heads</li></Link>
                            </ol>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-myheading border-opacity-60">
                            <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Electronics Components</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Expansion Bellow / Joints </li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'> Explosion Proof Material</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Filters</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Finned Tubes</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Floating Roof / Screen</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Flow Meters</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Fluid Handling Equipment</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Fuel/Gas Filling Machines</li></Link>
                                

                            </ol>
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-myheading border-opacity-60">
                            <ol className='leading-7 [&:not(:first-child)]:mt-6 capitalize text-lg text-mytext'>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Marine Fenders</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Mass Transfer Equipment</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Mixers & Motors</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Plant Equipment</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Power Cables</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Pressure Vessels</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Separators</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Steam Turbines</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Transformers</li></Link>
                                <Link href={"/contactus"}><li className='my-6 ml-9 list-disc [&>li]:mt-2 capitalize'>Vacuum Systems</li></Link>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Page
