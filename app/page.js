"use client";
import { IoMdPaperPlane } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Nav from "@/components/ProductUI/Nav/Nav";
import Image from "next/image";
import L from "@/components/ProductUI/Image/l.png";
import { PDF } from "@/components/ProductUI/Invoice/PDF";
import Invoice from "@/components/ProductUI/Invoice/Invoice";
import Stepper from "@/components/ProductUI/stepper/Stepper";
import Arrow from "@/components/ProductUI/Image/a.png";
import Footer from "@/components/ProductUI/Footer/Footer";
import { CarouselSize } from "@/components/ProductUI/Caru/caru";
import FAQ from "./FAQ/page";

export default function Home() {
  return (
    <>
      <div className="bg-white flex flex-col w-full items-center justify-between h-full mb-4  md:gap-16  sm:p-20 font-[family-name:var(--font-geist-sans)] ">
        <div className="flex flex-col md:flex-row items-center w-full justify-around">
          <div className="w-[70%] md:w-[50%] mt-20">
            <h1 className="text-3xl md:text-7xl text-center md:first-letter:text-9xl">
              {" "}
              Get your{" "}
              <span className="bg-pink-500 text-white  rounded-md ">
                {" "}
                Invoice
              </span>{" "}
              In a Second .
            </h1>
          </div>
          <Image src={L} width={500} height={500} alt="Loading" />
        </div>

        <div className="flex justify-around w-full mt-5 p-2">
          <Button>
            {" "}
            Create Invoice
            <IoMdPaperPlane className="text-pink-500 font-bold " />
          </Button>
          <Button>
            {" "}
            Explore Templates
            <IoMdPaperPlane className="text-pink-500 font-bold " />
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around p-5  w-full ">
        <div className="ml-20">
          <Stepper />
        </div>
        <div className="flex flex-col   text-center justify-around w-full md:w-[35%] mb-10 relative">
          <h1 className="text-4xl md:text-6xl md:first-letter:text-9xl ">
            {" "}
            Complete Only Once. Download Every time{" "}
            <span className="bg-pink-500 p-1 text-white  rounded-md m-1">
              FREE
            </span>
          </h1>
          <p className="text-2xl text-center mt-3 ">
            Getting your Invoice Ready In on <button>Click</button>
          </p>
          <Image
            src={Arrow}
            width={100}
            height={10}
            className=" w-[6rem] md:w-[6rem] absolute  md:top-[21rem] top-44  mt-1   md:right-6 right-36 -z-10"
          />
        </div>
      </div>

      <CarouselSize />

      <FAQ />
      <Footer />
    </>
  );
}
