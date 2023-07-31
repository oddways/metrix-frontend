import Conversation from "@/components/Conversation/Conversation"
import React from "react"

const Conversations = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-3 px-2 md:px-4 py-4 text-sm">
      {/* Top */}
      <div className="w-full flex items-center justify-between">
        <h1 className="darkText text-lg">Conversation</h1>
        <button className="py-2 px-6 text-xs rounded-2xl text-white bg-[#5570F1] hover:opacity-70 duration-300 ease-in-out">
          New Button
        </button>
      </div>

      {/* Main */}
      <Conversation />
    </div>
  )
}

export default Conversations
