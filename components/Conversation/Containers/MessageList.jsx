"use client"
import { useState } from "react"
import Image from "next/image"

const MessageList = ({ viewMessage }) => {
  const [searchVal, setSearchVal] = useState("")
  return (
    <>
      <div className="w-full  lg:w-[400px] h-fit bg-white rounded-2xl shadow-sm shadow-gray-700 py-3 px-2 md:px-4">
        {/* header */}
        <section className="flex items-center justify-between">
          <h1 className="darkText font-semibold">Contact</h1>
          <p className="lighText">34</p>
        </section>

        {/* Search menu */}
        <section className="w-full relative mt-3">
          <input
            type="text"
            placeholder="Search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full rounded-lg text-xs px-2 py-3 border border-gray-400 placeholder:text-xs"
          />
        </section>

        {/* Message List */}
        <section
          className="w-full px-2 h-fit mt-4 py-2 flex items-center rounded-md border-b border-gray-300 cursor-pointer hover:bg-gray-300 duration-500 ease-in-out"
          onClick={viewMessage}
        >
          <section className="flex gap-2 items-center">
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
              <p className="normalText text-xs">
                Hi, i want to make enquires about yo..
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-2 items-center">
            <p className="text-xs bg-yellow-200 px-2 py-1 rounded-xl">New</p>
            <p className="lightText text-xs whitespace-nowrap">12:55 am</p>
          </section>
        </section>
      </div>
    </>
  )
}

export default MessageList
