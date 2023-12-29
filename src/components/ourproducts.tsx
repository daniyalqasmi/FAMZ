"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingcard from "./bestsellingprodectscard";


export default function Ourproducts() {
    const bestsell =
        [
            {
                src: "/assest/P-01.jpg",
                alt: "b1",
                title: "ICU Bed's",
            }
            ,
            {
                src: "/assest/P-02.jpg",
                alt: "b2",
                title: "Orthopedic Bed's",
            }
            ,
            {
                src: "/assest/P-03.jpg",
                alt: "b3",
                title: "Pediatric Bed's",
            }
            ,
            {
                src: "/assest/P-04.jpg",
                alt: "b2",
                title: "Manual Bed's",
            }
            ,
            {
                src: "/assest/P-05.jpg",
                alt: "b2",
                title: "Dialysis Chair",
            }
            ,
            {
                src: "/assest/P-06.jpg",
                alt: "b2",
                title: "Transfusion Chair",
            }
            ,
            {
                src: "/assest/P-07.jpg",
                alt: "b2",
                title: "Dental Unit Chair",
            }
            ,
            {
                src: "/assest/P-08.jpg",
                alt: "b2",
                title: "Examination Couch",
            }
            ,
            {
                src: "/assest/P-09.jpg",
                alt: "b2",
                title: "OT Table",
            }
            ,
            {
                src: "/assest/P-10.jpg",
                alt: "b2",
                title: "Delivery Table",
            }
            ,
            {
                src: "/assest/P-11.jpg",
                alt: "b2",
                title: "OT Light",
            }
            
            ,
            {
                src: "/assest/P-12.jpg",
                alt: "b2",
                title: "ENT Unit",
            }
            
            ,
            {
                src: "/assest/P-13.jpg",
                alt: "b2",
                title: "Short Wave Diathermy",
            }
            ,
            {
                src: "/assest/P-14.jpg",
                alt: "b2",
                title: "ECG Machine",
            }
            ,
            {
                src: "/assest/P-15.jpg",
                alt: "b2",
                title: "Ventilator",
            }
        ]
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="Products" className="mb-[100px] mt-[100px] ml-4 mr-4 ">
            <div className="text-center   ">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb- text-myheading capitalize text-center">
                OUR PRODUCTS
                </h1>
                <div className="flex mt-2 justify-center ">
                    <div className="w-16 h-1 rounded-full bg-mysubheading inline-flex mb-14" />
                </div>
            </div>
            <Slider {...settings}>
                {
                    bestsell.map((items, i) => (
                        <BestSellingcard
                            key={i}
                            src={items.src}
                            alt={items.alt}
                            title={items.title}
                        />
                    ))
                }
            </Slider>

        </div>
    )
}