"use client";

import Nav from "@/components/ProductUI/Nav/Nav";
export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-between min-h-screen p-8 gap-16  sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <div>
        <h1 className="text-7xl  text-pink-500  font-bold">
          {" "}
          Make your invo<span className="text-9xl">I</span>ce{" "}
        </h1>
        <p className=" absolute  right-72">
          <span className="bg-yellow-500 text-4xl p-2 border-4 border-t-yellow-200">
            N Second
          </span>
        </p>
      </div>
    </div>
  );
}
