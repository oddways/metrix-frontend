"use client"
import { useContext, useState } from "react"
import Image from "next/image"
import GlobalContext from "@/context/GlobalContext"
import Message from "./Containers/Message"
import MessageList from "./Containers/MessageList"

const Conversation = () => {
  const { toggleMessage, isDesktop, viewMessage, closeMessage } =
    useContext(GlobalContext)

  return (
    <div className="w-full min-h-screen bg-gray-100 flex gap-4">
      {/* Desktop */}
      <div className="w-full hidden lg:flex gap-4">
        <MessageList viewMessage={viewMessage} />
        <Message closeMessage={closeMessage} />
      </div>

      {/* Mobile */}
      <div className="w-full flex lg:hidden">
        {/* Left */}
        {toggleMessage === "list" && <MessageList viewMessage={viewMessage} />}

        {/* Right */}
        {toggleMessage === "message" && <Message closeMessage={closeMessage} />}
      </div>
    </div>
  )
}

export default Conversation
