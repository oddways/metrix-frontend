"use client"
import {
  BsBagDash,
  BsFillEmojiSmileFill,
  BsFillSendFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs"
import Image from "next/image"

const Message = ({ closeMessage }) => {
  return (
    <>
      <div className="w-full  h-[80vh] bg-white rounded-2xl shadow-sm shadow-gray-700 py-3 px-2 lg:px-4 ">
        {/* Top */}
        <section className="w-full pb-3 border-b border-gray-300 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <BsFillArrowLeftCircleFill
              size={20}
              color="#5570F1"
              className="hover:opacity-75 cursor-pointer"
              onClick={closeMessage}
            />
            <div className=" w-[20%] h-full relative z-10">
              <Image
                src={"/images/iphone13.jpg"}
                alt="iphone"
                width={100}
                height={100}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="darkText">Jane Doe</p>
              <div className="flex items-center gap-2 normalText text-xs">
                <p className="lightText">Online</p>
                <p>12:55 am</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end gap-2 text-xs">
            <div className="flex items-center gap-2">
              <p className="p-1 bg-yellow-200 rounded-md text-[10px] lg:text-xs whitespace-nowrap normalText">
                New Customer
              </p>
              <p className=" text-[#5570F1] cursor-pointer hover:underline hover:opacity-70 whitespace-nowrap">
                View Profile
              </p>
            </div>
            <div className="flex items-end gap-3">
              <div className="flex items-center gap-1 lightText">
                <BsBagDash size={15} />
                <p>0 order</p>
              </div>
            </div>
          </div>
        </section>

        {/* Center */}
        <section className="w-full h-[60vh] lg:h-[55vh] overflow-y-scroll  flex flex-col gap-2 mt-3">
          {/* Date */}
          <div className="w-full flex items-center justify-center">
            <p className="px-4 py-1 text-xs darkText bg-gray-200 rounded-lg">
              12 August 2022
            </p>
          </div>
          {/* STOCK */}
          <div className="w-[70%] lg:w-[50%] flex items-center justify-between mt-2 pb-2 border-b border-gray-300">
            <section className="flex gap-2 items-center">
              <div className=" w-[20%] h-full relative z-10">
                <Image
                  src={"/images/iphone13.jpg"}
                  alt="iphone"
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col text-xs gap-2">
                <p className="lightText">iPhone 13</p>
                <p className="darkText font-semibold">N730,000.00 x 1</p>
              </div>
            </section>
            <section className="flex flex-col items-end justify-end h-full gap-2">
              <p className="text-xs">
                <span className="text-[#5570F1]">12</span> in Stock
              </p>
            </section>
          </div>

          {/*Left  Message  */}
          <div className="w-[70%] lg:w-[50%] mt-3 flex flex-col items-start gap-1 text-xs">
            <div className="w-full lg:w-[70%] flex flex-col items-center justify-center rounded-tr-2xl rounded-tl-2xl rounded-br-2xl h-[60px] bg-[#5570F1] text-xs text-white px-2 py-5    ">
              Hello, I want to make enquires about your product
            </div>
            <p className="lighText">12:55am</p>
          </div>

          {/*1 Right message */}
          <div className="w-full mt-1 flex flex-col items-end gap-1 text-xs">
            <div className="w-fit flex flex-col items-center justify-center rounded-tr-2xl rounded-tl-2xl rounded-br-2xl h-[60px] bg-yellow-200 text-xs text-black px-2 py-5    ">
              Hello, I want to make enquires about your product
            </div>
            <p className="lighText">12:55am</p>
          </div>

          {/* 2 Right Message */}
          <div className="w-full mt-1 flex flex-col items-end gap-1 text-xs">
            <div className="w-fit flex flex-col items-center justify-center rounded-tr-2xl rounded-tl-2xl rounded-br-2xl h-[60px] bg-yellow-200 text-xs text-black px-2 py-5">
              What do you need to know?
            </div>
            <p className="lighText">12:55am</p>
          </div>

          {/* Date */}
          <div className="w-full flex items-center justify-center">
            <p className="px-4 py-1 text-xs darkText bg-gray-200 rounded-lg">
              Today
            </p>
          </div>

          {/* 2 Left Message */}
          <div className="w-[70%] lg:w-[50%] mt-3 flex flex-col items-start gap-1 text-xs">
            <div className="w-full lg:w-[70%] flex flex-col items-center justify-center rounded-tr-2xl rounded-tl-2xl rounded-br-2xl h-[60px] bg-[#5570F1] text-xs text-white px-2 py-5    ">
              I want to know if the price is negotiable, i need 2 units
            </div>
            <p className="lighText">12:55am</p>
          </div>
        </section>

        {/* Bottom */}
        <section className="w-full mt-3 border border-gray-300 h-fit flex gap-2 items-center p-1 rounded-xl">
          <p className="px-3 py-2 hover:opacity-75 cursor-pointer text-black bg-yellow-200 rounded-xl">
            +
          </p>
          <input
            type="text"
            placeholder="Your message"
            className="w-full text-xs placeholder:text-xs px-2 py-2  focus:outline-none"
          />
          <BsFillEmojiSmileFill
            size={20}
            color="#5570F1"
            className="cursor-pointer"
          />
          <button className="flex items-center gap-1 px-4 py-2 bg-yellow-200 group w-[100px] hover:bg-[#5570F1] whitespace-nowrap rounded-xl text-xs">
            <p className="group-hover:text-white">Send</p>
            <BsFillSendFill
              size={10}
              color="black"
              className="group-hover:fill-white"
            />
          </button>
        </section>
      </div>
    </>
  )
}

export default Message
