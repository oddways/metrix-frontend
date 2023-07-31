"use client"
import { createContext, useState } from "react"

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [toggleMessage, setToggleMessage] = useState("list")

  const handleToggleNav = () => {
    setToggleNav((prev) => !prev)
    setIsDesktop((prev) => !prev)
  }

  const viewMessage = () => {
    setToggleMessage("message")
    setIsDesktop(true)
  }

  const closeMessage = () => {
    setToggleMessage("list")
    setIsDesktop(false)
  }

  const value = {
    toggleNav,
    handleToggleNav,
    isDesktop,
    toggleMessage,
    viewMessage,
    closeMessage,
  }
  return (
    <GlobalContext.Provider value={value}> {children}</GlobalContext.Provider>
  )
}

export default GlobalContext
