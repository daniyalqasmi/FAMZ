import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0 text-myheading mb-8" >
                            About <span className="font-bold text-mysubheading">FAMZ</span>

                        </h1>
                        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-mytext align-text-top">
                            <span className="font-bold text-mysubheading">FAMZ</span> is a professional service provider to the Textile, Pharmaceutical, Aviation and
                            healthcare industries, positioned to serve both the public and private sector with
                            particular focus on Fire Fighting, Aviation Equipment, PME, mobile and alternative
                            healthcare facilities and medical equipment.
                            <br />
                            <br />

                            We supply and maintain Fire Fighting, Aviation, PME and medical equipment and
                            mobile healthcare facilities offering turnkey solutions to our clients.
                            <br />
                            <br />
                            <span className="font-bold text-mysubheading">FAMZ</span> represents various leading brands with strategic healthcare partners in Pakistan.
                            We have strategic partnerships in order to provide software solutions to different sector
                            that include practice management, workflow and primary healthcare software.
                            <br />
                            <br />
                            <span className="font-bold text-mysubheading">FAMZ</span> also offers turnkey solutions related to the industry / hospital development and
                            planning. Our commitment is to deliver a fair and professional service, with the
                            necessary support afterwards. Our team of experts include people with a wealth of
                            experience in various segments of the industry / hospitals.
                            <br />
                            <br />
                            <span className="font-bold text-mysubheading">FAMZ</span> is as a results well-resourced to offer a turnkey solution to ensure customer
                            satisfaction related to sales, service and training. Our aim is to build long-term
                            relationships with our customers to ensure enduring sustainable relationships.
                            <br />
                            <br />
                            <span className="font-bold text-mysubheading">FAMZ</span> supplies, installs, services and maintains various types of medical and industrial
                            equipment and products for the Pakistan Market.
                            <br />
                            <br />
                            In medical field, we supply and maintain Therapeutic, diagnostic, monitoring, lifesaving
                            equipment, mobile healthcare equipment, aesthetic equipment and biomedical test
                            equipment.
                            <br />
                            <br />
                            <span className="font-bold text-mysubheading">FAMZ</span> also assist in hospital/facility development and planning. Our commitment is to
                            deliver a fair and integrated service, with the latest data available, based on scientific
                            facts and professional opinion backed up by our extensive experience.
                            <br />
                            <br />
                            Our team of experts include people with a wealth of experience in various segments of
                            the industry. With over 15 years of combined experience in sales, service and repair of
                            medical and industrial equipment, <span className="font-bold text-mysubheading">FAMZ</span> has a strong technical division which offers aftersales support and training.
                            <br />
                            <br />
                            <span className="font-bold text-mysubheading">FAMZ</span> is committed to deliver a professional service in the fields of sales, service and
                            training to ensure customer satisfaction. Our aim is to build long term relationships with
                            our customers to ensure enduring partnerships between <span className="font-bold text-mysubheading">FAMZ</span> and our customers.
                        </p>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Link href={"#"} className=" text-xl"><Image src={'/assest/logo_famz1-01.png'} alt="logo" width={380} height={380} /></Link>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Page
