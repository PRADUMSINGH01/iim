import * as React from "react";
const arr = [1, 2, 3];
import { Button } from "@/components/ui/button";
export function CarouselSize() {
  const [count, setcount] = React.useState(0);
  function Add() {
    setcount(count + 1);
  }
  function sub() {
    setcount(count - 1);
  }
  return (
    <>
      <h1 className=" text-center text-2xl md:text-6xl m-3 ">
        Some Templates{" "}
      </h1>
      <div className="flex justify-around items-center px-10 text-black font-[family-name:var(--font-geist-sans)] overflow-hidden">
        <Button onClick={sub} className="">
          Prev Template
        </Button>
        <div className="  overflow-hidden h-full  border shadow-md  flex items-center justify-center mb-10">
          <div className="w-[40rem]  h-[35rem] border shadow-md shadow-stone-500">
            {arr[count]}
          </div>
        </div>
        <Button> Next Invoice</Button>
      </div>
    </>
  );
}
