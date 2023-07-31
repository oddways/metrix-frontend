"use client"
import { useContext } from "react"
import GlobalContext from "@/context/GlobalContext"
import { GiChameleonGlyph, GiHamburgerMenu } from "react-icons/gi"

import { BsBag, BsPeople, BsChatDots } from "react-icons/bs"
import { MdOutlineInventory2 } from "react-icons/md"
import { FiSettings } from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"

const SideBar = () => {
  const { toggleNav, isDesktop, handleToggleNav } = useContext(GlobalContext)
  return (
    <div
      className={`${
        toggleNav
          ? "absolute md:relative top-0 left-0 w-[300px] md:w-[400px] lg:w-[300px] "
          : "relative w-[80px] "
      } shadow-sm shadow-black md:flex z-50 bg-white flex-col items-start py-5 px-3    w-[100px] md:w-[100px] min-h-screen duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <GiChameleonGlyph size={30} />
        {toggleNav && <p className="darkText text-2xl font-semibold">Metrix</p>}
      </div>

      {/* Route List */}
      <div className="mt-[70px] flex flex-col items-center gap-2">
        <div
          className={`${
            toggleNav ? "w-[200px]" : ""
          } flex gap-3 px-4 py-2 items-center border border-blue-400  rounded-xl blueContainer`}
        >
          <GiChameleonGlyph size={toggleNav ? 20 : 15} />
          {toggleNav && <p>Dashboard</p>}
        </div>

        <div
          className={`${
            toggleNav ? "w-[200px]" : ""
          }  flex gap-3 px-4 py-2 items-center border border-transparent rounded-xl darkText text-sm group groupHover`}
        >
          <BsBag size={20} className="group-hover:text-[#5570F1]" />

          {toggleNav && <p className="group-hover:text-white">Order</p>}
        </div>
        <div
          className={`${
            toggleNav ? "w-[200px]" : ""
          }  flex gap-3 px-4 py-2 items-center border border-transparent rounded-xl darkText text-sm group groupHover`}
        >
          <BsPeople size={20} className="group-hover:text-[#5570F1] " />
          {toggleNav && <p className="group-hover:text-white">Customers</p>}
        </div>
        <div
          className={`${
            toggleNav ? "w-[200px]" : ""
          }  flex gap-3 px-4 py-2 items-center border border-transparent rounded-xl darkText text-sm group groupHover`}
        >
          <MdOutlineInventory2
            size={20}
            className="group-hover:text-[#5570F1]"
          />
          {toggleNav && <p className="group-hover:text-white">Inventory</p>}
        </div>
        <div
          className={`${
            toggleNav ? "w-[200px]" : ""
          }  flex gap-3 px-4 py-2 items-center border border-transparent rounded-xl darkText text-sm group groupHover`}
        >
          <BsChatDots size={20} className="group-hover:text-[#5570F1]" />
          {toggleNav && <p className="group-hover:text-white">Conversations</p>}
        </div>
        <div
          className={`${
            toggleNav ? "w-[200px]" : ""
          }  flex gap-3 px-4 py-2 items-center border border-transparent rounded-xl darkText text-sm group groupHover`}
        >
          <FiSettings size={20} className="group-hover:text-[#5570F1]" />
          {toggleNav && <p className="group-hover:text-white">Settings</p>}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-[100px] flex flex-col items-center gap-2 text-sm">
        {/* Contact Support */}
        <div
          className={`${
            toggleNav ? "w-[200px]" : ""
          }  flex gap-3 px-4 py-2 items-center border border-transparent rounded-xl darkText text-sm group groupHover`}
        >
          <GiChameleonGlyph size={25} className="group-hover:text-[#5570F1]" />
          {toggleNav && (
            <p className="group-hover:text-white text-xs">Contact Support</p>
          )}
        </div>
        {/* Promo & Upgrade */}
        {toggleNav && (
          <div className="flex flex-col gap-3 px-5 py-2 items-center border border-transparent w-[200px] rounded-xl darkText  text-sm bg-[#FFCC91] group groupHover">
            <section className="flex  items-center gap-2">
              <GiChameleonGlyph
                size={25}
                className="group-hover:text-[#5570F1]"
              />
              {toggleNav && (
                <p className="group-hover:text-white text-xs">
                  Free Gift Awaits You!
                </p>
              )}
            </section>
            <section className="flex  items-center  font-light gap-2">
              <p className="group-hover:text-white text-xs">
                Upgrade your account
              </p>
              <p> &gt; </p>
            </section>
          </div>
        )}
        {/* Logout */}
        <div className="flex items-center gap-2 cursor-pointer">
          <BiLogOut size={25} color="#CC5F5F" />
          {toggleNav && <p className="text-xs text-[#CC5F5F]">Logout</p>}
        </div>
      </div>
      {/* Menu toggle */}
      {toggleNav && !isDesktop && (
        <div className="absolute right-3 top-3">
          <GiHamburgerMenu
            color="#5570F1"
            size={20}
            onClick={handleToggleNav}
            className="cursor-pointer"
          />
        </div>
      )}
    </div>
  )
}

export default SideBar
