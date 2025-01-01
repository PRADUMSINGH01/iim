"use client";

const Invoice = ({
  BussiName,
  Image,
  BussiMail,
  BussiAddOne,
  BussiAddTwo,
  CustoName,
  CustoMail,
  CustoAddOne,
  CustoAddTwo,
  Price,
  items,
}) => {
  return (
    <div className="w-full flex flex-col justify-around bg-white h-full ">
      <div className="w-full h-[2rem] bg-stone-200"> </div>
      <div className="flex justify-between  p-10 text-black mt-10">
        <span className="text-2xl tracking-wildest font-bold "> Invoice </span>
        <span> beginess logo </span>
      </div>
      <div className="flex justify-between text-black mt-10 p-10">
        <div className="flex flex-col justify-between items-start">
          <span> From</span>
          <span>Business Name</span>
          <span>Email </span>
          <span> Address One </span>
          <span> Address Two</span>
        </div>
        <div className="flex flex-col justify-between items-start">
          <span> From</span>
          <span>Business Name</span>
          <span>Email </span>
          <span> Address One </span>
          <span> Address Two</span>
        </div>
        <div className="flex flex-col justify-between items-start">
          <span> Number</span>
          <span>Date</span>
          <span>Email </span>
          <span> Address One </span>
          <span> Address Two</span>
        </div>
      </div>

      <hr className="w-[94%] ml-[3%] pl-10 pr-10" />

      <div className="flex flex-col w-[94%] ml-[3%] justify-between text-black mt-1  ">
        <div className=" flex justify-between bg-stone-200  p-2">
          <span> Discription </span>
          <div className="flex justify-between w-[20%]">
            <span> Price </span>
            <span> Qty. </span>
            <span> Amount</span>
          </div>
        </div>

        <div className=" flex w-full justify-between mt-1 p-2">
          <span> Discription </span>
          <div className="flex justify-between w-[20%]">
            <span> Price </span>
            <span> Qty. </span>
            <span> Amount</span>
          </div>
        </div>

        <div className=" flex w-full justify-between mt-1 p-2">
          <span> Discription </span>
          <div className="flex justify-between w-[20%]">
            <span> Price </span>
            <span> Qty. </span>

            <span> Amount</span>
          </div>
        </div>
      </div>
      <hr className="w-[94%] ml-[3%] pl-10 pr-10 h-1" />
      <div className="flex w-[100%] justify-end items-right text-black ">
        <div className=" flex flex-col w-[12%] justify-between mt-1 p-2">
          <span> Sub-Total </span>
          <div className="flex flex-col justify-start w-[20%]">
            <span> Tax(%) </span>
            <span className="font-bold "> Total </span>

            <span className="font-bold "> Due</span>
          </div>
        </div>

        <div className=" flex flex-col w-[11%] justify-between mt-1 p-2">
          <span> Discription </span>
          <div className="flex flex-col justify-between w-[20%]">
            <span> Price </span>
            <span> Qty. </span>

            <span className="font-bold "> Due</span>
          </div>
        </div>
      </div>

      <hr className="w-[94%] ml-[3%] pl-10 pr-10" />

      <div className="w-[94%] ml-[3%] h-full flex text-black justify-between mt-5 text-2xl mb-10 ">
        <p>Note:</p>
        <input
          className="textarea w-[70%] h-30  text-center bg-white  border-1"
          placeholder="Enter Notes here"
        ></input>
      </div>

      <div className="w-full h-[15rem]"> </div>
      <div className="w-full h-[2rem] bg-stone-200"> </div>
    </div>
  );
};

export default Invoice;
