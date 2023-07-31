"use client"
import { createContext, useState } from "react"

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [toggleNav, setToggleNav] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  const handleToggleNav = () => {
    setToggleNav((prev) => !prev)
    setIsDesktop((prev) => !prev)
  }

  const value = { toggleNav, handleToggleNav, isDesktop }
  return (
    <GlobalContext.Provider value={value}> {children}</GlobalContext.Provider>
  )
}

export default GlobalContext
