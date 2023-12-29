import Image from "next/image";
import Link from "next/link";
import { ImHeart } from "react-icons/im"
import { PiShoppingBagFill } from "react-icons/pi"


export default function BestSellingcard(
    {
        src,
        alt,
        title,
    }:
        {
            src: string,
            alt: string,
            title: string,
        }) {
    return (
        <div className="max-w-[350px] h-[25rem]  p-4 mx-auto shadow-myheading shadow-md relative rounded-xl  group bg-mytext/40 ">
            <Link href={`#`}>
            {/* image */}
            <div className="block h-[23rem rounded overflow-hidden]">
                <Image src={src} alt="kuch nahi" width={400} height={400} />
            </div>
            {/* typography */}
            <div className="card-body">
                {/* title */}
                <h2 className="mt-5 scroll-m-20 border-mysubheading border-b text-lg  font-extrabold tracking-tight transition-colors first:mt-0 text-myheading text-center line-clamp-1 uppercase">{title}</h2>
                {/* description
                <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-white line-clamp-2">{description}</p>
                {/* price */}
                {/* <p className="scroll-m-20 text-base font-semibold tracking-tight text-white line-clamp-1">Rs{price}</p>  */}
            </div>
            </Link>
            {/* buttons
            <div>
                <Button className="group bg-white hover:bg-transparent text-mybg hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute right-2 bottom-2">
                    <PiShoppingBagFill className="mr-2 h-8 w-8 group-hover:text-orange-600 duration300" />
                    Add to card
                </Button>
                <Button className="group bg-white hover:bg-transparent text-mybg hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2">
                    <ImHeart className="mr-2 h-8 w-8 group-hover:text-orange-600 duration300" />
                    By Now
                </Button>

            </div> */}
            
        </div>
    )
} 