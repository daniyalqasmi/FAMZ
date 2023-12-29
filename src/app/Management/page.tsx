import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="scroll-m-20 border-b border-mysubheading pb-2 text-3xl font-semibold tracking-tight first:mt-0 uppercase text-myheading">
              OUR Management
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-mytext">
              At IEC, all the employees are treated equally, and each one of team is responsible for
              the organizations success. With the extensive years of experience, higher
              qualifications, and deep understanding of the core business, IEC team has upraised
              industries to a different level:
            </p>
          </div>
          {/* CEO */}
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image src={require("../../../public/assest/CEO.jpg")}
                  alt="maincourse"
                  width={350}
                  height={350}
                  className="rounded-xl duration-500 group-hover:scale-125"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="scroll-m-20 border-b border-mysubheading pb-2 text-2xl font-semibold tracking-tight first:mt-0  text-myheading">
                    Muhammad Adeel Yousuf
                  </h2>
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight text-mysubheading">CEO</h3>
                </div>
              </div>
            </div>
            {/* General Manager */}
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image src={require("../../../public/assest/bilal-01.jpg")}
                  alt="maincourse"
                  width={350}
                  height={350}
                  className="rounded-xl duration-500 group-hover:scale-125"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="scroll-m-20 border-b border-mysubheading pb-2 text-2xl font-semibold tracking-tight first:mt-0  text-myheading">
                    Muhammad Bilal Raza
                  </h2>
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight text-mysubheading">General Manager</h3>
                </div>
              </div>
            </div>
            {/* Chief Finance Officer */}
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                {/* <Image src={require("../../../public/assest/bilal-01.jpg")}
                  alt="maincourse"
                  width={350}
                  height={350}
                  className="rounded-xl duration-500 group-hover:scale-125"
                /> */}
                <div className="flex-grow sm:pl-8">
                  <h2 className="scroll-m-20 border-b border-mysubheading pb-2 text-2xl font-semibold tracking-tight first:mt-0  text-myheading">
                  Syed Saad Feroz
                  </h2>
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight text-mysubheading">Chief Finance Officer</h3>
                </div>
              </div>
            </div>
            {/* Manager Technical */}
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                {/* <Image src={require("../../../public/assest/bilal-01.jpg")}
                  alt="maincourse"
                  width={350}
                  height={350}
                  className="rounded-xl duration-500 group-hover:scale-125"
                /> */}
                <div className="flex-grow sm:pl-8">
                  <h2 className="scroll-m-20 border-b border-mysubheading pb-2 text-2xl font-semibold tracking-tight first:mt-0  text-myheading">
                  Muhammad Mudassir
                  </h2>
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight text-mysubheading">Manager Technical</h3>
                </div>
              </div>
            </div>
            {/* Manager Sales & Marketing */}
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                {/* <Image src={require("../../../public/assest/bilal-01.jpg")}
                  alt="maincourse"
                  width={350}
                  height={350}
                  className="rounded-xl duration-500 group-hover:scale-125"
                /> */}
                <div className="flex-grow sm:pl-8">
                  <h2 className="scroll-m-20 border-b border-mysubheading pb-2 text-2xl font-semibold tracking-tight first:mt-0  text-myheading">
                  Muhammad Shahzad
                  </h2>
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight text-mysubheading">Manager Sales & Marketing</h3>
                </div>
              </div>
            </div>
            {/* Manager Accounts */}
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                {/* <Image src={require("../../../public/assest/bilal-01.jpg")}
                  alt="maincourse"
                  width={350}
                  height={350}
                  className="rounded-xl duration-500 group-hover:scale-125"
                /> */}
                <div className="flex-grow sm:pl-8">
                  <h2 className="scroll-m-20 border-b border-mysubheading pb-2 text-2xl font-semibold tracking-tight first:mt-0  text-myheading">
                  Muhammad Saeed
                  </h2>
                  <h3 className="scroll-m-20 text-lg font-semibold tracking-tight text-mysubheading">Manager Accounts</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Page
