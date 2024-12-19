"use client";
import { IoMdPaperPlane } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Nav from "@/components/ProductUI/Nav/Nav";
import Image from "next/image";
import L from "@/components/ProductUI/Image/l.png";
import { PDF } from "@/components/ProductUI/Invoice/PDF";
import Invoice from "@/components/ProductUI/Invoice/Invoice";
export default function Home() {
  return (
    <div className="bg-white flex flex-col w-full items-center justify-between min-h-screen  gap-16  sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <div className="flex items-center w-full justify-around">
        <div className="w-[50%] ">
          <h1 className="text-7xl text-center first-letter:text-9xl">
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

      <div className="flex justify-around w-full ">
        <Button>
          {" "}
          Create Invoice
          <IoMdPaperPlane className="text-pink-500 font-bold " />
        </Button>
        <Button>
          {" "}
          Explore Templates
          <IoMdPaperPlane className="text-pink-500 font-bold" />
        </Button>
      </div>
      <PDF pdf={<Invoice />} />
    </div>
  );
}
